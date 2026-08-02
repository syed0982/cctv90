// =========================
// GAD CCTV Camera
// script.js
// =========================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Mobile Menu
const nav = document.querySelector("nav");

const menuBtn = document.createElement("button");

menuBtn.innerHTML = "☰";

menuBtn.className = "menu-btn";

document.querySelector("header").prepend(menuBtn);

menuBtn.onclick = function(){

    nav.classList.toggle("show");

};

// Card Animation
const cards = document.querySelectorAll(".card,.product-card,.gallery-card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".6s";

});

// Copyright Year
const footer = document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML = "© " + new Date().getFullYear() + " GAD CCTV Camera. All Rights Reserved.";

}
