import { useSelector } from "react-redux";
import RealtyCard from "../realtyCard/RealtyCard";
import { useRouter } from "next/router";
import styles from "@/styles/Pagination.module.css";
import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useMemo, useState } from "react";
import NoItems from "../newProfile/user/userProperties/NoItems";
import UserSearch from "./UserSearch";

const UserProperties = ({ user, properties, params }) => {
  const [categoryType, setCategoryType] = useState("");
  const [offer, setOffer] = useState("");
  const [unitType, setUnitType] = useState("");
  const [keywords, setKeywords] = useState("");
  const [sorting, setSorting] = useState("");

  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const query = router.query;

  const type = useMemo(() => {
    if (router.query.type) {
      return router.query.type;
    } else {
      return "000";
    }
  }, [query]);
  const handlePageChange = (page) => {
    router.push(`${user.getUser.username}?page=${page + 1}&type=${type}`);
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <h3 className="text-sm md:text-2xl font-bold">
        <span>{language ? "العقارات" : "Properties"}</span>
      </h3>
      <div className="z-50 flex">
        {properties?.getConfirmedRealty.length > 1 && (
          <UserSearch
            categoryType={categoryType}
            setCategoryType={setCategoryType}
            offer={offer}
            setOffer={setOffer}
            unitType={unitType}
            setUnitType={setUnitType}
            keywords={keywords}
            setKeywords={setKeywords}
            sorting={sorting}
            setSorting={setSorting}
          />
        )}
      </div>
      <div className="grid grid-cols-1 -z-50  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10">
        {properties?.getConfirmedRealty &&
        properties.getConfirmedRealty.length > 0 ? (
          properties.getConfirmedRealty.map((item) => {
            return <RealtyCard cardID={item._id} propertyDetails={item} />;
          })
        ) : (
          <NoItems title={language ? "لا توجد عقارات" : "No Properties"} />
        )}
      </div>
      {properties?.totalPages > 1 && (
        <div dir="ltr" className={styles.pagination}>
          <ReactPaginate
            breakLabel={
              <span className="rounded px-2 border-2 h-fit"> ...</span>
            }
            breakClassName={"break-me"}
            pageCount={properties?.totalPages}
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
            initialPage={params?.page ? params.page - 1 : 0}
          />
        </div>
      )}
    </div>
  );
};
export default UserProperties;
