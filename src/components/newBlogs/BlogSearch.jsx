import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const BlogSearch = () => {
  const router = useRouter();
  const [SearchInput, setSearchInput] = useState("");
  const { t } = useTranslation("common");

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`?search=${encodeURIComponent(SearchInput)}`);
  };
  const onSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
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
          placeholder={t("Search")}
          className="placeholder:text-baseGray h-full w-full focus:outline-none focus:ring-0 "
        />
        <button
          type="submit"
          className="bg-lightGreen font-bold px-7 py-1 lg-text w-fit h-full text-white focus:outline-none focus:ring-0"
        >
          {t("Search")}
        </button>
      </form>
    </div>
  );
};
export default BlogSearch;
