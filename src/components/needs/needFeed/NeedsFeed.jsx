import { useDispatch, useSelector } from "react-redux";
import NeedsCard from "./needCard/NeedsCard";
import { setPage } from "@/redux-store/features/needsFeedSlice";
import ReactPaginate from "react-paginate";
import styles from "../../../styles/paginations.module.css"; // Import the CSS module

const NeedsFeed = () => {
  const needs = useSelector((state) => state.needsPosts.needsPosts);
  const status = useSelector((state) => state.needsPosts.status);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const totalPages = useSelector((state) => state.needsPosts.totalPages);
  const dispatch = useDispatch();
  const handlePageChange = (selectedPage) => {
    dispatch(setPage(selectedPage + 1));
  };
  return (
    <div className="container mx-auto py-10 space-y-5 ">
      <h3>{language ? "الطلبات" : "Needs"}</h3>
      <div className="grid md:grid-cols-2 gap-3 min-h-[70dvh]">
        {status === "succeeded" &&
          needs?.map((need, index) => <NeedsCard need={need} key={index} />)}
      </div>
      <div className="flex justify-center">
        {totalPages > 1 && (
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
    </div>
  );
};
export default NeedsFeed;
