// /assets/js/sw.js

self.addEventListener('install', (event) => {
  console.log('[SW] Installed');
  // Bạn có thể thêm logic cache ở đây nếu muốn
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activated');
});

self.addEventListener('fetch', (event) => {
  // Giữ đơn giản, không cache để test
  // Bạn có thể log lại để xem có hoạt động:
  // console.log('[SW] Fetch:', event.request.url);
});
