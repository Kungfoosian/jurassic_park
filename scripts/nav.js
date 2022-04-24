/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function displayNav() {
    let myLinks = document.getElementById("myLinks");
    
    if (myLinks.style.display === "block") {
      myLinks.style.display = "none";
    } else {
      myLinks.style.display = "block";
    }
  } 