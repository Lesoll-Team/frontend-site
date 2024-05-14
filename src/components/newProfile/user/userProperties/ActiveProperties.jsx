import { useEffect } from "react";
import ProfileCard from "../../profile-cards/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getActiveProp } from "@/redux-store/features/user/userPropertiesSlice";
import styles from "@/styles/Pagination.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
// import Image from "next/image";
import NoItems from "./NoItems";
const ActiveProperties = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const activeProp = useSelector((state) => state.userProperties.active.data);
  // const activePropStatus = useSelector(
  //   (state) => state.userProperties.active.status
  // );
  // const activePropError = useSelector(
  //   (state) => state.userProperties.active.error
  // );
  useEffect(() => {
    dispatch(getActiveProp());
  }, []);
  const handlePageChange = (selectedPage) => {
    dispatch(getActiveProp(selectedPage + 1));
  };
  const type = language ? "نشطة" : "active";

  return (
    <div>
      <div className="flex flex-wrap gap-6 lg:justify-start justify-center lg:gap-12">
        {activeProp?.confirmedRealty ? (
          activeProp.confirmedRealty.length > 0 ? (
            activeProp.confirmedRealty.map((item) => {
              return <ProfileCard data={item} key={item?._id} type={type} />;
            })
          ) : (
            <NoItems
              title={language ? "لا توجد اعلانات نشطة" : "No Active Ads"}
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
      {activeProp?.totalPages > 1 && (
        <div dir="ltr" className={styles.pagination}>
          <ReactPaginate
            breakLabel={
              <span className="rounded px-2 border-2 h-fit"> ...</span>
            }
            breakClassName={"break-me"}
            pageCount={activeProp?.totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={(data) => handlePageChange(data.selected)}
            containerClassName={styles.paginationContainer} // Use the styles from the CSS module
            pageClassName={styles.paginationPage}
            activeClassName={styles.activePage}
            previousLabel={
              <FaAngleLeft className="text-2xl font-medium text-baseGray" />
            }
            previousClassName={styles.paginationPrevious}
            nextLabel={
              <FaAngleRight className="text-2xl font-medium text-baseGray" />
            }
            nextClassName={styles.paginationNext}
            disabledClassName={styles.paginationDisabled}
            initialPage={0}
          />
        </div>
      )}
    </div>
  );
};
export default ActiveProperties;
