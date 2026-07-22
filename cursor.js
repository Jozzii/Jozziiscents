/*==============================
 HASAN OUD BY JOZZI
 cursor.js
==============================*/

const cursorGlow = document.getElementById("cursorGlow");

/*==============================
 Cursor Glow
==============================*/

document.addEventListener("mousemove",(e)=>{

cursorGlow.style.left = e.clientX + "px";

cursorGlow.style.top = e.clientY + "px";

});


/*==============================
 Product Card Tilt
==============================*/

const cards =
document.querySelectorAll(".product-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5)*18;

const rotateX =
((y / rect.height)-0.5)*-18;

card.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});


card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(900px) rotateX(0deg) rotateY(0deg)";

});

});


/*==============================
 Hero Bottle Parallax
==============================*/

const heroBottle =
document.querySelector(".heroImage img");

document.addEventListener("mousemove",(e)=>{

const x =
(window.innerWidth/2 - e.clientX)/40;

const y =
(window.innerHeight/2 - e.clientY)/40;

heroBottle.style.transform=
`translate(${x}px,${y}px)`;

});


/*==============================
 Floating Circles
==============================*/

const circles =
document.querySelectorAll(".floatingCircle");

window.addEventListener("mousemove",(e)=>{

circles.forEach((circle,index)=>{

const speed=(index+1)*0.015;

circle.style.transform=
`translate(${e.clientX*speed}px,
${e.clientY*speed}px)`;

});

});
