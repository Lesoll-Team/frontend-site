import { useUser } from "@/Shared/UserContext";
import { AddToFavorites } from "@/utils/propertyAPI";
import Cookies from "js-cookie";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavBtn = ({ id }) => {
  const [active, setActive] = useState(false);
  const { data, setUserData } = useUser();

  const addToFAv = async () => {
    setActive((prev) => !prev);
    const userToken = Cookies.get("userToken");
    if (userToken) {
      try {
        await AddToFavorites(id);
        setUserData();
      } catch (error) {
        console.error("Error add to fav :", error);
      }
    }
  };

  if (data) {
    return (
      <button
        onClick={() => {
          addToFAv();
        }}
        type="button"
        className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 bg-white rounded-full"
      >
        {active ? (
          <FaHeart className="text-lg md:text-xl animate-appearance-in text-red-500" />
        ) : (
          <FaRegHeart className="text-lg md:text-xl  animate-appearance-in" />
        )}
      </button>
    );
  }
};
export default FavBtn;
