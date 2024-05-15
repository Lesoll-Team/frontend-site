import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-5 drop-shadow-xl right-4 md:right-7 cursor-pointer ${
        isVisible ? "block animate-appearance-in" : "hidden"
      } bg-lightGreen p-4 rounded-full`}
      onClick={scrollToTop}
      aria-label="Scroll to Top"
    >
      <AiOutlineArrowUp className="text-2xl text-white font-bold" />
    </button>
  );
}

export default ScrollToTopButton;
