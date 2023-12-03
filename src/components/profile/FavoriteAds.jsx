import axios from "axios";
import { useEffect, useState, memo, useCallback } from "react";
// import FavCard from "./realtyCards/FavCard";
import { useSelector } from "react-redux";
import Link from "next/link";
// import { BsHouseAddFill } from "react-icons/bs";
import { DotPulse } from "@uiball/loaders";
import FavoritesCard from "./realtyCards/FavoritesCard";

const FavoriteAds = () => {
  const [fav, setFav] = useState([]);
  const language = useSelector((state) => state.GlobalState.languageIs);
  // Define a memoized function to fetch favorites
  const getFav = useCallback(async () => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      const response = await axios.get(
        ` ${process.env.NEXT_PUBLIC_API_URL}/user/favorites/get`,
        {
          headers: {
            token: userToken,
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
  }, []); // Use the memoized getFav function in the dependency array

  const handleRemoveFromFavorites = (propertyIdToRemove) => {
    // Filter out the removed property from the 'fav' state
    setFav((prevFav) =>
      prevFav.filter((prop) => prop._id !== propertyIdToRemove)
    );
  };
  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-lightGreen text-4xl">
        {language ? "المفضلة" : "Favorites"}
      </h2>
      {!fav ? (
        <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
          <DotPulse size={50} speed={1.3} color="#309da0" />
        </div>
      ) : fav.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
          {fav.map((favData) => (
            <FavoritesCard
              key={favData._id}
              propertyDetails={favData}
              onRemove={handleRemoveFromFavorites}
            />
          ))}
        </div>
      ) : (
        fav &&
        fav.length === 0 && (
          <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
            <Link
              title={language ? "لا يوجد عقارات " : "No Property"}
              className="flex flex-col items-center"
              href={"/"}
            >
              <h3 className="font-semibold text-3xl">
                {language ? "لا يوجد عقارات " : "No Property"}
              </h3>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default memo(FavoriteAds);
