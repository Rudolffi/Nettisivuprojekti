'use strict';

//Hampurilaismenusta klikatessa valikko tulee näkyviin vasemmalta
$(document).ready(function(){
  $('.menu').click(function(){
    $('nav').toggleClass('active')
  })
});

$('nav a').click(function(){
  $("nav").toggleClass('hide');
});



// Käyttäjän selatessa sivua funktio aktivoituu
window.onscroll = function() {myFunction()};

const navbar = document.getElementById("navigation");

let sticky = navbar.offsetTop;

//Funktio, jotta navigaatio saadaan pysymään koko ajan sivun yläreunassa
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
