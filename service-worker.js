const CACHE_NAME = 'cocina-v1';
const urlsToCache = [
  './',
  './index.html',
  './diseno.css',
  './manifest.json',
  './icono.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
