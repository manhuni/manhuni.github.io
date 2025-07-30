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
