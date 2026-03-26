// 簡單的 Service Worker，用來觸發 PWA 安裝條件
self.addEventListener('install', (e) => {
    console.log('[Service Worker] 安裝成功');
});

self.addEventListener('fetch', (e) => {
    // 目前保持空白放行，確保每次抓取最新資料
});