let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let logoContainer = document.querySelector('.page-header__logo-container');
let pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        logoContainer.style.backgroundColor = '#283645';
        pageHeader.style.backgroundPosition = '50% 257px';
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        logoContainer.style.backgroundColor = 'rgba(0,0,0,.3)';
        pageHeader.style.backgroundPosition = '0 0';
    }
});
