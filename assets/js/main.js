(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();
const BASE_PATH = '/'; // gốc domain

async function loadComponent(id, url) {
  const el = document.getElementById(id);
  const res = await fetch(BASE_PATH + url);
  const text = await res.text();
  el.innerHTML = text;

  // Tìm tất cả <link rel="stylesheet"> bên trong component
  el.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    const href = link.getAttribute('href');
    // Tạo thẻ link mới
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = href;
    document.head.appendChild(newLink);
    // Xoá thẻ link cũ khỏi innerHTML để tránh trùng lặp
    link.remove();
  });
  // ✅ Load <script src="..."> thủ công
  el.querySelectorAll('script[src]').forEach(script => {
    const src = script.getAttribute('src');
    const newScript = document.createElement('script');
    newScript.src = src;
    newScript.defer = true;
    document.body.appendChild(newScript);
    script.remove();
  });
}

loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');
