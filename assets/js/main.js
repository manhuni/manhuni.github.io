// Nếu chưa có BASE_PATH thì mặc định
window.BASE_PATH = window.BASE_PATH || './';

// Tạo <base> tag
const base = document.createElement('base');
base.href = BASE_PATH;
document.head.prepend(base);

// Load header/footer
async function loadComponent(id, url) {
  const el = document.getElementById(id);
  const res = await fetch(BASE_PATH + url);
  const text = await res.text();
  el.innerHTML = text;
}

loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');

