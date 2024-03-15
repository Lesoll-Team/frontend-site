import { useDispatch, useSelector } from "react-redux";
import { getActiveNeeds } from "../../redux/pendingNeedsSlice";
import { useEffect } from "react";
import NeedsAdminCard from "../card/NeedsAdminCard";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import styles from "@/styles/Pagination.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import NeedsActive from "../card/NeedsActive";
const ActiveNeeds = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const page = router.query.page;
  const activeNeeds = useSelector((state) => state.PendingNeeds.active.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActiveNeeds(page));
  }, [page]);
  const handlePageChange = (page) => {
    router.push(`?tab=active&page=${page + 1}`);
  };
  return (
    <div className="flex flex-col gap-5 p-3 md:p-5 bg-neutral min-h-[60dvh] rounded-md">
      {activeNeeds?.getAllData && activeNeeds.getAllData.length > 0 ? (
        activeNeeds.getAllData.map((item) => {
          return <NeedsActive need={item} type={"active"} />;
        })
      ) : (
        <div className="flex h-full w-full items-center justify-center min-h-[70dvh] text-xl">
          {language ? "لا توجد طبات نشطه" : "no active needs"}
        </div>
      )}
      {activeNeeds?.totalPages > 1 && (
        <div dir="ltr" className={styles.pagination}>
          <ReactPaginate
            breakLabel={
              <span className="rounded px-2 border-2 h-fit"> ...</span>
            }
            breakClassName={"break-me"}
            pageCount={activeNeeds?.totalPages}
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
            initialPage={page ? page - 1 : 0}
          />
        </div>
      )}
    </div>
  );
};

export default ActiveNeeds;
