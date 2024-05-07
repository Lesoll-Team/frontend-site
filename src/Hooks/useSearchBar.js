import React, { useEffect, useState, useCallback } from "react";
import useScrollPosition from "./useScrollPosition";
import { useForm } from "react-hook-form";

const useSearchBar = () => {
  const form = useForm();
  const { register } = form;
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { scrollPosition } = useScrollPosition();
  const [inputValue, setInputValue] = useState("");

  // Debounce function to limit how often a function can fire
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY) {
        if (!hidden) {
          setHidden(true);
          setShouldAnimate(false);
        }
      } else if (currentScrollY < lastScrollY) {
        if (hidden) {
          setHidden(false);
          setShouldAnimate(true);
        }
      }
      setLastScrollY(currentScrollY);
    }, 100),
    [lastScrollY, hidden],
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleInputChange = useCallback(
    debounce((event) => {
      setInputValue(event.target.value);
    }, 300),
    [],
  );

  const SearchBar = () => {
    return (
      <div
        className={`z-[100] w-full bg-white px-5 py-2 mx-auto md:hidden ${
          scrollPosition > 100 ? "top-16 lg:top-20" : ""
        } ${
          hidden
            ? "transform -translate-y-full transition-transform duration-300 ease-in-out"
            : shouldAnimate
              ? "showSearch transform translate-y-0 sticky"
              : "transform translate-y-0 sticky"
        }`}
      >
        <input
          {...register("input")}
          className="w-full border-2 p-3 bg-gray-200 rounded-md"
          placeholder="Search"
          onChange={handleInputChange}
        />
      </div>
    );
  };

  return { SearchBar };
};

export default useSearchBar;
