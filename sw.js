const CACHE_NAME = 'mia-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js'
  // Aggiungi qui eventuali immagini o altri file essenziali
];

// Installazione: salva i file in cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Attivazione: serve i file salvati anche senza internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});