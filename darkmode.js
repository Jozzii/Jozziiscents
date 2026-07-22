/*=================================
 HASAN OUD BY JOZZI
 darkmode.js
==================================*/

const themeBtn = document.getElementById("themeBtn");

/*=================================
 Load Saved Theme
==================================*/

let savedTheme =
localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light");

themeBtn.innerHTML="☀";

}

/*=================================
 Toggle Theme
==================================*/

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

themeBtn.innerHTML="☀";

}else{

localStorage.setItem("theme","dark");

themeBtn.innerHTML="🌙";

}

});


/*=================================
 Mobile Menu
==================================*/

const menuBtn =
document.querySelector(".menuBtn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});


/*=================================
 Active Navigation
==================================*/

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=
section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*=================================
 Navbar Shadow
==================================*/

window.addEventListener("scroll",()=>{

const navbar=
document.querySelector(".navbar");

if(window.scrollY>80){

navbar.style.boxShadow=
"0 20px 45px rgba(0,0,0,.35)";

}else{

navbar.style.boxShadow="none";

}

});
