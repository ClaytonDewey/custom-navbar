// Navigation toggle
// const navOpen = document.querySelector('.navbar-toggler');
// const navContainer = document.getElementById('nav-ubs');
// const navClose = document.querySelector('.nav__close');
const searchBtn = document.getElementById('search');
const search = document.querySelector('.search');

// const dropdownToggle = document.querySelectorAll('.toggle-dropdown');

// navOpen.addEventListener('click', (e) => {
//   navContainer.classList.add('open');
//   navOpen.setAttribute('aria-expanded', true);
// });

// navClose.addEventListener('click', () => {
//   navContainer.classList.remove('open');
//   navOpen.setAttribute('aria-expanded', false);

//   dropdownToggle.forEach((e) => {
//     e.parentNode.classList.remove('active');
//   });
// });

// dropdownToggle.forEach((event) => {
//   event.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.target.parentNode.classList.toggle('active');
//   });
// });

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  search.classList.toggle('open');
});
