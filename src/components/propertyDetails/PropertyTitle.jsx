import Link from "next/link";
import React, { memo, useState } from "react";
import {
  MdOutlineFavorite,
  MdOutlineShare,
  MdReportProblem,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { Tooltip, Button } from "@nextui-org/react";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
import { useRouter } from "next/router";
function PropertyTitle({ singleTitle }) {
  const [isOpen, setIsOpen] =useState(false);
const copyLinkPage=()=>{
   const urlToCopy = window.location.href;
   navigator.clipboard.writeText(urlToCopy)
}
  return (
    <div>
      <div className="sm:flex  justify-between p-5">
        <div className="flex justify-center ">
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

        <div className="grid  grid-cols-3 text-center gap-5 text-xl">
          <div className="border-2 w-[50px]  border-lightGreen hover:border-lightGreenHover hover:shadow-lg p-1 rounded-md">
         <div className="flex justify-center items-center ">
         <Button  className="bg-inherit ">  <MdOutlineFavorite className="text-lightGreen text-2xl" /></Button>
         </div>
          </div>

          <div className="border-2 border-lightGreen flex justify-center items-center w-[50px] rounded-md">
            <Tooltip
              isOpen={isOpen}
              onOpenChange={(open) => setIsOpen(open)}
              content="Copy Link"
              placement="bottom"
              size="sm"
              className="mt-2"
            >
              <Button onPress={copyLinkPage} size="sm" className="w-[50px] bg-inherit flex justify-items-center items-center" >
                <MdOutlineShare className="text-lightGreen text-2xl" />
              </Button>
            </Tooltip>
          </div>

          <div className="border-2 w-[50px]  bg-lightOrangeHover p-1 rounded-md">
         <div className="flex justify-center items-center ">
         <Button  className="bg-inherit ">  <MdReportProblem className="text-white text-2xl" /></Button>
         </div>
          </div>

        </div>
      </div>

      <div>
        <div className="sm:flex text-2xl  justify-between p-5 sm:text-3xl font-bold ">
          <div className="flex justify-center">
            <h2>{singleTitle?.address.region}</h2>
          </div>
          <div className="flex justify-center">
            <div>
              <span>{singleTitle?.price}</span>/EGP
            </div>
          </div>
        </div>

        <div className=" p-5 text-[#636363] sm:text-sm text-xs ">
          
          {singleTitle?.address.name}
        </div>
      </div>
    </div>
  );
}
export default memo(PropertyTitle);
