// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Animate links
    navLinksLi.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    // Hamburger animation
    hamburger.classList.toggle('toggle');
});

// Project Read More Toggle
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const moreInfo = button.nextElementSibling;
        if (moreInfo.style.display === "block") {
            moreInfo.style.display = "none";
            button.textContent = "Read More";
        } else {
            moreInfo.style.display = "block";
            button.textContent = "Read Less";
        }
    });
});

// Animate Progress Bars on Scroll
window.addEventListener('scroll', () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            bar.style.width = bar.getAttribute('style').split('width: ')[1];
        }
    });
});