const CANONICAL_HOSTNAME = 'nexuskratos.dev';
const REDIRECT_HOSTNAMES = new Set([
  'nexuskratos.com',
  'www.nexuskratos.com',
  'www.nexuskratos.dev',
]);

export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (REDIRECT_HOSTNAMES.has(url.hostname)) {
      // Keep the encoded path and query, but fix every part of the target origin.
      // Neither the Host header nor query parameters determine the destination.
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOSTNAME;
      url.port = '';
      url.hash = '';
      return Response.redirect(url.href, 301);
    }

    // Includes the primary domain and workers.dev previews. Asset responses,
    // including custom 404 status and headers, pass through unchanged.
    return env.ASSETS.fetch(request);
  },
};
