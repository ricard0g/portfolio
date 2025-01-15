import { useState } from "react";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="md:hidden overflow-hidden z-50">
      <section className="fixed top-0 left-5 flex justify-between w-[90%] md:w-4/5 m-auto py-4 z-40">
        <div className="">
          <a href="#home">
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
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="05d2bfb94c">
                  <path
                    d="M 32.535156 21.9375 L 237 21.9375 L 237 214 L 32.535156 214 Z M 32.535156 21.9375 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#5f24373ab6)">
                <path
                  fill={isMenuOpen ? "#ffffff" : "#000000"}
                  d="M 241.835938 268.316406 C 271.78125 260.21875 296.050781 247.480469 314.613281 230.128906 C 333.160156 212.78125 342.449219 190.332031 342.449219 162.757812 L 342.449219 115.820312 L 237.808594 116.015625 L 237.808594 166.652344 C 237.808594 181.246094 230.992188 192.914062 217.351562 201.675781 C 203.71875 210.425781 184.160156 214.804688 158.664062 214.804688 L 136.867188 214.804688 L 136.867188 282.777344 L 200.308594 353.085938 L 321.039062 353.085938 L 241.835938 268.316406 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
              <g clipPath="url(#05d2bfb94c)">
                <path
                  fill={isMenuOpen ? "#ffffff" : "#000000"}
                  d="M 236.820312 115.175781 L 236.820312 21.945312 L 32.582031 21.945312 L 32.582031 213.304688 L 135.875 213.304688 L 135.875 115.175781 L 236.820312 115.175781 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </a>
        </div>
        <div>
          <button
            id="mobile-menu-button"
            onClick={toggleMenu}
            className="relative flex-col group items-center justify-around lg:hidden w-10 h-10 z-50 pr-2"
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
        className={`fixed top-0 w-full min-h-full z-30 h-auto py-8 bg-[#131313] -translate-y-full transition-all duration-500 ${isMenuOpen ? "translate-y-0" : ""}`}
      >
        <ul className="relative flex flex-col justify-evenly items-center content-center h-screen p-0">
          <li>
            <ul className="p-0 m-0">
              <li
                className={`mb-4 ${isMenuOpen ? "animate-fade-down animate-duration-200 animate-delay-500" : ""}`}
              >
                <a
                  onClick={toggleMenu}
                  href="#home"
                  className="inline-block w-full text-3xl sm:text-4xl font-bold text-center text-white"
                >
                  Home
                </a>
              </li>
              <li
                className={`mb-4 ${isMenuOpen ? "animate-fade-down animate-duration-200 animate-delay-[700ms]" : ""}`}
              >
                <a
                  onClick={toggleMenu}
                  href="#services"
                  className="inline-block w-full text-3xl sm:text-4xl text-center font-bold text-white"
                >
                  Services
                </a>
              </li>
              <li
                className={`mb-4 ${isMenuOpen ? "animate-fade-down animate-duration-200 animate-delay-[900ms]" : ""}`}
              >
                <a
                  onClick={toggleMenu}
                  href="#About"
                  className="inline-block w-full text-3xl sm:text-4xl text-center text-white font-bold"
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
                  className="inline-block w-full text-3xl sm:text-4xl text-center font-bold text-white"
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
                  className="inline-block w-full text-3xl sm:text-4xl text-center font-bold text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </li>
          <li
            className={`w-full ${isMenuOpen ? "animate-fade-up animate-duration-500 animate-delay-[1400ms]" : ""}`}
          >
            <ul className="grid grid-cols-2 grid-rows-2 place-items-start gap-x-5 gap-y-8 ">
              <li className="px-5 sm:px-10 ml-5 sm:ml-10 border-l-4 border-white">
                <p className="text-sm sm:text-lg text-white">
                  Regular updates on
                </p>
                <a
                  className="inline-flex mt-2 text-xl sm:text-3xl text-white font-bold"
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  Instagram
                  <svg
                    className="ml-1 mt-[2px]"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </a>
              </li>
              <li className="px-5 sm:px-10 ml-5 sm:ml-10 border-l-4 border-white">
                <p className="text-sm sm:text-lg text-white">
                  Daily content on
                </p>
                <a
                  className="inline-flex mt-2 text-2xl sm:text-3xl text-white font-bold"
                  href="https://www.x.com"
                  target="_blank"
                >
                  X
                  <svg
                    className="ml-1 mt-[2px]"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </a>
              </li>
              <li className="px-5 sm:px-10 ml-5 sm:ml-10 border-l-4 border-white">
                <p className="text-sm sm:text-lg text-white">
                  See how I work on
                </p>
                <a
                  className="inline-flex mt-2 text-2xl sm:text-3xl text-white font-bold"
                  href="https://www.youtube.com"
                  target="_blank"
                >
                  YouTube
                  <svg
                    className="ml-1 mt-[2px]"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </a>
              </li>
              <li className="px-5 sm:px-10 ml-5 sm:ml-10 border-l-4 border-white">
                <p className="text-sm sm:text-lg text-white">
                  Let's connect on
                </p>
                <a
                  className="inline-flex text-2xl sm:text-3xl text-white mt-2 font-bold"
                  href="https://www.linkedin.com"
                  target="_blank"
                >
                  LinkedIn
                  <svg
                    className="ml-1 mt-[2px]"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
