// バージョン名を変更して更新を強制（v4へ）
var CACHE_NAME = 'pwa-core-eternal-final-v4'; 

// 全て "/CORE-ETERNAL/" から始まるパスに変更
var urlsToCache = [
  '/CORE-ETERNAL/',
  '/CORE-ETERNAL/index.html',
  '/CORE-ETERNAL/icon.png',
  '/CORE-ETERNAL/manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// ... fetch と activate の処理は先ほどのコードのままでOK ...
