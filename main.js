const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle the navigation menu
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

// Close the navigation menu when a link is clicked
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// ScrollReveal options
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    reset: true
};

// Header container animations
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// About container animations
ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// Skills container animations
ScrollReveal().reveal(".skills__container .section__header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".skills__grid .skill__card", {
    ...scrollRevealOption,
    interval: 300,
});

// Projects container animations
ScrollReveal().reveal(".projects__container .section__header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".projects__grid .project__card", {
    ...scrollRevealOption,
    interval: 300,
});

// Internship container animations
ScrollReveal().reveal(".internship__container .section__header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".internship__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
});

// Contact container animations
ScrollReveal().reveal(".contact__container .section__header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".contact__container .contact__form", {
    ...scrollRevealOption,
    delay: 500,
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});