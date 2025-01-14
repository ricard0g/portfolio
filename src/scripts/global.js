import { CountUp } from "countup.js";

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
function animateStrokeDashoffsetSeo() {
  const progressSeo = document.getElementById("progress-path-seo");
  const startOffsetSeo = 402.1238596594935;
  const duration = 3000; // 3 seconds
  let startTime;

  function update(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    progressSeo.style.strokeDashoffset =
      startOffsetSeo - startOffsetSeo * progress;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function animateStrokeDashoffsetPerformance() {
  const progressPerformance = document.getElementById(
    "progress-path-performance",
  );
  const startOffsetRest = 339.29200658769764;
  const duration = 3000; // 3 seconds
  let startTime;

  function update(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    progressPerformance.style.strokeDashoffset =
      startOffsetRest - startOffsetRest * progress;
    if (progress < 0.97) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function animateStrokeDashoffsetAccessibility() {
  const progressPerformance = document.getElementById(
    "progress-path-accessibility",
  );
  const startOffsetRest = 339.29200658769764;
  const duration = 3000; // 3 seconds
  let startTime;

  function update(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    progressPerformance.style.strokeDashoffset =
      startOffsetRest - startOffsetRest * progress;
    if (progress < 0.95) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const countUpOptions = {
  startVal: 0,
  duration: 3,
};
const countUpSeo = new CountUp("progress-text-seo", 100, countUpOptions);
const countUpPerformance = new CountUp(
  "progress-text-performance",
  99,
  countUpOptions,
);
const countUpAccessibility = new CountUp(
  "progress-text-accessibility",
  98,
  countUpOptions,
);

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[id^='progress-path-']");
  const container = document.getElementById(
    "performance-optimization-container",
  );
  console.log(container);
  console.log(`Classes: ${container.classList}`);
  if (!elements) return;

  let hasPlayed = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayed) {
          setTimeout(() => {
            hasPlayed = true;
            animateStrokeDashoffsetSeo();
            animateStrokeDashoffsetPerformance();
            animateStrokeDashoffsetAccessibility();
            countUpSeo.start();
            countUpPerformance.start();
            countUpAccessibility.start();
            observer.unobserve(elements);
          }, 1000);
        }
      });
    },
    { threshold: 0.8 },
  );
  elements.forEach((element) => {
    observer.observe(element);
  });
});
