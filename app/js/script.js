// Navigation toggle
const navOpen = document.querySelector('.navbar-toggle');
const navContainer = document.getElementById('nav-ubs');
const navClose = document.querySelector('.navigation__close');

navOpen.addEventListener('click', (e) => {
  navContainer.classList.add('open');
  navOpen.setAttribute('aria-expanded', true);
});

navClose.addEventListener('click', () => {
  navContainer.classList.remove('open');
  navOpen.setAttribute('aria-expanded', false);
});
