const CACHE_NAME = 'goodlife-games-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/logo.png'
    // Add other assets like images if needed
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});