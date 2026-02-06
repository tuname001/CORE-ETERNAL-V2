var CACHE_NAME = 'pwa-core-eternal-final-v1';
var urlsToCache = [
  './',
  './index.html',
  './icon.png'
];

// インストール処理
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// リクエスト処理
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response ? response : fetch(event.request);
      })
  );
});


