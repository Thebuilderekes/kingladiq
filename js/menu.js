const menu = document.getElementById("nav-menu");
const firstMenuLine = document.getElementById("menu-line1");
const secondMenuLine = document.getElementById("menu-line2");
const navItems = document.getElementById("nav-menu-items");
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
















// const menuOpen =() =>{ menu.addEventListener("click",  function toggleMenu() {

//     firstMenuLine.classList.add("slant-down");
//     secondMenuLine.classList.add("slant-up");
//     navItems.style.left = 0;
//     navItems.style.display = "block";
//      clickCount++
//      console.log(clickCount)


//  if( clickCount % 2 === 0 ){
//        menuClose()
//       } else if ( clickCount % 2 != 0 ){
     
//            menuOpen()  
//            }
// })}



// const menuClose = () => {menu.addEventListener("click",  function toggleMenuOff() {
//         firstMenuLine.classList.remove("slant-down");
//          secondMenuLine.classList.remove("slant-up");
//          navItems.style.display = "none";
//     })

// }


