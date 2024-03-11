import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Button from "../../Shared/ui/Button";
const SearchModel = ({ isOpen, setOpen }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();

  const [searchKeyword, setSearchKeyword] = useState("");
  const menuRef = useRef(null);

  const handelSearchButton = (e) => {
    e.preventDefault();
    setOpen(false);
    router.push(
      `/properties/residential/search?page=1${
        searchKeyword && `&keyword=${searchKeyword}`
      }`
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  if (isOpen) {
    return (
      <div
        ref={menuRef}
        className="bg-white rounded-[6px] shadow-sm md:w-10/12 lg:w-8/12 2xl:w-6/12 w-11/12 p-3"
      >
        <div className={"flex justify-between"}>
          <button onClick={() => setOpen(false)}>X</button>
          <span>{language ? "بحث" : "search"}</span>
        </div>
        <div className={" p-1"}>
          <form
            onSubmit={handelSearchButton}
            className="flex   gap-x-1 items-center"
          >
            <Button type="submit" className="max-w-[100px] ">
              {language ? "بحث" : "Search"}
            </Button>
            <div className="flex w-full p-1  border-gray1 border-1 items-center rounded-[6px] bg-white ">
              <input
                name="keywords"
                className=" w-full h-full focus:outline-none indent-5"
                type="text"
                onChange={(e) =>
                  setSearchKeyword(e.target.value.trim().split(" ").join("_"))
                }
                placeholder={language ? "كلمات مميزة " : "spacial keywords"}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default SearchModel;
