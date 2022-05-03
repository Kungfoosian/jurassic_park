// Animation for hamburger
const navTop = document.getElementById('navTop');
const logo = document.getElementById('logo');
const hamburgerNav = document.getElementById('nav-toggle');
const hamburgerTop = document.getElementById('burger-top');
const hamburgerBottom = document.getElementById('burger-bottom');
const dropdown = document.getElementById('dropdown');

hamburgerNav.addEventListener('click', e => {
  logo.classList.toggle('filter-dark');
  
  dropdown.classList.toggle('hidden');
  
  hamburgerTop.classList.toggle('top-normal');  
  hamburgerTop.classList.toggle('top-cross');  
  
  hamburgerBottom.classList.toggle('bottom-normal');  
  hamburgerBottom.classList.toggle('bottom-cross');  

  dropdown.classList.toggle('bg-white');
  navTop.classList.toggle('bg-white');
})

