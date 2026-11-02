// =========================
// MOBILE NAVIGATION
// =========================

const menuButton = document.getElementById("open-nav-menu");
const nav = document.getElementById("main-nav");
const navLinks = document.querySelectorAll("#main-nav a");


// Open / close mobile menu
menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");
    menuButton.classList.toggle("active");

    const isOpen = nav.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);
});


// Close menu when a navigation link is clicked
navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuButton.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

    });

});


// =========================
// ORDER BUTTON
// =========================

const orderButton = document.getElementById("order-button");

orderButton.addEventListener("click", () => {

    alert(
        "Thanks for choosing Savanna Bites! " +
        "Our online ordering system will be connected soon."
    );

});


// =========================
// COPYRIGHT YEAR
// =========================

const copyright = document.getElementById("copyright");

const currentYear = new Date().getFullYear();

copyright.textContent =
    `© ${currentYear} Savanna Bites. Made with love from Nigeria.`;

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    });

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });