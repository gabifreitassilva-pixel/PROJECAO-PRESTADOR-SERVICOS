const CACHE_NAME = 'glicogabi-v14';
const ASSETS = [
  'index.html',
  'HOME.HTML',
  'CONSULTA E EXAMES.HTML',
  'HISTÓRICO.HTML',
  'ESTOQUES.HTML',
  'AJUSTES.HTML',
  'LEMBRETES.HTML',
  'ÍCONE.PNG',
  'MANIFEST.JSON'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});
