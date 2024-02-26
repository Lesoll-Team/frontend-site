import { getSavedSearch } from "@/redux-store/features/user/userSavedItemsSlice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SavedSearchCard from "./SavedSearchCard";

const SavedSearch = () => {
  const dispatch = useDispatch();
  const SavedSearch = useSelector((state) => state.userSavedItems.search.data);
  const status = useSelector((state) => state.userSavedItems.search.status);
  const error = useSelector((state) => state.userSavedItems.search.error);
  useEffect(() => {
    dispatch(getSavedSearch());
  }, []);
  return (
    <div className="space-y-5 md:space-y-8">
      {SavedSearch?.getSaveSearch
        ? SavedSearch?.getSaveSearch.length > 0
          ? SavedSearch.getSaveSearch.map((item) => {
              return <SavedSearchCard data={item} key={item._id} />;
            })
          : ""
        : ""}
    </div>
  );
};
export default SavedSearch;
