const navbar = document.querySelector('nav');
let sticky = navbar.offsetTop;
const navbarScroll = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('bg-light')
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-light');
    navbar.classList.add('bg-transparent')
  }
};

window.onscroll = navbarScroll;