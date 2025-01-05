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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48px"
              zoomAndPan="magnify"
              viewBox="0 0 375 374.999991"
              height="48px"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="5f24373ab6">
                  <path
                    d="M 136 115 L 342.285156 115 L 342.285156 353.4375 L 136 353.4375 Z M 136 115 "
                    clip-rule="nonzero"
                  />
                </clipPath>
                <clipPath id="05d2bfb94c">
                  <path
                    d="M 32.535156 21.9375 L 237 21.9375 L 237 214 L 32.535156 214 Z M 32.535156 21.9375 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#5f24373ab6)">
                <path
                  fill={isMenuOpen ? "#ffffff" : "#000000"}
                  d="M 241.835938 268.316406 C 271.78125 260.21875 296.050781 247.480469 314.613281 230.128906 C 333.160156 212.78125 342.449219 190.332031 342.449219 162.757812 L 342.449219 115.820312 L 237.808594 116.015625 L 237.808594 166.652344 C 237.808594 181.246094 230.992188 192.914062 217.351562 201.675781 C 203.71875 210.425781 184.160156 214.804688 158.664062 214.804688 L 136.867188 214.804688 L 136.867188 282.777344 L 200.308594 353.085938 L 321.039062 353.085938 L 241.835938 268.316406 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
              <g clip-path="url(#05d2bfb94c)">
                <path
                  fill={isMenuOpen ? "#ffffff" : "#000000"}
                  d="M 236.820312 115.175781 L 236.820312 21.945312 L 32.582031 21.945312 L 32.582031 213.304688 L 135.875 213.304688 L 135.875 115.175781 L 236.820312 115.175781 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
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
              className={`absolute top-[20%] mb-2 w-full border-b-2 border-black transition-all duration-300 ${isMenuOpen ? "border-white -rotate-45 translate-y-3" : ""}`}
            ></div>
            <div
              id="mid-bar"
              className={`absolute top-[50%] w-full border-b-2 border-black transition-all duration-300 ${isMenuOpen ? "border-white translate-x-full opacity-0" : ""}`}
            ></div>
            <div
              id="bot-bar"
              className={`absolute top-[80%] ml-[50%] w-1/2 border-b-2 border-black transition-all duration-300 ${isMenuOpen ? "border-white w-full rotate-45 -translate-y-3 -translate-x-[18px]" : ""}`}
            ></div>
          </button>
        </div>
      </section>
      <nav
        className={`absolute top-0 w-screen h-screen z-[5] bg-[#131313] -translate-y-full transition-all duration-500 ${isMenuOpen ? "translate-y-0" : ""}`}
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
                  className="inline-block w-full text-4xl text-center text-white"
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
                  className="inline-block w-full text-4xl text-center text-white"
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
                  className="inline-block w-full text-4xl text-center text-white"
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
                  className="inline-block w-full text-4xl text-center text-white"
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
                  className="inline-block w-full text-4xl text-center text-white"
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
              <li className="px-10 ml-10 border-l-4 border-white">
                <p className="text-lg text-white">Regular updates on</p>
                <a
                  className="inline-block mt-2 text-3xl text-white font-semibold"
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li className="px-10 ml-10 border-l-4 border-white">
                <p className="text-lg text-white">Daily content on</p>
                <a
                  className="inline-block mt-2 text-3xl text-white font-semibold"
                  href="https://www.x.com"
                  target="_blank"
                >
                  X
                </a>
              </li>
              <li className="px-10 ml-10 border-l-4 border-white">
                <p className="text-lg text-white">See how I work on</p>
                <a
                  className="inline-block mt-2 text-3xl text-white font-semibold"
                  href="https://www.youtube.com"
                  target="_blank"
                >
                  YouTube
                </a>
              </li>
              <li className="px-10 ml-10 border-l-4 border-white">
                <p className="text-lg text-white">Let's connect on</p>
                <a
                  className="inline-block text-3xl text-white mt-2 font-semibold"
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
