// Scroll into view Navbar Links
const links = document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar Change of Background on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add(
      "bg-white",
      "bg-opacity-70",
      "backdrop-blur-sm",
      "-z-10",
    );
  } else {
    navbar.classList.remove("bg-white", "bg-opacity-70", "blur-sm");
  }
});

// Bento grid Fade on view
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("[id^='bento-grid-card']");
  let hasPlayed = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const card = entry.target;
        if (entry.isIntersecting && !hasPlayed) {
          card.classList.remove("invisible");
          card.classList.add("flex", "animate-fade-up", "animate-duration-700");
        }
      });
    },
    { threshold: 0.5 },
  );
  cards.forEach((card) => {
    observer.observe(card);
  });
});

// Add animation to element
const addAnimation = (domElement) => {
  domElement.classList.remove("opacity-0");
  domElement.classList.add("animate-fade-up", "animate-duration-700");
};

// Translations cell animations
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("translation-container");
  const cells = document.querySelectorAll("[id^='translation-cell']");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cells.forEach((cell, index) => {
              addAnimation(cell);
            });
          }, 500);
        }
      });
    },
    { threshold: 0.5 },
  );
  observer.observe(container);
});

// General "Lazy load" animation
document.addEventListener("DOMContentLoaded", () => {
  const middleSection = document.getElementById("middle-section");
  const projectsSection = document.getElementById("projects");
  const projectsCards = document.querySelectorAll("[id^='project-card']");
  const sections = [middleSection, projectsSection, projectsCards];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            addAnimation(entry.target);
          }, 300);
        }
      });
    },
    { threshold: 0.1 },
  );

  sections.forEach((section) => {
    if (section.length > 1) {
      section.forEach((element) => {
        observer.observe(element);
      });
    } else {
      observer.observe(section);
    }
  });
});
