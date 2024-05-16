import RealtyCard from "@/components/realtyCard/RealtyCard";
import { getFavProp } from "@/redux-store/features/user/userSavedItemsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../../profile-cards/ProfileCard";
import NoItems from "../userProperties/NoItems";

const FavoriteProperties = () => {
  const dispatch = useDispatch();
  const favProp = useSelector((state) => state.userSavedItems.fav.data);
  const language = useSelector((state) => state.GlobalState.languageIs);

  // const status = useSelector((state) => state.userSavedItems.fav.status);
  // const error = useSelector((state) => state.userSavedItems.fav.error);
  useEffect(() => {
    dispatch(getFavProp());
  }, []);
  return (
    <>
      {favProp?.propertyFavorites ? (
        favProp?.propertyFavorites.length > 0 ? (
          <div className="grid grid-cols-1   lg:grid-cols-2 xl:grid-cols-4 justify-between gap-10 xl:gap-5">
            {favProp.propertyFavorites.map((item) => {
              return <RealtyCard propertyDetails={item} key={item?._id} />;
            })}
          </div>
        ) : (
          <NoItems
            title={language ? "لا توجد إعلانات مفضلة " : "No favorite ads "}
          />
        )
      ) : (
        <>
          {" "}
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </>
      )}
      {/* <div className="grid grid-cols-1 md:container md:mx-auto  mx-[20px]  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10">
        {favProp?.propertyFavorites ? (
          favProp?.propertyFavorites.length > 0 ? (
            favProp.propertyFavorites.map((item) => {
              return <RealtyCard propertyDetails={item} key={item?._id} />;
            })
          ) : (
            <NoItems
              title={language ? "لا توجد إعلانات مفضلة " : "No favorite ads "}
            />
          )
        ) : (
          <>
            {" "}
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </>
        )}
      </div> */}
    </>
  );
};
export default FavoriteProperties;
