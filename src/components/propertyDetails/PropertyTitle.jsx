import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import {
  MdOutlineFavorite,
  MdOutlineShare,
  MdReportProblem,
  MdKeyboardArrowRight,
  MdCheckCircleOutline,
} from "react-icons/md";
import { Tooltip, Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { BsPlus, BsSlashCircle } from "react-icons/bs";
import { PiEye, PiEyeClosed, PiEyeLight } from "react-icons/pi";
import { HiPlusSm } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { AddCompareCard } from "@/redux-store/features/compareSlice";
import { fetchUserData } from "@/redux-store/features/globalState";

function PropertyTitle({ singleTitle }) {
  const dispatch=useDispatch()
  const language = useSelector((state) => state.GlobalState.languageIs);
  // const isCompare = useSelector((state) => state.Compare.propertyIs);
  const userInfo = useSelector((state) => state.GlobalState.userData);

  // const [compare, setCompare] = useState(false);

const addPropertyToCompared=()=>{
  dispatch(AddCompareCard(singleTitle._id))
  dispatch(fetchUserData())
}



  // console.log(userInfo);
  const [isOpen, setIsOpen] = useState(false);
  const copyLinkPage = () => {
    const urlToCopy = window.location.href;
    navigator.clipboard.writeText(urlToCopy);
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
            <Link href="/property" className="text-blue-400">
              property
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

            <button className=" border-2 border-lightGreen hover:bg-lightGreen rounded-lg w-8 h-8 flex items-center justify-center hover:text-white  text-lightGreen   ">
              {" "}
              <MdOutlineFavorite className="text-2xl" />
            </button>
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
            <button className="border-2 border-lightOrange hover:bg-lightOrange rounded-lg w-8 h-8 flex items-center justify-center hover:text-white  text-lightOrange ">
              <MdReportProblem className=" text-2xl" />
            </button>

            {/* </div>
          </div> */}
          </div>

          <div className=" flex sm:justify-end justify-center sm:mx-5 mx-0 pt-3 ">
            <Button onClick={addPropertyToCompared} className="bg-lightGreen w-36 font-bold text-white">
           {userInfo?.compared.includes(singleTitle?._id)?
            <TiTick className="font-bold text-white text-xl" />
            :

            <HiPlusSm className="font-bold text-white text-xl" />
            }
              {/* <TiTick/> */}
              <p>{language ? "مقارنة" : "Compare"}</p>
            </Button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="sm:flex text-2xl justify-between p-5 sm:text-3xl font-bold ">
          <div className="flex sm:justify-start justify-center sm:w-6/12 w-full ">
            <h2 className="sm:text-start text-center">{singleTitle?.title}</h2>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="flex items-center gap-1">
                {" "}
                <p>{language ? "جنية/" : "EGP/"}</p>
                <p>
                  {language
                    ? singleTitle?.price.toLocaleString("ar-EG")
                    : singleTitle?.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" sm:p-5 p-0  flex sm:justify-normal justify-center text-[#636363] sm:text-sm text-xs ">
          {singleTitle?.address.name}
        </div>
      </div>
    </div>
  );
}
export default memo(PropertyTitle);
