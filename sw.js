// バージョンを更新 (v2 -> v3)
var CACHE_NAME = 'pwa-core-eternal-final-v3'; 

var urlsToCache = [
  '.',            // start_urlに合わせてドットのみの指定を追加
  './',           // 念のため残す
  './index.html',
  './icon.png',
  './manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// 古いキャッシュを削除する処理を追加（重要）
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response ? response : fetch(event.request);
      })
  );
});
