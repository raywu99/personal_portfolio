// refrence: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth >= 768) {
        // Remove mobile menu settings for larger screens
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "none";
    }

    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
});

hamburger.addEventListener("click", toggleMenu);


menuIcon.style.fontSize = "2rem"; // Set to a larger size
closeIcon.style.fontSize = "2rem"; // Set to a larger size

// update the current year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();