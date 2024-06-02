const burg_menu = document.querySelector(".menu-btn");
const nav_box = document.querySelector(".main-nav");
const nav_cont = document.querySelector(".navigation-container");

const toggle = () => {

burg_menu.classList.toggle("active");
nav_box.classList.toggle("active");
// nav_cont.classList.toggle("active");
console.log("working");

}

burg_menu.addEventListener("click",toggle);