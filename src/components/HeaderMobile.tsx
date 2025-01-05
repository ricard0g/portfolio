import React, { useState, useEffect } from "react";

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
              className={`absolute top-[20%] mb-2 w-full border-b-2 border-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 translate-y-3" : ""}`}
            ></div>
            <div
              id="mid-bar"
              className={`absolute top-[50%] w-full border-b-2 border-black transition-all duration-300 ${isMenuOpen ? "translate-x-full opacity-0" : ""}`}
            ></div>
            <div
              id="bot-bar"
              className={`absolute top-[80%] ml-[50%] w-1/2 border-b-2 border-black transition-all duration-300 ${isMenuOpen ? "w-full rotate-45 -translate-y-3 -translate-x-[18px]" : ""}`}
            ></div>
          </button>
        </div>
      </section>
      <nav
        className={`absolute top-0 w-screen h-screen z-[5] bg-shopify-light -translate-y-full transition-all duration-500 ${isMenuOpen ? "translate-y-0" : ""}`}
      >
        <ul className="relative p-0 top-1/4">
          <li>
            <ul className="p-0 m-0">
              <li
                className={`mb-4 ${isMenuOpen ? "animate-fade-down animate-duration-200 animate-delay-500" : ""}`}
              >
                <a
                  onClick={toggleMenu}
                  href="#"
                  className="inline-block w-full text-4xl text-center"
                >
                  Home
                </a>
              </li>
              <li
                className={`mb-4 ${isMenuOpen ? "animate-fade-down animate-duration-200 animate-delay-[700ms]" : ""}`}
              >
                <a
                  onClick={toggleMenu}
                  href="#skills"
                  className="inline-block w-full text-4xl text-center"
                >
                  Skills
                </a>
              </li>
              <li
                className={`mb-4 ${isMenuOpen ? "animate-fade-down animate-duration-200 animate-delay-[900ms]" : ""}`}
              >
                <a
                  onClick={toggleMenu}
                  href="#About"
                  className="inline-block w-full text-4xl text-center"
                >
                  About
                </a>
              </li>
              <li
                className={`mb-4 ${isMenuOpen ? "animate-fade-down animate-duration-200 animate-delay-[1100ms]" : ""}`}
              >
                <a
                  onClick={toggleMenu}
                  href="#projects"
                  className="inline-block w-full text-4xl text-center"
                >
                  Projects
                </a>
              </li>
              <li
                className={`mb-4 ${isMenuOpen ? "animate-fade-down animate-duration-200 animate-delay-[1300ms]" : ""}`}
              >
                <a
                  onClick={toggleMenu}
                  href="#contact"
                  className="inline-block w-full text-4xl text-center"
                >
                  Contact
                </a>
              </li>
            </ul>
          </li>
          <li
            className={`w-full mt-24 ${isMenuOpen ? "animate-fade-up animate-duration-500 animate-delay-[1400ms]" : ""}`}
          >
            <ul className="grid grid-cols-2 grid-rows-2 place-items-start gap-x-5 gap-y-8 ">
              <li className="px-10 ml-10 border-l-4 border-black">
                <p className="text-lg">Regular updates on</p>
                <a
                  className="inline-block mt-2 text-3xl font-semibold"
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li className="px-10 ml-10 border-l-4 border-black">
                <p className="text-lg">Daily content on</p>
                <a
                  className="inline-block mt-2 text-3xl font-semibold"
                  href="https://www.x.com"
                  target="_blank"
                >
                  X
                </a>
              </li>
              <li className="px-10 ml-10 border-l-4 border-black">
                <p className="text-lg">See how I work on</p>
                <a
                  className="inline-block mt-2 text-3xl font-semibold"
                  href="https://www.youtube.com"
                  target="_blank"
                >
                  YouTube
                </a>
              </li>
              <li className="px-10 ml-10 border-l-4 border-black">
                <p className="text-lg">Let's connect on</p>
                <a
                  className="inline-block text-3xl mt-2 font-semibold"
                  href="https://www.linkedin.com"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
