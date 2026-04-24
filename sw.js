const CACHE_NAME = 'sleepsense-v2';
const LOCAL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache for local assets');
        // Catch block prevents installation failure if icons are missing
        return cache.addAll(LOCAL_ASSETS).catch(err => console.warn('Some assets missing, skipping cache for them.', err));
      })
  );
});

self.addEventListener('fetch', event => {
  // Only intercept requests for local assets (same origin)
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(response => {
        // Return cached version if found, else fetch from network
        return response || fetch(event.request);
      })
    );
  } else {
    // Bypass service worker for external requests (e.g., TensorFlow CDN, Google Storage)
    event.respondWith(fetch(event.request));
  }
});

// Clean up old caches
self.addEventListener('activate', event => {
  const cacheAllowlist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
