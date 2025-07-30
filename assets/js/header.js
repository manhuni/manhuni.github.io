// header toggle logic
const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav ul');
const backdrop = document.querySelector('.menu-backdrop');

if (toggle && navList && backdrop) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    backdrop.classList.toggle('show');
  });

  backdrop.addEventListener('click', () => {
    navList.classList.remove('show');
    backdrop.classList.remove('show');
  });
}
