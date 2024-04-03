import { useRouter } from "next/router";
import PropertyCard from "./cards/PropertyCard";
import { useEffect, useState } from "react";
import { getUserPropertiesDashboard } from "@/utils/userAPI";
import CArdSkeleton from "./cards/CArdSkeleton";
import ReactPaginate from "react-paginate";
import styles from "../../../../styles/pagination.module.css";
const UserProperties = ({ invstNum, rentNum, saleNum, totalPropNum }) => {
  const [propertyData, setPropertyData] = useState();
  const [page, setPage] = useState();

  const [propType, setPropType] = useState("000");
  const router = useRouter();
  const slug = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserPropertiesDashboard(slug, page, propType);
      setPropertyData(data);
    };
    fetchData();
  }, [slug, page, propType]);

  const handlePropTypeChange = (type) => {
    if (type !== propType) {
      setPropertyData(null);
      setPropType(type);
      setPage(1);
    }
  };
  const handlePageChange = (selectedPage) => {
    setPage(selectedPage + 1);
  };
  const propnum = () => {
    switch (propType) {
      case "000":
        return totalPropNum;

      case "111":
        return saleNum;

      case "222":
        return rentNum;

      case "333":
        return invstNum;

      default:
        return 0;
    }
  };
  return (
    <section className=" space-y-2 sm:space-y-4 md:py-7 md:p-5 md:rounded-lg  md:bg-gray-100">
      <div className=" flex flex-wrap justify-center items-center sm:grid grid-cols-3 gap-1 ">
        <div className="text-center px-3 py-1 md:bg-white bg-gray-100 rounded-lg">
          <p className="sm:text-lg font-medium">عدد الإيجار</p>
          <p>{rentNum}</p>
        </div>
        <div className="text-center px-3 py-1 md:bg-white bg-gray-100 rounded-lg">
          <p className="sm:text-lg font-medium">عدد البيع</p>
          <p>{saleNum}</p>
        </div>
        <div className="text-center px-3 py-1 md:bg-white bg-gray-100 rounded-lg">
          <p className="sm:text-lg font-medium">عدد الأستثمار</p>
          <p>{invstNum}</p>
        </div>
      </div>

      <div className="flex justify-center  items-center gap-3">
        {Boolean(totalPropNum) && (
          <button
            onClick={() => handlePropTypeChange("000")}
            type="button"
            className={`border-2 border-darkGreen text-center text-darkGreen  lg:w-52 py-1 px-3 rounded-md font-semibold hover:text-white hover:bg-darkGreen duration-150 ${
              propType == "000" && `bg-darkGreen text-white`
            } `}
          >
            الكل
          </button>
        )}
        {Boolean(saleNum) && (
          <button
            onClick={() => handlePropTypeChange("111")}
            type="button"
            className={`border-2 border-darkGreen text-center text-darkGreen  lg:w-52 py-1 px-3 rounded-md font-semibold hover:text-white hover:bg-darkGreen duration-150 ${
              propType == "111" && `bg-darkGreen text-white`
            }`}
          >
            للبيع
          </button>
        )}

        {Boolean(rentNum) && (
          <button
            onClick={() => handlePropTypeChange("222")}
            type="button"
            className={`border-2 border-darkGreen text-center text-darkGreen  lg:w-52 py-1 px-3 rounded-md font-semibold hover:text-white hover:bg-darkGreen duration-150 ${
              propType == "222" && `bg-darkGreen text-white`
            }`}
          >
            للإبجار
          </button>
        )}
        {Boolean(invstNum) && (
          <button
            onClick={() => handlePropTypeChange("333")}
            type="button"
            className={`border-2 border-darkGreen text-center text-darkGreen  lg:w-52 py-1 px-3 rounded-md font-semibold hover:text-white hover:bg-darkGreen duration-150 ${
              propType == "333" && `bg-darkGreen text-white`
            }`}
          >
            للإستثمار
          </button>
        )}
      </div>
      <h1 className="text-xl font- text-lightGreen">
        {" "}
        عدد العقارات: <span className="text-lightOrange">{propnum()}</span>
      </h1>
      {propertyData ? (
        propertyData.getConfirmedRealty.length > 0 ? (
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 items-center gap-5 justify-center">
            {propertyData.getConfirmedRealty.map((propdata, index) => {
              return <PropertyCard propertyDetails={propdata} key={index} />;
            })}
          </div>
        ) : (
          <div className="h-[30dvh] font-bold text-slate-500 w-full grid place-content-center">
            <p>لا يوجد عقارات</p>
          </div>
        )
      ) : (
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 items-center gap-5 justify-center">
          <CArdSkeleton />
          <CArdSkeleton />
          <CArdSkeleton />
          <CArdSkeleton />
          <CArdSkeleton />
          <CArdSkeleton />
          <CArdSkeleton />
          <CArdSkeleton />
          <CArdSkeleton />
        </div>
      )}
      <div className="flex justify-center">
        {propertyData?.totalPages > 1 && (
          <ReactPaginate
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={propertyData?.totalPages}
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
    </section>
  );
};
export default UserProperties;
