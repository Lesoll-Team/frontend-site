import { useCallback, useEffect, useState } from "react";
import ProfileCard from "./realtyCards/ProfileCard";
import { GetActiveProp } from "@/utils/propertyAPI";
import axios from "axios";
import { useSelector } from "react-redux";
import { BsHouseAddFill } from "react-icons/bs";
import Link from "next/link";
import { DotPulse } from "@uiball/loaders";
const ActiveAds = () => {
  const [activeAdds, setActiveAdds] = useState(null);
  const [totalActive, setTotalActive] = useState();
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const getActive = async (page) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/confirmedprofile?limit=2w&page=${page}`,
        {
          headers: {
            token: JSON.parse(localStorage.getItem("userToken")),
          },
        }
      );
      setActiveAdds(response.data.confirmedRealty);
      setTotalActive(response.data.resultConfirmed);
      setTotalPages(Math.ceil(response.data.resultConfirmed / 2));
      console.log(response.data);
      console.log(response.data.confirmedRealty);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getActive(page);
    // console.log(activeAdds);
  }, []);
  useEffect(() => {
    getActive(page);
  }, [page]);
  // console.log(activeAdds);

  const handledelete = (propertyIdToRemove) => {
    // Use the functional form of setActiveAdds to ensure state updates correctly
    setActiveAdds((prevActiveAdds) =>
      prevActiveAdds.filter((prop) => prop._id !== propertyIdToRemove)
    );
  };

  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-lightGreen text-4xl">
        {language ? "إعلاناتك النشطة" : "Active Ads"}
      </h2>
      {!activeAdds ? (
        <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
          <DotPulse size={50} speed={1.3} color="#309da0" />
        </div>
      ) : activeAdds.length > 0 ? (
        <>
          <div className="grid h-full md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
            {activeAdds.map((propertyDetails) => (
              <ProfileCard
                onRemove={handledelete}
                key={propertyDetails._id}
                propertyDetails={propertyDetails}
                type="active"
              />
            ))}
            {/* <button
            onClick={() => {
              setPage(page + 1);
              console.log(page);
            }}
          >
            more
          </button> */}
          </div>
          <div className="flex mt-4 justify-center">
            {totalPages > 5 ? (
              <>
                <button
                  onClick={() => setPage(1)}
                  className={`mx-1 px-3 py-1 rounded ${
                    page === 1 ? "bg-gray-300" : "bg-gray-200"
                  }`}
                >
                  1
                </button>
                {page > 4 && <span>…</span>}
                {[page - 2, page - 1, page, page + 1, page + 2]
                  .filter(
                    (pageNumber) => pageNumber > 1 && pageNumber < totalPages
                  )
                  .map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => setPage(pageNumber)}
                      className={`mx-1 px-3 py-1 rounded ${
                        page === pageNumber ? "bg-gray-300" : "bg-gray-200"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                {page < totalPages - 3 && <span>…</span>}
                <button
                  onClick={() => setPage(totalPages)}
                  className={`mx-1 px-3 py-1 rounded ${
                    page === totalPages ? "bg-gray-300" : "bg-gray-200"
                  }`}
                >
                  {totalPages}
                </button>
              </>
            ) : (
              [...Array(totalPages).keys()].map((pageNumber) => (
                <button
                  key={pageNumber + 1}
                  onClick={() => setPage(pageNumber + 1)}
                  className={`mx-1 px-3 py-1 rounded ${
                    page === pageNumber + 1 ? "bg-gray-300" : "bg-gray-200"
                  }`}
                >
                  {pageNumber + 1}
                </button>
              ))
            )}
          </div>
          ;
        </>
      ) : (
        <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
          <Link className="flex flex-col items-center" href={"/sell"}>
            <BsHouseAddFill className="text-darkGreen text-7xl" />
            <h3 className="font-semibold text-3xl">
              {language ? "أضف عقار" : "Add Property"}
            </h3>
          </Link>
        </div>
      )}
    </div>
  );
};
export default ActiveAds;
