

/* =================================
   QELVOR TECHNOLOGIES
   WEBSITE INTERACTIONS
================================= */

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");

            menuToggle.textContent = "☰";

        });

    });

}


// AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ACTIVE NAVIGATION LINK

const currentPage = window.location.pathname.split("/").pop() || "index.html";

if (navigation) {

    navigation.querySelectorAll("a").forEach(link => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }

    });

}


// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".section, .focus-card, .principle, .contact-detail, .product-card"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

}


// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        backToTop.classList.toggle(
            "visible",
            window.scrollY > 400
        );

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            return;
        }

        const emailAddress = "YOUR_EMAIL_ADDRESS";

        const emailSubject = encodeURIComponent(
            "Qelvor Website: " + subject
        );

        const emailBody = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nInquiry: " + subject +
            "\n\nMessage:\n" + message
        );

        window.location.href =
            `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

    });

}

// QELVOR CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            return;
        }

        const emailAddress = "YOUR_EMAIL_ADDRESS";

        const emailSubject = encodeURIComponent(
            "Qelvor Website: " + subject
        );

        const emailBody = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nInquiry: " + subject +
            "\n\nMessage:\n" + message
        );

        const mailtoLink =
            `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

        window.location.href = mailtoLink;

    });

}
