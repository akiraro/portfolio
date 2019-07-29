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

// Pop Up Modal
// document.getElementById("work1").addEventListener("click", function() {
//   document.querySelector(".bg-modal1").style.display = "flex";
// });

document.getElementById("work1btn").addEventListener("click", function() {
  document.querySelector(".bg-modal1").style.visibility = "visible";
});

document.getElementById("work2btn").addEventListener("click", function() {
  document.querySelector(".bg-modal2").style.visibility = "visible";
});

document.getElementById("work3").addEventListener("click", function() {
  document.querySelector(".bg-modal3").style.visibility = "visible";
});

document.getElementById("work4").addEventListener("click", function() {
  document.querySelector(".bg-modal4").style.visibility = "visible";
});

// Close button
document.querySelector(".close1").addEventListener("click", function() {
  document.querySelector(".bg-modal1").style.visibility = "hidden";
});

document.querySelector(".close2").addEventListener("click", function() {
  document.querySelector(".bg-modal2").style.visibility = "hidden";
});

document.querySelector(".close3").addEventListener("click", function() {
  document.querySelector(".bg-modal3").style.visibility = "hidden";
});

document.querySelector(".close4").addEventListener("click", function() {
  document.querySelector(".bg-modal4").style.visibility = "hidden";
});
