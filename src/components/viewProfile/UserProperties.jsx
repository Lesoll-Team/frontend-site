import ReactPaginate from "react-paginate";
import RealtyCard from "../realtyCard/RealtyCard";
import styles from "../../styles/paginations.module.css";
import { useSelector } from "react-redux";
const UserProperties = ({
  userData,
  totalProperties,
  propertiesData,
  totalPages,
  setPage,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="col-span-5 space-y-8 w-full  container mx-auto">
      <h1 className="text-center text-4xl text-darkGreen font-semibold  ">
        {language ? (
          <>
            <span> عقارات </span>
            <span className="underline text-lightOrange">
              {userData?.fullname}
            </span>
          </>
        ) : (
          <>
            <span className="underline text-lightOrange">
              {userData?.fullname}
            </span>
            <span> Properties </span>
          </>
        )}
      </h1>
      <div className="flex gap-10 flex-wrap justify-center items-center">
        {propertiesData.map((property) => {
          return <RealtyCard key={property._id} propertyDetails={property} />;
        })}
      </div>
      <div className="flex justify-center">
        {totalPages > 1 && (
          <ReactPaginate
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={(data) => setPage(data.selected)}
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
