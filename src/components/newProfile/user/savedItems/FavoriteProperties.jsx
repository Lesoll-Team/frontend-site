import RealtyCard from "@/components/realtyCard/RealtyCard";
import { getFavProp } from "@/redux-store/features/user/userSavedItemsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../../profile-cards/ProfileCard";

const FavoriteProperties = () => {
  const dispatch = useDispatch();
  const favProp = useSelector((state) => state.userSavedItems.fav.data);
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
          <div className="w-full min-h-[200px] md:min-h-[300px] grid place-content-center">
            <p className="md:text-3xl text-outLine">لا يوجد عقارات مفضلة</p>
          </div>
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
