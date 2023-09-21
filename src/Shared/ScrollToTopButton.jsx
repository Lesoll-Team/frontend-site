import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsArrowUpShort } from "react-icons/bs";

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

  // const buttonStyle = {
  //   position: "fixed",
  //   bottom: "20px",
  //   right: "20px",
  //   display: isVisible ? "block" : "none",
  //   background: "#007BFF",
  //   color: "#fff",
  //   padding: "10px 20px",
  //   border: "none",
  //   borderRadius: "5px",
  //   cursor: "pointer",
  // };

  return (
    <>
      <div
        className={`fixed bottom-5 drop-shadow-xl right-4 md:right-7 cursor-pointer ${
          isVisible ? "block" : "hidden"
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
