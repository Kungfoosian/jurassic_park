/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function displayNav() {
  let myLinks = document.getElementById("myLinks");
  myLinks.style.width = "100%";
  
  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
    // myLinks.style.position = "absolute";
  }
}

// Animation for hamburger
const hamburgerNav = document.getElementById('nav-toggle');
const hamburgerTop = document.getElementById('burger-top');
const hamburgerBottom = document.getElementById('burger-bottom');

hamburgerNav.addEventListener('click', e => {

  hamburgerTop.classList.toggle('top-normal');  
  hamburgerTop.classList.toggle('top-cross');  
  
  hamburgerBottom.classList.toggle('bottom-normal');  
  hamburgerBottom.classList.toggle('bottom-cross');  
})

