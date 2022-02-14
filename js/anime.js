// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  
  const menuButton = document.getElementById("nav-menu");
const navItems = document.getElementById("nav-menu-items-mobile");
let clickCount = 'close';  // to set the state for the clicks to determine when to hide the navigation menu on click
navItems.style.opacity= 0;


menuButton.addEventListener("click",  function toggleMenu() {

  // open navigation menu on click

  if (clickCount  === 'close'){ ;

        navItems.style.opacity= 1;
        clickCount  = 'open'
       }
 // close navigation menu on click
        else if (clickCount  === 'open'){ 
          navItems.style.opacity= 0;
          clickCount  = 'close'
          
            }

        
})





