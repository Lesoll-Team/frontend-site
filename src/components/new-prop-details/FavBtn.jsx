import { getUserData } from "@/redux-store/features/auth/userProfileSlice";
import { AddToFavorites } from "@/utils/propertyAPI";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const FavBtn = ({ id = "adad" }) => {
  const [active, setActive] = useState(false);
  const userInfo = useSelector((state) => state.userProfile.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo?.favorites.includes(id)) {
      setActive(true);
    }
  }, [userInfo]);
  const addToFAv = async () => {
    setActive((prev) => !prev);
    try {
      await AddToFavorites(id);
      dispatch(getUserData());

      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error("Error add to fav :", error);
    }
  };

  return userInfo ? (
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
  ) : null;
};
export default FavBtn;
