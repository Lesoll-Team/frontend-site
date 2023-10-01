import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import {
  MdOutlineFavorite,
  MdOutlineShare,
  MdReportProblem,
  MdKeyboardArrowRight,
  // MdCheckCircleOutline,
} from "react-icons/md";
import { Tooltip, Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { BsPlus, BsSlashCircle } from "react-icons/bs";
import { PiEye, PiEyeClosed, PiEyeLight } from "react-icons/pi";
import { HiPlusSm } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { AddToFavorites } from "@/utils/propertyAPI";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { fetchUserData } from "@/redux-store/features/globalState";

function PropertyTitle({ singleTitle }) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [loved, setLoved] = useState(false);

  // const [compare, setCompare] = useState(false);

  // const addPropertyToCompared=()=>{
  //   dispatch(AddCompareCard(singleTitle._id))
  //   dispatch(fetchUserData())
  // }

  // console.log(userInfo);
  const [isOpen, setIsOpen] = useState(false);
  const copyLinkPage = () => {
    const urlToCopy = window.location.href;
    navigator.clipboard.writeText(urlToCopy);
  };
  const addToFAv = async () => {
    try {
      await AddToFavorites(singleTitle?._id);
      dispatch(fetchUserData());

      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error("Error add to fav :", error);
    }
  };
  const userInfo = useSelector((state) => state.GlobalState.userData);
  useEffect(() => {
    if (userInfo?.favorites.includes(singleTitle?._id)) {
      setLoved(true);
    }
  }, [userInfo?.favorites]);
  const openDirectionsInGoogleMaps = (lat, lng) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
  };
  return (
    <div>
      <div className="grid pt-5 sm:grid-cols-2 grid-cols-1 ">
        {/**sm:flex  sm:justify-between p-5 */}
        <div className="flex sm:justify-start  justify-center py-5 sm:mx-5 mx-0">
          <span className="text-[#636363] md:text-sm text-xs  flex items-center	">
            <Link href="/" className="text-blue-400 ">
              home
            </Link>
            <MdKeyboardArrowRight />
            <Link
              href={singleTitle.offer === "For Sale" ? "/buy/1" : "/rent/1"}
              className="text-blue-400"
            >
              {singleTitle.offer === "For Sale" ? "Sale" : "Rent"}
            </Link>
            <MdKeyboardArrowRight />
            {singleTitle?.address.governrate}
          </span>
        </div>
        <div className="grid sm:justify-end justify-center py-5 ">
          <div className="flex sm:justify-end justify-center gap-5 sm:mx-5 mx-0   ">
            {/* <div className="border-2 w-[50px]  border-lightGreen hover:border-lightGreenHover hover:shadow-lg p-1 rounded-md">
         <div className="flex justify-center items-center "> */}
            <div className="  bg-gray-200 rounded-lg px-2 flex items-center justify-end   text-gray-500 ">
              <p className="mx-2 text-default-700 font-semibold">
                {" "}
                {singleTitle?.countOfVisit ? singleTitle?.countOfVisit : 0}
              </p>
              <PiEye className={`text-xl mx-2`} />
            </div>

            {userInfo && (
              <button
                onClick={() => {
                  addToFAv();

                  setLoved(!loved);
                }}
                className=" border-2 text-xl border-lightGreen rounded-lg w-8 h-8 flex items-center justify-center hover:text-white  text-lightGreen   "
              >
                {loved ? (
                  <AiFillHeart className="text-red-500  animate-appearance-in" />
                ) : (
                  <AiOutlineHeart className="text-red-500 animate-appearance-in" />
                )}
              </button>
            )}
            {/* </div>
          </div> */}

            {/* <div className="border-2 border-lightGreen flex justify-center items-center w-[50px] rounded-md"> */}
            <Tooltip
              isOpen={isOpen}
              onOpenChange={(open) => setIsOpen(open)}
              content="Copy Link"
              placement="bottom"
              size="md"
            >
              <button
                onClick={copyLinkPage}
                size="sm"
                className=" border-2 border-lightGreen hover:bg-lightGreen rounded-lg w-8 h-8 flex items-center justify-center hover:text-white  text-lightGreen  "
              >
                <MdOutlineShare className="text-2xl" />
              </button>
            </Tooltip>
            {/* </div> */}

            {/* <div className="border-2 w-[50px]  bg-lightOrangeHover p-1 rounded-md">
         <div className="flex justify-center items-center "> */}
            {/* <button className="border-2 border-lightOrange hover:bg-lightOrange rounded-lg w-8 h-8 flex items-center justify-center hover:text-white  text-lightOrange ">
              <MdReportProblem className=" text-2xl" />
            </button> */}

            {/* </div>
          </div> */}
          </div>

          {/* <div className=" flex sm:justify-end justify-center sm:mx-5 mx-0 pt-3 ">
       
            <Button className="bg-lightGreen w-36 font-bold text-white">
             
              <HiPlusSm className="font-bold text-white text-xl" />
              <p>{language ? "مقارنة" : "Compare"}</p>
            </Button>
          </div> */}
        </div>
      </div>

      <div className="">
        <div className="sm:flex text-2xl justify-between p-5 sm:text-4xl font-bold gap-3 ">
          <div className="flex sm:justify-start justify-center sm:w-6/12 w-full ">
            <h2 className="sm:text-start text-center text-lightOrange">
              {singleTitle?.title}
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:items-end  gap-1 text-darkGreen">
              {" "}
              {/* <p>{language ? "جنية/" : "EGP/"}</p> */}
              <p>
                {language
                  ? singleTitle?.price.toLocaleString("ar-EG")
                  : singleTitle?.price.toLocaleString()}{" "}
                <span className="">{language ? "جنية" : "EGP"}</span>
              </p>
              {singleTitle?.negotiable && (
                <p className="text-xs text-lightOrange">
                  {language ? "قابل للتفاوض" : "Negotiable"}
                </p>
              )}
            </div>
          </div>
        </div>

        <p
          onClick={() => {
            openDirectionsInGoogleMaps(
              singleTitle.address.latitude,
              singleTitle.address.longitude
            );
          }}
          className=" sm:my-5 p-0  flex sm:justify-normal justify-center text-[#636363] sm:text-sm text-xs cursor-pointer w-fit h-fit hover:underline"
        >
          {singleTitle?.address.name}
        </p>
      </div>
    </div>
  );
}
export default memo(PropertyTitle);
