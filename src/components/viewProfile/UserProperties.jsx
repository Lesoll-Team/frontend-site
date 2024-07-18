import { useSelector } from "react-redux";
import RealtyCard from "../realtyCard/RealtyCard";
import { useRouter } from "next/router";
import styles from "@/styles/Pagination.module.css";
import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useState, useMemo, useCallback, memo } from "react";
import NoItems from "../newProfile/user/userProperties/NoItems";
import UserSearch from "./UserSearch";
import { useFilterObject } from "../category/shared/useCategory";

const UserProperties = ({ user, properties, params }) => {
  const [categoryType, setCategoryType] = useState("");
  const [offer, setOffer] = useState("");
  const [unitType, setUnitType] = useState("");
  const [sorting, setSorting] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();

  const objectFilter = useFilterObject({
    category: categoryType,
    saleOptions: offer,
    unitType,
    sort: sorting,
    governorate: city,
    region,
    page,
  });
  const queryString = useMemo(
    () =>
      Object.keys(objectFilter)
        .map((key) => `${key}=${encodeURIComponent(objectFilter[key])}`)
        .join("&"),
    [objectFilter],
  );

  const handlePageChange = useCallback(() => {
    router
      .push(`/view-profile/${user.getUser.username}?${queryString}`)
      .then(() => {
        setLoading(true);
      });
  }, [router, user.getUser.username, queryString]);

  useEffect(() => {
    handlePageChange();
    setLoading(false);
  }, [categoryType, offer, unitType, sorting, city, region, page]);
  console.log("params::>", params);
  return (
    <div className="space-y-6 md:space-y-8">
      <h3 className="text-sm md:text-2xl font-bold">
        <span>{language ? "العقارات" : "Properties"}</span>
      </h3>
      <div className="z-50 flex">
        <UserSearch
          categoryType={categoryType}
          setCategoryType={setCategoryType}
          offer={offer}
          setOffer={setOffer}
          unitType={unitType}
          setUnitType={setUnitType}
          setCity={setCity}
          setRegion={setRegion}
          sorting={sorting}
          setSorting={setSorting}
        />
      </div>

      {loading ? (
        <div
          className={`grid grid-cols-1  -z-50  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10`}
        >
          {properties?.getConfirmedRealty &&
          properties.getConfirmedRealty.length > 0 ? (
            properties.getConfirmedRealty.map((item) => {
              return (
                <RealtyCard
                  key={item._id}
                  cardID={item._id}
                  propertyDetails={item}
                />
              );
            })
          ) : (
            <NoItems title={language ? "لا توجد عقارات" : "No Properties"} />
          )}
        </div>
      ) : (
        <div className="bg-gray-50 animate-pulse h-[500px] flex items-center justify-center w-full">
          <h1 className="text-gray-500">
            {language ? "جاري التحميل ..." : " Loading ..."}
          </h1>
        </div>
      )}
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
            onPageChange={(data) => setPage(data.selected + 1)}
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
export default memo(UserProperties);
