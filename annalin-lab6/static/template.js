document.addEventListener("DOMContentLoaded", function () {
    // Greeting
    let d = new Date();
    let h = d.getHours();
    let message = "have a great day!";

    if (h < 12) message = "Good Morning, " + message;
    else if (h < 18) message = "Good Afternoon, " + message;
    else if (h < 20) message = "Good Evening, " + message;
    else message = "Good Night, " + message;

    const greetingEl = document.getElementById("greeting");
    if (greetingEl) greetingEl.textContent = message;

    // Footer Year
    const yearEl = document.getElementById("copyYear");
    if (yearEl) {
        const y = new Date().getFullYear();
        yearEl.textContent = "© " + y + " Designed and coded by Anna Lin";
    }

    // Read More / Read Less
    const readMoreBtn = document.getElementById("readMore");
    const readLessBtn = document.getElementById("readLess");
    const shortBio = document.getElementById("shortBio");
    const fullBio = document.getElementById("fullBio");

    if (readMoreBtn && readLessBtn && shortBio && fullBio) {
        readMoreBtn.addEventListener("click", function () {
            shortBio.style.display = "none";
            fullBio.style.display = "block";
            readMoreBtn.style.display = "none";
            readLessBtn.style.display = "inline-block";
        });

        readLessBtn.addEventListener("click", function () {
            shortBio.style.display = "block";
            fullBio.style.display = "none";
            readMoreBtn.style.display = "inline-block";
            readLessBtn.style.display = "none";
        });
    }

    // Highlight nav link
    const links = document.querySelectorAll(".nav-link");
    const path = window.location.pathname;
    links.forEach(link => {
        if (link.getAttribute("href") === path || path.endsWith(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });

    // Hamburger toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});