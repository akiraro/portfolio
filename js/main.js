// Select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// About Rotating Test JS + JQuery //
var terms = ["MySQL", "Python", "AWS", "Firebase", "Node.JS"];

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate")
    .data("term", ct == terms.length - 1 ? 0 : ct + 1)
    .text(terms[ct])
    .fadeIn()
    .delay(1000)
    .fadeOut(200, rotateTerm);
}
$(rotateTerm);
