// ===============================
// TYPING EFFECT
// ===============================

const roles = [
    "MCA Student",
    "Full Stack Developer",
    "AI Enthusiast",
    "Web Developer",
    "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }
        });
    },

    {
        threshold: 0.15
    }
);

const hiddenElements =
    document.querySelectorAll(
        ".glass-card, .project-card, .section-title"
    );

hiddenElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);
});


// ===============================
// ACTIVE NAVBAR LINKS
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            ===
            `#${current}`
        ) {

            link.classList.add("active");
        }
    });
});


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const header =
    document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.3)";

    } else {

        header.style.boxShadow =
            "none";
    }
});


// ===============================
// PROJECT CARD HOVER EFFECT
// ===============================

const cards =
    document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.transform =
                `
                perspective(1000px)
                rotateX(${(y - rect.height / 2) / 20}deg)
                rotateY(${-(x - rect.width / 2) / 20}deg)
                translateY(-10px)
                `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";
        }
    );
});


// ===============================
// SMOOTH SCROLL FOR NAV LINKS
// ===============================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                target.scrollIntoView({

                    behavior: "smooth"
                });
            }
        );
    });


// ===============================
// WELCOME MESSAGE
// ===============================

window.addEventListener("load", () => {

    console.log(
        "Welcome to Anusha's Portfolio 🚀"
    );
});

document.getElementById("year").textContent = new Date().getFullYear();