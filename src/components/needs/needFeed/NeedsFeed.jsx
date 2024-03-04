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
    <div className="mx-3 md:container md:mx-auto mt-16 pb-10 space-y-6 md:space-y-12  ">
      <h3 className="text-3xl font-bold">{language ? "الطلبات" : "Needs"}</h3>

      <div className="p-4 md:p-16 bg-lightNeutral mb-20 rounded-lg space-y-4  min-h-[70dvh]">
        {status === "succeeded" &&
          needs?.map((need, index) => <NeedsCard need={need} key={index} />)}

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
    </div>
  );
};
export default NeedsFeed;
