import ReactPaginate from "react-paginate";
import RealtyCard from "../realtyCard/RealtyCard";
import styles from "../../styles/paginations.module.css";
import { useSelector } from "react-redux";
import { ViewUserProperties } from "@/utils/userAPI";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardSkeleton from "../realtyCard/CardSkeleton";
const UserProperties = ({ propertiesNums }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [propertiesData, setPropertiesData] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState();
  const [propertyType, setPropertyType] = useState("000");
  const [totalProperties, setTotalProperties] = useState(0);
  const router = useRouter();
  const slug = router.query.id;
  useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        const data = await ViewUserProperties(slug, page, propertyType);

        console.log(data);

        setPropertiesData(data.getConfirmedRealty);
        setTotalProperties(data.resultConfirmed);
        setTotalPage(data.totalPages);
      }
    };
    fetchData();

    // If you need a cleanup function, return it here
    // Example: return () => cleanupLogic();
  }, [slug, page, propertyType]);
  console.log(propertiesData);
  const handlePageChange = (selectedPage) => {
    setPage(selectedPage + 1);
  };
  return (
    <div className={` space-y-8 w-full bg-white rounded-xl p-8   mx-auto `}>
      <h1 className="text-center text-5xl text-darkGreen font-semibold  ">
        {language ? (
          <>
            <span> العقارات </span>
          </>
        ) : (
          <>
            <span> Properties </span>
          </>
        )}
      </h1>
      {propertiesData.length > 0 ? (
        <div className="flex mx-auto items-center justify-center gap-3">
          <div className="text-center">
            <button
              className={`border px-3 py-1  lg:w-40 rounded-lg border-darkGreen${
                propertyType === "000" &&
                " text-white bg-darkGreen font-semibold"
              }`}
              onClick={() => setPropertyType("000")}
            >
              {language ? "الكل" : "All"}
            </button>
          </div>
          {Boolean(propertiesNums?.forRent) && (
            <div>
              <button
                className={`border px-3 py-1  lg:w-40 rounded-lg border-darkGreen${
                  propertyType === "222" &&
                  " text-white bg-darkGreen font-semibold"
                }`}
                onClick={() => setPropertyType("222")}
              >
                {language ? " للإيجار" : "For Rent"}
              </button>
            </div>
          )}
          {Boolean(propertiesNums.forSale) && (
            <button
              className={`border px-3 py-1  lg:w-40 rounded-lg border-darkGreen${
                propertyType === "111" &&
                " text-white bg-darkGreen font-semibold"
              }`}
              onClick={() => setPropertyType("111")}
            >
              {language ? "للبيع" : "For Sale"}
            </button>
          )}
          {Boolean(propertiesNums.forInvest) && (
            <button
              className={`border px-3 py-1  lg:w-40 rounded-lg border-darkGreen${
                propertyType === "333" &&
                " text-white bg-darkGreen font-semibold"
              }`}
              onClick={() => setPropertyType("333")}
            >
              {language ? "للأستثمار" : "For Investment"}
            </button>
          )}
        </div>
      ) : (
        <div className="w-full min-h-[30dvh] h-full flex items-center justify-center">
          <p>{language ? "لا يوجد عقارات" : "No properties"}</p>
        </div>
      )}
      <div className="flex gap-10 flex-wrap justify-center items-center">
        {propertiesData ? (
          propertiesData.map((property) => {
            return <RealtyCard key={property._id} propertyDetails={property} />;
          })
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
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

export default UserProperties;
