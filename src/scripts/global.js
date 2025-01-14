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

// Translations cell animations
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("translation-container");
  const cells = document.querySelectorAll("[id^='translation-cell']");
  let hasPlayed = false;

  const addAnimation = (cell, hasPlayed, position) => {
    hasPlayed = true;
    cell.classList.remove("opacity-0");
    cell.classList.add("animate-fade-up", "animate-duration-700");
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && !hasPlayed) {
          cells.forEach((cell, index) => {
            addAnimation(cell, hasPlayed, index);
          });
        }
      });
    },
    { threshold: 0.8 },
  );
  observer.observe(container);
});
