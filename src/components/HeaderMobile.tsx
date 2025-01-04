import React, { useState } from "react";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <section className="flex justify-between w-3/4 m-auto py-4 z-10">
        <div className="z-10">
          <a href="#">
            <img src="/portfolio-logo.svg" className="w-12" />
          </a>
        </div>
        <div>
          <button
            id="mobile-menu-button"
            onClick={toggleMenu}
            className="relative flex-col group items-center justify-around lg:hidden w-10 h-10 z-10"
            aria-label="Open Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div
              id="top-bar"
              className={`absolute top-[20%] mb-2 w-full border-b-2 border-black transition-all ${isMenuOpen ? "-rotate-45 top-1/2 left-1/2" : ""}`}
            ></div>
            <div
              id="mid-bar"
              className={`absolute top-[50%] w-full border-b-2 border-black transition-all ${isMenuOpen ? "translate-x-full opacity-0" : ""}`}
            ></div>
            <div
              id="bot-bar"
              className={`absolute top-[80%] ml-[50%] w-1/2 border-b-2 border-black transition-all ${isMenuOpen ? "w-full rotate-45 top-1/2" : ""}`}
            ></div>
          </button>
        </div>
      </section>
      <nav
        className={`absolute top-0 w-screen h-screen z-[5] bg-shopify-light -translate-y-full transition-all ${isMenuOpen ? "translate-y-0" : ""}`}
      >
        <ul>
          <li>
            <ul></ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
