// coded by SabWaFei
//selectors
//nav controls
const mainNav = document.querySelector(".main-nav");
const navBtn = document.querySelector(".hamburger-menu");
//functions

//event listeners
// toggles mobile nav menu on/off
navBtn.addEventListener("click", () => {
  if (navBtn.classList.contains("hamburger-menu")) {
    //toggle icon
    navBtn.classList.replace("hamburger-menu", "fa-times");
    //display nav menu
    mainNav.style.display = "block";
  } else {
    //why is x symbol not showing
    navBtn.classList.replace("fa-times", "hamburger-menu");
    mainNav.style.display = "none";
  }
});
