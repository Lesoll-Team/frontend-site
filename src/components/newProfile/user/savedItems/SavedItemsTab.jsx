import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const SavedItemsTabs = ({ params, currentTab }) => {
  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);
  console.log(currentTab);
  const handleTabClick = (tab) => {
    router.push(`?tab=${tab}`);
  };

  return (
    <div className="flex items-center md:justify-center lg:justify-start md:gap-5">
      <button
        className={`rounded-md  text-bae font-medium px-5 py-2 ${
          currentTab === "fav"
            ? "bg-lightGreen text-white"
            : "text-baseGray bg-gray-100"
        }`}
        onClick={() => {
          handleTabClick("fav");
        }}
      >
        {language ? "الإعلانات المفضلة" : "Favorite ads"}
      </button>
      <button
        className={`rounded-md  text-bae font-medium px-5 py-2 ${
          currentTab === "search"
            ? "bg-lightGreen text-white"
            : "text-baseGray bg-gray-100"
        }`}
        onClick={() => {
          handleTabClick("search");
        }}
      >
        {language ? "البحوث المفضلة" : "Favorite Search"}
      </button>
    </div>
  );
};
export default SavedItemsTabs;
