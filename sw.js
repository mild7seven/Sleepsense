const CACHE_NAME = 'sleepsense-viz-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  if (e.request.url.startsWith(self.location.origin)) {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
  } else {
    e.respondWith(fetch(e.request));
  }
});
