import { getSavedSearch } from "@/redux-store/features/user/userSavedItemsSlice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SavedSearchCard from "./SavedSearchCard";
import NoItems from "../userProperties/NoItems";

const SavedSearch = () => {
  const dispatch = useDispatch();
  const SavedSearch = useSelector((state) => state.userSavedItems.search.data);
  const language = useSelector((state) => state.GlobalState.languageIs);

  useEffect(() => {
    dispatch(getSavedSearch());
  }, []);
  return (
    <div className="space-y-5 md:space-y-8">
      {SavedSearch?.getSaveSearch ? (
        SavedSearch?.getSaveSearch.length > 0 ? (
          SavedSearch.getSaveSearch.map((item) => {
            return <SavedSearchCard data={item} key={item._id} />;
          })
        ) : (
          <NoItems
            title={language ? "لا يوجد بحوث مفضلة   " : "No saved search "}
          />
        )
      ) : (
        <>
          <SavedSearchCard />
          <SavedSearchCard />
          <SavedSearchCard />
          <SavedSearchCard />
        </>
      )}
    </div>
  );
};
export default SavedSearch;
