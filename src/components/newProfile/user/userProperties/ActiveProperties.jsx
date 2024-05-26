import { useEffect, useState } from "react";
import ProfileCard from "../../profile-cards/ProfileCard";
import { useSelector } from "react-redux";
import styles from "@/styles/Pagination.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import NoItems from "./NoItems";
import { getActiveProperties, getDrafts } from "../../apis/profileApis";
const ActiveProperties = () => {
  const [activeProperties, setActiveProperties] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [apiStatus, setApiStatus] = useState("idle");
  const [page, setPage] = useState(1);
  const [drafts, setDrafts] = useState(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  // make as a function like that so i can pass as a prop to the card so when the user delete or change the state of a peoperty it call it again
  const getProperties = () => {
    getActiveProperties({
      setFormStatus,
      setActiveProperties,
      setServerError,
      page,
    });
  };
  useEffect(() => {
    getProperties();
    getDrafts({ setApiStatus, setDrafts, setServerError });
  }, [page]);

  console.log(drafts);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage + 1);
  };
  const type = language ? "نشطة" : "active";

  return (
    <div>
      <div className="flex flex-wrap gap-6 lg:justify-start justify-center lg:gap-12">
        {formStatus === "success" ? (
          activeProperties.confirmedRealty.length > 0 ? (
            activeProperties.confirmedRealty.map((item) => {
              return (
                <ProfileCard
                  getProperties={getProperties}
                  data={item}
                  key={item?._id}
                  type={type}
                />
              );
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
      {activeProperties?.totalPages > 1 && (
        <div dir="ltr" className={styles.pagination}>
          <ReactPaginate
            breakLabel={
              <span className="rounded px-2 border-2 h-fit"> ...</span>
            }
            breakClassName={"break-me"}
            pageCount={activeProperties?.totalPages}
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
