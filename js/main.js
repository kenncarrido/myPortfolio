// ==============================
// Portfolio Main Script
// ==============================

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Current Year
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Kenn Carrido. All Rights Reserved.`;
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Glass Navbar
const navbar = document.getElementById("navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

/* ==========================
   Mobile Menu
========================== */

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });

    document.querySelectorAll("#mobileMenu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("show");
        });
    });
}