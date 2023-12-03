import ReactPaginate from "react-paginate";
import RealtyCard from "../realtyCard/RealtyCard";
import styles from "../../styles/paginations.module.css";
import { useSelector } from "react-redux";
import { ViewUserProperties } from "@/utils/userAPI";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Skeleton } from "@nextui-org/react";
const UserProperties = () => {
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
  const handlePageChange = (selectedPage) => {
    setPage(selectedPage + 1);
  };
  return (
    <div className="col-span-5 space-y-8 w-full bg-white rounded-xl p-8   mx-auto">
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
      <div className="flex gap-10 flex-wrap justify-center items-center">
        {/* {propertiesData &&
          propertiesData.map((property) => {
            return <RealtyCard key={property._id} propertyDetails={property} />;
          })} */}
        <Skeleton className="w-3/5 rounded-lg"></Skeleton>
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
