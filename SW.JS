const CACHE_NAME = 'glicogabi-v6'; // Mudei para v6 para o celular forçar a atualização
const ASSETS = [
  'index.html',
  'HOME.HTML',
  'CONSULTA E EXAMES.HTML',
  'HISTÓRICO.HTML', // CORRIGIDO: Agora com acento para bater com seu arquivo
  'ESTOQUES.HTML',
  'AJUSTES.HTML',
  'LEMBRETES.HTML',
  'ÍCONE.PNG',      // CORRIGIDO: Nome exato da sua imagem vertical
  'MANIFEST.JSON'   // CORRIGIDO: Nome em maiúsculo conforme sua pasta
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

// Limpa o cache antigo para garantir que as novas cores e textos apareçam
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});
