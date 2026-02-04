const CACHE_NAME = 'glicogabi-v1';
const ASSETS = [
  'index.html',
  'home.html',
  'consulta e exames.HTML',
  'historico.HTML',
  'ESTOQUE.HTML',
  'ajuste.html',
  'lembretes .html'
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