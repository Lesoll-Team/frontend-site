import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    // Function to update window width
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", updateWindowWidth);

    // Initial window width
    updateWindowWidth();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  return { windowWidth };
};
