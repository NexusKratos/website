import test from 'node:test';
import assert from 'node:assert/strict';
import worker from './redirect.mjs';

const noAssetFetch = {
  ASSETS: {
    fetch() {
      assert.fail('Redirects must run before the asset binding');
    },
  },
};

for (const hostname of [
  'nexuskratos.com',
  'www.nexuskratos.com',
  'www.nexuskratos.dev',
]) {
  test(`${hostname} permanently redirects the root to the primary domain`, async () => {
    const response = await worker.fetch(new Request(`https://${hostname}/`), noAssetFetch);
    assert.equal(response.status, 301);
    assert.equal(response.headers.get('location'), 'https://nexuskratos.dev/');
  });
}

test('preserves encoded path segments and the raw query encoding', async () => {
  const request = new Request('https://nexuskratos.com/guides/a%2Fb/%E2%9C%93?next=%2Fdocs%3Fa%3D1&tag=a+b&tag=c%20d&empty=');
  const response = await worker.fetch(request, noAssetFetch);
  assert.equal(response.headers.get('location'), 'https://nexuskratos.dev/guides/a%2Fb/%E2%9C%93?next=%2Fdocs%3Fa%3D1&tag=a+b&tag=c%20d&empty=');
});

test('upgrades an HTTP alias directly to HTTPS', async () => {
  const response = await worker.fetch(new Request('http://www.nexuskratos.com/guide?ref=community'), noAssetFetch);
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), 'https://nexuskratos.dev/guide?ref=community');
});

test('removes a nondefault port from the canonical destination', async () => {
  const response = await worker.fetch(new Request('http://nexuskratos.com:8080/docs?a=1'), noAssetFetch);
  assert.equal(response.headers.get('location'), 'https://nexuskratos.dev/docs?a=1');
});

test('hostile Host header, path, and redirect query cannot change the target origin', async () => {
  const request = new Request('https://www.nexuskratos.com//evil.example/%2F?redirect=https://evil.example&host=evil.example', {
    headers: { Host: 'evil.example' },
  });
  const response = await worker.fetch(request, noAssetFetch);
  assert.equal(response.headers.get('location'), 'https://nexuskratos.dev//evil.example/%2F?redirect=https://evil.example&host=evil.example');
  assert.equal(new URL(response.headers.get('location')).origin, 'https://nexuskratos.dev');
});

for (const url of [
  'https://nexuskratos.dev/',
  'https://nexuskratos-website.example.workers.dev/styles.css',
  'https://unknown.example/',
  'https://nexuskratos.com.evil.example/',
  'https://nexuskratos.com@evil.example/',
]) {
  test(`passes ${url} unchanged to static assets`, async () => {
    // A Request rejects credentials; URL-like hostile userinfo is tested using
    // the worker interface directly to verify matching still uses the hostname.
    const request = url.includes('@') ? { url } : new Request(url);
    const assetResponse = new Response('asset content', {
      status: 200,
      headers: { 'Content-Type': 'text/css', 'X-Asset-Test': 'preserved' },
    });
    let fetchCount = 0;
    const response = await worker.fetch(request, {
      ASSETS: {
        fetch(receivedRequest) {
          fetchCount += 1;
          assert.equal(receivedRequest, request);
          return assetResponse;
        },
      },
    });
    assert.equal(fetchCount, 1);
    assert.equal(response, assetResponse);
    assert.equal(response.headers.get('location'), null);
    assert.equal(response.headers.get('X-Asset-Test'), 'preserved');
  });
}

test('preserves the primary-domain asset 404 response and headers', async () => {
  const request = new Request('https://nexuskratos.dev/missing?redirect=https://evil.example');
  const assetResponse = new Response('custom not found page', {
    status: 404,
    headers: { 'Content-Type': 'text/html', 'Content-Security-Policy': "default-src 'none'" },
  });
  const response = await worker.fetch(request, {
    ASSETS: { fetch: (receivedRequest) => {
      assert.equal(receivedRequest, request);
      return assetResponse;
    } },
  });
  assert.equal(response, assetResponse);
  assert.equal(response.status, 404);
  assert.equal(response.headers.get('Content-Security-Policy'), "default-src 'none'");
  assert.equal(await response.text(), 'custom not found page');
});
