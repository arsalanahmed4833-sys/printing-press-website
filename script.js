/*==================================================
PRINTING PRESS PREMIUM WEBSITE
script.js
==================================================*/

/*=========================================
AOS
=========================================*/

AOS.init({

    duration:1000,
    once:true,
    easing:"ease-in-out"

});

/*=========================================
INTRO SCREEN
=========================================*/

window.addEventListener("load",()=>{

    const intro=document.getElementById("intro");

    setTimeout(()=>{

        intro.style.opacity="0";
        intro.style.visibility="hidden";

    },2500);

});

/*=========================================
STICKY NAVBAR
=========================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

/*=========================================
MOBILE MENU
=========================================*/

const menu=document.querySelector(".menu");

const nav=document.querySelector("nav");

menu.onclick=()=>{

    nav.classList.toggle("active");

}

document.querySelectorAll("nav a").forEach(link=>{

    link.onclick=()=>{

        nav.classList.remove("active");

    }

});

/*=========================================
SWIPER
=========================================*/

new Swiper(".reviewSwiper",{

    loop:true,

    speed:1000,

    spaceBetween:30,

    autoplay:{

        delay:3500,

        disableOnInteraction:false

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true

    },

    breakpoints:{

        0:{

            slidesPerView:1

        },

        768:{

            slidesPerView:2

        },

        1200:{

            slidesPerView:3

        }

    }

});

/*=========================================
COUNTER
=========================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const update=()=>{

const increment=target/150;

if(count<target){

count+=increment;

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=========================================
SCROLL TO TOP
=========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================================
HERO PARALLAX
=========================================*/

const heroImage=document.querySelector(".hero-bg img");

window.addEventListener("scroll",()=>{

const scrolled=window.pageYOffset;

if(heroImage){

heroImage.style.transform=`translateY(${scrolled*0.25}px) scale(1.08)`;

}

});

/*=========================================
FLOATING ANIMATION
=========================================*/

document.querySelectorAll(".service-card,.portfolio-item,.review-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.transform=

`perspective(1000px)
rotateX(${-(y-rect.height/2)/25}deg)
rotateY(${(x-rect.width/2)/25}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

});

});

/*=========================================
SECTION FADE
=========================================*/

const fadeElements=document.querySelectorAll(".fade-up");

const fadeObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.2

});

fadeElements.forEach(el=>{

fadeObserver.observe(el);

});

/*=========================================
CUSTOM CURSOR
=========================================*/

const cursor=document.createElement("div");

cursor.className="cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.service-card,.portfolio-item").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("active");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("active");

});

});

/*=========================================
IMAGE FADE-IN
=========================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

images.forEach(img=>{

img.style.opacity="0";

img.style.transform="translateY(30px)";

img.style.transition="1s";

imageObserver.observe(img);

});

/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn,.header-btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-this.getBoundingClientRect().left-radius}px`;

circle.style.top=`${e.clientY-this.getBoundingClientRect().top-radius}px`;

circle.classList.add("ripple");

const ripple=this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/*=========================================
PRELOADER SAFETY
=========================================*/

setTimeout(()=>{

const intro=document.getElementById("intro");

if(intro){

intro.style.display="none";

}

},4000);

/*=========================================
CONSOLE MESSAGE
=========================================*/

console.log("%cPrinting Press Website Loaded Successfully!","color:#d4af37;font-size:18px;font-weight:bold;");