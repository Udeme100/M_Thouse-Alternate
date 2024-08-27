// Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pop-Up Modal Logic
const modal = document.getElementById('quote-modal');
const closeBtn = document.querySelector('.close');

document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Slider Logic for "Our Work" Section
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 4000);
}

// About Section Slider Logic for Mobile View
let aboutSlideIndex = 0;
const aboutImages = document.querySelectorAll('.about-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showAboutSlides(n) {
    if (n >= aboutImages.length) aboutSlideIndex = 0;
    if (n < 0) aboutSlideIndex = aboutImages.length - 1;
    for (let i = 0; i < aboutImages.length; i++) {
        aboutImages[i].style.display = 'none';
    }
    aboutImages[aboutSlideIndex].style.display = 'block';
}

prevBtn.addEventListener('click', function () {
    showAboutSlides(--aboutSlideIndex);
});

nextBtn.addEventListener('click', function () {
    showAboutSlides(++aboutSlideIndex);
});

showAboutSlides(aboutSlideIndex);

// Customer Satisfaction Count Animation
function animateCount(target, start, end, duration) {
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const obj = document.getElementById(target);

    function updateCount() {
        current += increment;
        obj.textContent = current;

        if (current !== end) {
            setTimeout(updateCount, stepTime);
        }
    }

    updateCount();
}

// Start counting on page load
window.onload = function() {
    animateCount('customer-count', 0, 160, 3000);
};

// Mobile Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('showing');
});
