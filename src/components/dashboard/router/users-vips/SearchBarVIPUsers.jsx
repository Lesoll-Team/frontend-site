import { useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ setSearchByKeywords }) => {
  const inputRef = useRef();

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchByKeywords(inputRef.current.value || "");
  };
  return (
    <form
      onSubmit={handleSearchInput}
      className="w-full flex bg-gray-200 gap-x-4 p-2"
    >
      <div className="sm:w-6/12 flex items-center justify-center bg-white rounded-md gap-x-2 px-2">
        <input
          type="text"
          ref={inputRef}
          placeholder="Search by order id ... "
          className="w-full h-8 text-xl py-2 indent-2 focus:outline-none"
        />
        <IoSearchSharp />
      </div>
      <button type="submit" className="p-2 bg-black text-white rounded-md">
        search
      </button>
    </form>
  );
};
export default SearchBar;
