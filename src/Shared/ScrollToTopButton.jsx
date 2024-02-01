import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add a scroll event listener to toggle the button's visibility
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
    <>
      <div
        className={`fixed bottom-5 drop-shadow-xl right-4 md:right-7 cursor-pointer ${
          isVisible ? "block animate-appearance-in" : "hidden"
        } bg-lightGreen p-4 rounded-full`}
        onClick={scrollToTop}
        aria-label="Scroll to Top"
      >
        <AiOutlineArrowUp className="text-2xl text-white font-bold" />
      </div>
    </>
  );
}

export default ScrollToTopButton;
