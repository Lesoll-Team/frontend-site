import { GetAllActiveProp } from "@/redux-store/features/profileSlice";
import {useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../../styles/paginations.module.css"; // Import the CSS module
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@/redux-store/features/profileSlice";
import ProfileCard from "./realtyCards/ProfileCard";

const ActiveAds = () => {
  const [activeAdds, setActiveAdds] = useState(null);
  const dispatch = useDispatch();
  // const language = useSelector((state) => state.GlobalState.languageIs);
  const activeProp = useSelector((state) => state.Profile.activeProp);
  const currentPage = useSelector((state) => state.Profile.currentPage);
  const totalPages = useSelector((state) => state.Profile.totalPages);
  const handlePageChange = (selectedPage) => {
    dispatch(setCurrentPage(selectedPage + 1));
  };
  useEffect(() => {
    dispatch(GetAllActiveProp({ page: currentPage }));
  }, [currentPage]);

  useEffect(() => {
    setActiveAdds(activeProp);
  },[currentPage, activeProp]);

  const handledelete = (propertyIdToRemove) => {
    setActiveAdds((prevActiveAdds) =>
      prevActiveAdds.filter((prop) => prop._id !== propertyIdToRemove)
    );
  };
  return (
    <div className="w-full bg-red-200">
      <div className="bg-blue-200">
      {/*انا محدد اللى يتعرض عقار واحد بس  */}
      
        {activeAdds?.confirmedRealty.map((propActive) => (
          <ProfileCard
            onRemove={handledelete}
            key={propActive._id}
            propertyDetails={propActive}
            type="active"
          />
        ))}
      </div>
      <div
        className={"flex justify-center items-center  m-4 " + styles.pagination}
      >
        <ReactPaginate
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={(data) => handlePageChange(data.selected)}
          containerClassName={styles.paginationContainer} // Use the styles from the CSS module
          pageClassName={styles.paginationPage}
          activeClassName={styles.activePage}
          previousLabel={"back"}
          previousClassName={styles.paginationPrevious}
          nextLabel={"next"}
          nextClassName={styles.paginationNext}
          disabledClassName={styles.paginationDisabled}
        />
      </div>
    </div>
  );
};
export default ActiveAds;
