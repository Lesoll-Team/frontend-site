import axios from "axios";

import { useEffect, useState, memo, useCallback } from "react";
import FavCard from "./realtyCards/FavCard";
import { useSelector } from "react-redux";

const FavoriteAds = () => {
  const [fav, setFav] = useState([]);
  const language = useSelector((state) => state.GlobalState.languageIs);
  // Define a memoized function to fetch favorites
  const getFav = useCallback(async () => {
    try {
      const response = await axios.get(
        ` ${process.env.NEXT_PUBLIC_API_URL}/user/favorites/get`,
        {
          headers: {
            token: JSON.parse(localStorage.getItem("userToken")),
          },
        }
      );
      setFav(response.data.propertyFavorites);
    } catch (err) {
      console.log(err);
    }
  }, []); // Empty dependency array means this function will only be created once

  useEffect(() => {
    getFav();
    // console.log(fav);
  }, [getFav]); // Use the memoized getFav function in the dependency array

  const handleRemoveFromFavorites = (propertyIdToRemove) => {
    // Filter out the removed property from the 'fav' state
    setFav((prevFav) =>
      prevFav.filter((prop) => prop._id !== propertyIdToRemove)
    );
  };
  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-lightGreen text-4xl">
        {language ? "المفضلة" : "Favorites"}
      </h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center ">
        {fav &&
          fav.map((favData) => (
            <FavCard
              key={favData._id}
              propDetails={favData}
              onRemove={handleRemoveFromFavorites}
            />
          ))}
      </div>
    </div>
  );
};

export default memo(FavoriteAds);
