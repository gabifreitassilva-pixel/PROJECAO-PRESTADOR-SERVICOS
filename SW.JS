const CACHE_NAME = 'glicogabi-v1';
const ASSETS = [
  'index.html',
  'HOME.HTML',
  'CONSULTA E EXAMES.HTML',
  'HISTORICO.HTML',
  'ESTOQUES.HTML',
  'AJUSTES.HTML',
  'LEMBRETES.HTML',
  'ICONE.PNG',
  'MANIFEST.JSON'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});