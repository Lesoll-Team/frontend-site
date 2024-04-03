import { useSelector } from "react-redux";
import NeedsCard from "./needCard/NeedsCard";
import ReactPaginate from "react-paginate";
import styles from "../../../styles/paginations.module.css"; // Import the CSS module
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

const NeedsFeed = ({ data, keyword }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const handlePageChange = (page) => {
    router.push(`?page=${page + 1}`);
  };
  return (
    <div className="mx-3 md:container md:mx-auto mt-16 pb-10 space-y-6 md:space-y-12  ">
      <div className="flex items-center justify-between ">
        <h1
          className="seo-hidden"
          /* 
  The .seo-hidden class is used for SEO purposes to hide elements off-screen.
*/
        >
          {language
            ? "طلبات الشراء الحالية: استكشف ما يبحث عنه الآخرون"
            : "Current Orders: Explore what others are searching for"}
        </h1>
        <h2 className="text-[24px] md:text-[28px] font-bold">
          {language ? "الطلبات" : "Needs"}
        </h2>
        <Link
          href={"/add-need"}
          className="w-fit px-4 py-2 flex items-center gap-2 text-[17px] md:text-[19px] font-bold rounded-lg"
        >
          <span className="underline">
            {language ? " اطلب عقارك الان" : "Add need"}
          </span>
          <IoMdAdd className="text-black" />
        </Link>
      </div>

      <div className="p-4 md:p-16 bg-lightNeutral mb-20 rounded-lg space-y-4 min-h-[60dvh]">
        {data && data.getAllData.length > 0 ? (
          data?.getAllData?.map((need) => (
            <NeedsCard need={need} key={need?._id} />
          ))
        ) : (
          <div className="w-full min-h-[50dvh] flex flex-col justify-center items-center  gap-10">
            <h2 className="text-2xl">
              {language ? "لا يوجد طلبات حاليا" : "There is no need"}
            </h2>
            <Link
              href={"/add-need"}
              className="text-white bg-lightGreen  w-full max-w-[300px] text-center rounded py-2 text-xl font-semibold"
            >
              {language ? "أضف طلب" : "Add Need"}
            </Link>
          </div>
        )}
        <div className="max-h-[50px] flex items-center justify-center">
          {data?.totalPages > 1 && (
            <div dir="ltr" className={styles.pagination}>
              <ReactPaginate
                breakLabel={
                  <span className="rounded px-2 border-2 h-fit"> ...</span>
                }
                breakClassName={"break-me"}
                pageCount={data?.totalPages}
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
                initialPage={keyword?.page ? keyword.page - 1 : 0}
              />
            </div>
          )}
        </div>
        {/* <div className="flex justify-center">
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
        </div> */}
      </div>
    </div>
  );
};
export default NeedsFeed;
