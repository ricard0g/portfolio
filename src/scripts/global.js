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

// Google Services animation
/* function animateStrokeDashoffset() {
  const element = document.getElementById("progress-path");
  const startOffset = 402.1238596594935;
  const duration = 3000; // 3 seconds
  let startTime;

  function update(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    element.style.strokeDashoffset = startOffset - (startOffset * progress);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("progress-path");
  if (!element) return;

  let hasPlayed = false;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasPlayed) {
        hasPlayed = true;
        animateStrokeDashoffset();
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(element);
}); */

// This is the piece of code I got from o1 based on this prompt: "
// I want the stroke-dashoffset to go completely to 0 in a very gradual manner. This will simulate a progress bar. When I say gradual it has to be very gradual.
// Create a javascript function that very gradually decreases the stroke-dashoffset number from "402.1238596594935" to "0". This function should use plain JavaScript.
// Be careful and don't decrease the number in gaps. I want the digit to decrease in a completely linear manner.
// "
