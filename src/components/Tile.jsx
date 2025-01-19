import React, { useEffect, useState, useRef } from "react";

export const TileContext = React.createContext({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper = ({ children, numOfPages }) => {
  return <div className="relative bg-black text-white">{children}</div>;
};

export const TileBackground = ({ children }) => (
  <div className="absolute h-full w-full">{children}</div>
);

export const TileContent = ({ children }) => (
  <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
);

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const refContainer = useRef < HTMLDivElement > null;

  let currentPage = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH,
      ) / clientHeight;
    currentPage = percentY * 3;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(scrollY);
    };

    window.onscroll = handleScroll;
  }, [window.scrollY]);

  return (
    <section className="relative bg-gray-800 text-white z-[51]">
      <div ref={refContainer} className="absolute h-full w-full"></div>
      <div className="sticky top-0 h-screen overflow-hidden">Foo {scrollY}</div>
      <div className="sticky top-0 h-screen overflow-hidden">Faz</div>
      <div className="sticky top-0 h-screen overflow-hidden">Boo</div>
    </section>
  );
}
