import React, { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Check if window is defined (i.e., if we are in a browser environment)
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollPosition(window.scrollY); // Update the scroll position state
      };

      // Add scroll event listener to the window
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []); // Empty dependency array ensures the effect runs only on mount and unmount

  return { scrollPosition };
};

export default useScrollPosition;
