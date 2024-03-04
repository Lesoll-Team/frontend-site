import { useSelector } from "react-redux";
import RealtyCard from "../realtyCard/RealtyCard";
import { useRouter } from "next/router";
import styles from "@/styles/Pagination.module.css";
import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useMemo, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const UserProperties = ({ user, properties, params }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [ShowFilterMenu, setShowFilterMenu] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();
  const query = router.query;
  console.log(params);
  const filterName = useMemo(() => {
    switch (query.type) {
      case "000":
        return language ? "الكل" : "All";
      case "111":
        return language ? "للبيع" : "For Sale";
      case "222":
        return language ? "للإيحار" : "For Rent";
      default:
        return "all";
    }
  }, [language, query]);

  console.log("user", user);
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
  const toggleFilterMeu = () => {
    setShowFilterMenu((prev) => !prev);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowFilterMenu(false);
      }
    }
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-sm md:text-2xl font-bold">
          {language ? (
            <span>عقارات {user.getUser.fullname}</span>
          ) : (
            <span>{user.getUser.fullname} Properties</span>
          )}
        </h3>
        <div ref={menuRef} className="relative">
          <button
            onClick={toggleFilterMeu}
            className=" flex items-center gap-1 relative border-2 rounded border-outLine py-1 px-4 md:py-2 md:px-8"
          >
            {filterName} <MdKeyboardArrowDown />
          </button>
          {ShowFilterMenu && (
            <ul className="absolute w-full space-y-1 p-2 text-center bg-white drop-shadow z-10 rounded border">
              <li>
                <Link
                  onClick={() => setShowFilterMenu(false)}
                  href={`/view-profile/${user.getUser.username}?page=1&type=000`}
                  className="text-center"
                >
                  {language ? "الكل" : "All"}
                </Link>
              </li>
              {user.RealtySaleNumber > 0 && (
                <>
                  <hr />
                  <li>
                    <Link
                      onClick={() => setShowFilterMenu(false)}
                      href={`/view-profile/${user.getUser.username}?page=1&type=111`}
                      className="text-center"
                    >
                      {language ? "للبيع" : "For Sale"}
                    </Link>
                  </li>
                </>
              )}
              {user.RealtyRentNumber > 0 && (
                <>
                  <hr />
                  <li>
                    <Link
                      onClick={() => setShowFilterMenu(false)}
                      href={`/view-profile/${user.getUser.username}?page=1&type=222`}
                      className="text-center"
                    >
                      {language ? "للإيحار" : "For Rent"}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center flex-wrap">
        {properties?.getConfirmedRealty &&
        properties.getConfirmedRealty.length > 0
          ? properties.getConfirmedRealty.map((item) => {
              return <RealtyCard key={item._id} propertyDetails={item} />;
            })
          : ""}
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
