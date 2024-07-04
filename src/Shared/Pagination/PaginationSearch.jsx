import ReactPaginate from "react-paginate";
import styles from "../../styles/Pagination.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";

import { useRouter } from "next/router";
import { memo } from "react";
import { useSendFilterSearch } from "@/components/category/shared/FilterHooks";

const PaginationPage = ({ currentPage, totalPage }) => {
  const router = useRouter();
  const {
    saleOption,
    categoryType,
    unitTypes,
    locationGovernorate,
    locationRegion,
    priceFrom,
    priceTo,
    numBathrooms,
    numBedrooms,
    areaFrom,
    areaTo,
    finishedOption,
    paymentType,
    sort,
    propFinancing,
    searchKeyword,
  } = useSelector((state) => state.Category);

  const handlePageClick = (data) => {
    const route = useSendFilterSearch({
      filterInput: {
        saleOptions: saleOption,
        category: categoryType,
        unitType: unitTypes,
        governorate: locationGovernorate,
        region: locationRegion,
      },
      queryInput: {
        priceFrom,
        page: data.selected + 1,
        priceTo,
        numBathrooms,
        numBedrooms,
        areaFrom,
        areaTo,
        finishedOption: finishedOption,
        paymentType,
        sort: sort,
        mortgage: propFinancing,
        keyword: searchKeyword,
      },
    });
    router.push(route);
  };

  return (
    <div dir="ltr" className={styles.pagination}>
      <ReactPaginate
        pageCount={totalPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={styles.paginationContainer}
        pageClassName={styles.paginationPage}
        activeClassName={styles.activePage}
        previousLabel={
          <IoIosArrowBack className=" px-2 text-2xl w-full h-full" />
        }
        previousClassName={styles.paginationPrevious}
        nextLabel={
          <IoIosArrowBack className="rotate-180 px-2 text-2xl w-full h-full" />
        }
        nextClassName={styles.paginationNext}
        disabledClassName={styles.paginationDisabled}
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default memo(PaginationPage);
