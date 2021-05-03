'use strict';

//Etsitään tarvittavat elementit
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-links");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const storyLink = document.getElementById("storyLink");
const infoLink = document.getElementById("infoLink");
const rsvpLink = document.getElementById("rsvpLink");
const contactLink = document.getElementById("contactLink");

//Kun hampparimenu-ikonia klikataan, tulee näkyville responsiivinen valikko
//Sivua ei pysty skrollaamaan tässä näkymässä
menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  body.classList.add("disabledScroll");
}

//Ruksia klikatessa responsiivinen valikko menee piiloon
cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
}

//Linkkiä klikatessa sivu siirtyy haluttuun kohtaan
storyLink.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
}

//Linkkiä klikatessa sivu siirtyy haluttuun kohtaan
infoLink.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
}

//Linkkiä klikatessa sivu siirtyy haluttuun kohtaan
rsvpLink.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
}

//Linkkiä klikatessa sivu siirtyy haluttuun kohtaan
contactLink.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
}

//Skrollatessa animoitu navigaatio tulee näkyviin ja pysyy sivun yläreunassa
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  scrollFunction();
}


//Haetaan nappula
const mybutton = document.getElementById("myBtn");

//Nappula tulee näkyviin, kun skrollataan 500px alaspäin
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Kun nappia painetaan, sivu skrollaantuu yläreunaan
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




