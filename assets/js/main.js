// ===========================
// INITIALIZE AOS
// ===========================
AOS.init({
    duration: 900,
    once: true,
    easing: "ease-in-out"
});

// ===========================
// TYPING EFFECT
// ===========================
new Typed("#typing", {
    strings: [
        "IT Support",
        "Web Developer",
        "Problem Solver",
        "Tech Enthusiast"
    ],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1800,
    loop: true
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===========================
// FADE IN HERO
// ===========================
window.addEventListener("load", () => {

    document.querySelector("section").classList.add("fade-up");

});

// ===========================
// PROJECT CARD ANIMATION
// ===========================
const cards = document.querySelectorAll(".glass-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ===========================
// CURRENT YEAR
// ===========================
const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML =
`© ${year} Kenn Carrido. All Rights Reserved.`;