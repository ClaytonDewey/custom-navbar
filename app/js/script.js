// Navigation toggle
const navOpen = document.querySelector('.navbar-toggle');
const navContainer = document.getElementById('nav-ubs');
const navClose = document.querySelector('.nav__close');

const dropdownToggle = document.querySelectorAll('.toggle-dropdown');

navOpen.addEventListener('click', (e) => {
  navContainer.classList.add('open');
  navOpen.setAttribute('aria-expanded', true);
});

navClose.addEventListener('click', () => {
  navContainer.classList.remove('open');
  navOpen.setAttribute('aria-expanded', false);

  dropdownToggle.forEach((e) => {
    e.parentNode.classList.remove('active');
  });
});

dropdownToggle.forEach((event) => {
  event.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target.parentNode);
    e.target.parentNode.classList.toggle('active');
  });
});
