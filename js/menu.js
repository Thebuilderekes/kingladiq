const menu = document.getElementById("nav-menu");
const firstMenuLine = document.getElementById("menu-line1");
const secondMenuLine = document.getElementById("menu-line2");
const  navItems = document.getElementById("nav-menu-items");
const body = document.getElementById("body")
let clickCount = 'close';  // to set the state for the clicks to determine when to hide the navigation menu on click


menu.addEventListener("click",  function toggleMenu() {

  // open navigation menu on click

  if (clickCount  === 'close'){ 
    firstMenuLine.classList.add("slant-down");
        secondMenuLine.classList.add("slant-up");
        navItems.style.left = 0;
        navItems.style.display = "block"
        clickCount  = 'open'
       }
 // close navigation menu on click
        else if (clickCount  === 'open'){ 
         firstMenuLine.classList.remove("slant-down");
          secondMenuLine.classList.remove("slant-up");
          navItems.style.display = "none"
          clickCount  = 'close'
          
            }

        
})


window.addEventListener("mouseup", function(event){

  if(event.target != navItems) {

    navItems.style.display = "none";
    // closeMenu.style.display = "none";
    // openMenu.style.display = "block" 
  }

})


// Enable hidden nav bar

  const nav = document.querySelector(".nav-container");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });


  

