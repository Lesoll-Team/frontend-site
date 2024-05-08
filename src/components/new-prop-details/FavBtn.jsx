import { getUserData } from "@/redux-store/features/auth/userProfileSlice";
import { AddToFavorites } from "@/utils/propertyAPI";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";

const FavBtn = ({ id }) => {
  const isAuth = Cookies.get("jwt");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites.includes(id)) {
      setActive(true);
    }
  }, [addToFAv]);
  const addToFAv = async () => {
    setActive((prev) => !prev);
    const userToken = Cookies.get("userToken");
    if (userToken) {
      try {
        await AddToFavorites(id);
        dispatch(getUserData());
      } catch (error) {
        console.error("Error add to fav :", error);
      }
    }
  };
  if (isAuth) {
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
