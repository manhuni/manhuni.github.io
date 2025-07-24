// Đổi repo gốc ở đây 1 lần
const BASE_PATH = '/lib/'; // ví dụ '/libv2/' nếu đổi tên

// Thêm thẻ <base> động vào <head>
const base = document.createElement('base');
base.href = BASE_PATH;
document.head.prepend(base);

async function loadComponent(id, url) {
  const el = document.getElementById(id);
  const res = await fetch(url);
  const text = await res.text();
  el.innerHTML = text;
}

loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');
