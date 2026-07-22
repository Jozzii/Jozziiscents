/*==============================
 HASAN OUD BY JOZZI
 app.js
==============================*/

/*==============================
 Scroll Progress Bar
==============================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

const totalHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
(window.pageYOffset / totalHeight) * 100;

progressBar.style.width =
progress + "%";

});


/*==============================
 Sticky Navbar
==============================*/

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.style.background =
"rgba(10,10,10,.92)";

navbar.style.top = "0";

navbar.style.borderRadius = "0";

navbar.style.width = "100%";

}else{

navbar.style.background =
"rgba(20,20,20,.65)";

navbar.style.top = "18px";

navbar.style.width = "90%";

navbar.style.borderRadius = "18px";

}

});


/*==============================
 Add To Cart
==============================*/

const cartButtons =
document.querySelectorAll(".cartBtn");

const cartCount =
document.getElementById("cartCount");

const toast =
document.getElementById("toast");

let count = 0;

cartButtons.forEach(button=>{

button.addEventListener("click",()=>{

count++;

cartCount.innerText = count;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

});

});


/*==============================
 Wishlist
==============================*/

const hearts =
document.querySelectorAll(".wishBtn");

hearts.forEach(btn=>{

btn.addEventListener("click",()=>{

if(btn.innerHTML=="♡"){

btn.innerHTML="❤";

btn.style.color="#ff3c66";

}else{

btn.innerHTML="♡";

btn.style.color="#fff";

}

});

});


/*==============================
 Back To Top
==============================*/

const backTop =
document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

backTop.style.opacity="1";

backTop.style.pointerEvents="auto";

}else{

backTop.style.opacity="0";

backTop.style.pointerEvents="none";

}

});


/*==============================
 Smooth Scroll
==============================*/

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document
.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});


/*==============================
 Counter Animation
==============================*/

const counters =
document.querySelectorAll(".counter");

const startCounter = ()=>{

counters.forEach(counter=>{

const target =
+counter.dataset.target;

let current = 0;

const speed = target / 150;

const update = ()=>{

current += speed;

if(current < target){

counter.innerText =
Math.ceil(current);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

};

update();

});

};

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter();

observer.disconnect();

}

});

});

observer.observe(document.querySelector(".stats"));



/*==============================
 Scroll Reveal
==============================*/

const reveals =
document.querySelectorAll(

".product-card,.feature,.testimonial,.stat"

);

const revealObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

reveals.forEach(item=>{

item.style.opacity=0;

item.style.transform="translateY(60px)";

item.style.transition=".8s";

revealObserver.observe(item);

});
