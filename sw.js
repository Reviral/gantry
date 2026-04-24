const CACHE_NAME = 'gantry-v2'; // Changed version to force a refresh
const ASSETS = [
  './index.workingbackup.html',
  './manifest.json',
  './gantry-icon-192.png',
  './gantry-icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});