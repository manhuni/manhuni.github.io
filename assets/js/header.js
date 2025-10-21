(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();
const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav ul');
const backdrop = document.querySelector('.menu-backdrop');

toggle.addEventListener('click', () => {
  navList.classList.toggle('show');
  backdrop.classList.toggle('show');
});

backdrop.addEventListener('click', () => {
  navList.classList.remove('show');
  backdrop.classList.remove('show');
});

navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('show');
    backdrop.classList.remove('show');
  });
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('✅ Service Worker registered!'))
    .catch(err => console.error('SW registration failed:', err));
}

let deferredPrompt;
const installBtn = document.getElementById('installAppBtn');

// Bắt sự kiện beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // Ngăn popup mặc định
  deferredPrompt = e;
  installBtn.hidden = false; // Hiện nút cài đặt

  installBtn.addEventListener('click', async () => {
    installBtn.hidden = true;
    deferredPrompt.prompt(); // Gọi popup “Thêm vào MH chính”
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);
    deferredPrompt = null;
  });
});

// Khi app đã cài đặt
window.addEventListener('appinstalled', () => {
  console.log('PWA đã được cài đặt!');
});

