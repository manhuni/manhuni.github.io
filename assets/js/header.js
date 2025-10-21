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
// assets/js/header.js
let deferredPrompt = null;

const installBtn = document.getElementById('installAppBtn');
if (installBtn) installBtn.hidden = true;

// 🔹 Đăng ký Service Worker (chạy 1 lần cho toàn site)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('✅ Service Worker registered globally'))
      .catch(err => console.warn('❌ SW registration failed:', err));
  });
}

// 🔹 Lắng nghe sự kiện beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBtn) installBtn.hidden = false;

  console.log('📱 Ready to install PWA');

  installBtn?.addEventListener('click', async () => {
    installBtn.hidden = true;
    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);

    deferredPrompt = null;
  }, { once: true });
});

// 🔹 Khi app đã được cài đặt
window.addEventListener('appinstalled', () => {
  console.log('🎉 PWA đã được cài đặt!');
  if (installBtn) installBtn.hidden = true;
});


