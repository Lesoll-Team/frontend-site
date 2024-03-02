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

  const status = useSelector((state) => state.userSavedItems.fav.status);
  const error = useSelector((state) => state.userSavedItems.fav.error);
  useEffect(() => {
    dispatch(getFavProp());
  }, []);
  return (
    <div className="flex flex-wrap gap-6 lg:justify-start justify-center lg:gap-12">
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
    </div>
  );
};
export default FavoriteProperties;
