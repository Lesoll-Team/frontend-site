import { GetAllActiveProp } from "@/redux-store/features/profileSlice";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../../styles/paginations.module.css"; // Import the CSS module
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@/redux-store/features/profileSlice";
import ProfileCard from "./realtyCards/ProfileCard";
import Link from "next/link";
import { BsHouseAddFill } from "react-icons/bs";
import { DotPulse } from "@uiball/loaders";

const ActiveAds = () => {
  const [activeAdds, setActiveAdds] = useState(null);
  const language = useSelector((state) => state.GlobalState.languageIs);

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
  }, [currentPage, activeProp]);

  const handledelete = (propertyIdToRemove) => {
    setActiveAdds((prevActiveAdds) =>
      prevActiveAdds?.confirmedRealty?.filter(
        (prop) => prop._id !== propertyIdToRemove
      )
    );
  };
  // console.log(activeAdds?.confirmedRealty);
  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-lightGreen text-4xl">
        {language
          ? language
            ? "الاعلانات النشطة"
            : "Active Ads"
          : "تحت المراجعة"}
      </h2>
      {!activeAdds ? (
        <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
          <DotPulse size={50} speed={1.3} color="#309da0" />
        </div>
      ) : activeAdds?.confirmedRealty?.length > 0 ? (
        <>
          <div className="grid min-h-[75dvh] md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
            {/*انا محدد اللى يتعرض عقار واحد بس  */}

            {activeAdds?.confirmedRealty?.map((propActive) => (
              <ProfileCard
                onRemove={handledelete}
                key={propActive._id}
                propertyDetails={propActive}
                type="active"
              />
            ))}
          </div>
          <div
            className={
              "flex justify-center items-center  m-4 " + styles.pagination
            }
          >
            {activeAdds?.confirmedRealty?.length > 9 && (
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
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
          <Link
            title={language ? "أضف عقار" : "Add Property"}
            className="flex flex-col items-center"
            href={"/sell"}
          >
            <BsHouseAddFill className="text-darkGreen text-7xl" />
            <h3 className="font-semibold text-3xl">
              {language ? "أضف عقار" : "Add Property"}
            </h3>
          </Link>
        </div>
      )}
    </div>
  );
};
export default ActiveAds;
