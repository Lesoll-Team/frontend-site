import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";

const BlogSearch = () => {
  const router = useRouter();
  const [SearchInput, setSearchInput] = useState("");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = SearchInput.split(" ").join("-");
    router.push(`?search=${encodeURIComponent(searchQuery)}`);
  };
  const onSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const searchDefaultValue = router.query?.search?.split("-").join(" ") || "";
  useEffect(() => {
    searchDefaultValue && setSearchInput(searchDefaultValue);
  }, [searchDefaultValue]);
  return (
    <div className="px-5 py-4 md:py-0 md:px-0 md:bg-transparent bg-white -mb-1 md:mb-0">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full flex items-center bg-white rounded border md:drop-shadow-md h-12  overflow-hidden"
      >
        <IoIosSearch className="text-3xl text-baseGray mx-4" />
        <input
          value={SearchInput}
          onChange={onSearchInputChange}
          type="text"
          defaultValue={searchDefaultValue}
          placeholder={language ? "البحث" : "Search"}
          className="placeholder:text-baseGray h-full w-full focus:outline-none focus:ring-0 "
        />
        <button
          type="submit"
          className="bg-lightGreen font-bold px-7 py-1 lg-text w-fit h-full text-white focus:outline-none focus:ring-0"
        >
          {language ? "أبحث" : "Search"}
        </button>
      </form>
    </div>
  );
};
export default BlogSearch;
