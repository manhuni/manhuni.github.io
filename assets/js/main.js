const BASE_PATH = '/'; // gốc domain

async function loadComponent(id, url) {
  const el = document.getElementById(id);
  const res = await fetch(BASE_PATH + url);
  const text = await res.text();
  el.innerHTML = text;
}

loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');
