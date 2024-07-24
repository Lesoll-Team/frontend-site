import Button from "@/Shared/ui/Button";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";

const AgentsSearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const handleSeacrhInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchAction = (e) => {
    e.preventDefault();
    const search = searchKeyword.split(" ").join("-");
    router.push(`agents?query=${search}`);
  };
  const defaultValue = router.query?.query
    ? router.query?.query.split("-").join(" ")
    : "";
  return (
    <form
      onSubmit={handleSearchAction}
      className="flex items-center gap-2 sm:gap-5 container mx-auto mt-8 w-full"
    >
      <div className="flex items-center w-full">
        <input
          defaultValue={defaultValue}
          type="text"
          onChange={handleSeacrhInputChange}
          className="px-3 py-3 border rounded w-full focus:outline-none focus:border-lightGreen"
          placeholder={
            language ? "بحث بإسم الحساب" : "Search with account name"
          }
        />
        <IoIosSearch className="-mx-8 text-xl text-darkGray" />
      </div>
      <Button className=" w-[20%] sm:w-[15%]">
        {language ? "بحث" : "Search"}
      </Button>
    </form>
  );
};

export default AgentsSearchBar;
