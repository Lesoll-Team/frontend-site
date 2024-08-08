import { useEffect, useState } from "react";
import TableContainer from "./TableContainer";
import { getPropertiesAnalytics } from "../../apis/profileApis";
import MobilePageTitle from "../MobilePageTitle";
import { useSelector } from "react-redux";
import TableSkeleton from "./TableSkeleton";
import ReactPaginate from "react-paginate";
import styles from "@/styles/Pagination.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const PropertiesAnalytics = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [page, setPage] = useState(1);
  const [apiStatus, setApiStatus] = useState("idle");
  const [analyticsTable, setAalyticsTable] = useState(null);

  const getPropeties = async () => {
    getPropertiesAnalytics({ setAalyticsTable, setApiStatus, page });
  };
  useEffect(() => {
    getPropeties();
  }, [page]);
  const handlePageChange = (selectedPage) => {
    setPage(selectedPage + 1);
  };
  return (
    <div className="space-y-6 md:space-y-8 min-h-[80dvh]">
      <MobilePageTitle title={language ? "الإحصائيات" : "Analytics"} />
      {apiStatus === "loading" ? (
        <TableSkeleton />
      ) : analyticsTable?.properties ? (
        <TableContainer data={analyticsTable?.properties} />
      ) : (
        <TableSkeleton />
      )}

      {analyticsTable?.totalPages > 1 && (
        <div dir="ltr" className={styles.pagination}>
          <ReactPaginate
            breakLabel={
              <span className="rounded px-2 border-2 h-fit"> ...</span>
            }
            breakClassName={"break-me"}
            pageCount={analyticsTable?.totalPages}
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

export default PropertiesAnalytics;
