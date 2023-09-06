import axios from "axios";

import { useEffect, useState, memo, useCallback } from "react";
import FavCard from "./realtyCards/FavCard";

const FavoriteAds = () => {
  const [fav, setFav] = useState(null);

  // Define a memoized function to fetch favorites
  const getFav = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/favorites/get`,
        {
          headers: {
            token: JSON.parse(localStorage.getItem("userToken")),
          },
        }
      );
      console.log(response.data);
      setFav(response.data.propertyFavorites);
    } catch (err) {
      console.log(err);
    }
  }, []); // Empty dependency array means this function will only be created once

  useEffect(() => {
    setFav(getFav);
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
        Favorites
      </h1>
      <div className="flex flex-wrap gap-20 justify-center items-center py-10 lg:gap-x-36 ">
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
