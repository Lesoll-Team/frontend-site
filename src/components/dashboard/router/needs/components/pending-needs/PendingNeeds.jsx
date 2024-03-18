import { useDispatch, useSelector } from "react-redux";
import { getPendingNeeds } from "../../redux/pendingNeedsSlice";
import NeedsAdminCard from "../card/NeedsAdminCard";
import { useEffect } from "react";
import { useRouter } from "next/router";

const PendingNeeds = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const page = router.query.page;
  const pendingNeeds = useSelector((state) => state.PendingNeeds.pending.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPendingNeeds());
  }, []);
  const handlePageChange = (page) => {
    router.push(`?tab=pending&page=${page + 1}`);
  };
  return (
    <div className="flex flex-col gap-5 p-3 md:p-5 bg-neutral min-h-[60dvh] rounded-md">
      {pendingNeeds?.getData && pendingNeeds.getData.length > 0 ? (
        pendingNeeds.getData.map((item) => {
          console.log(item);
          return <NeedsAdminCard need={item} />;
        })
      ) : (
        <div className="flex h-full w-full items-center justify-center min-h-[70dvh] text-xl">
          {language ? "لا توجد طبات معلقة" : "no pending needs"}
        </div>
      )}
      {/* {activeNeeds?.totalPages > 1 && (
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
      )} */}
    </div>
  );
};

export default PendingNeeds;
