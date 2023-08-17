import Link from "next/link";
import React,{memo} from "react";
import {
  MdOutlineFavorite,
  MdOutlineShare,
  MdReportProblem,
  MdKeyboardArrowRight,
  
} from "react-icons/md";
 function PropertyTitle() {
  return (
    <div>
      <div className="sm:flex  justify-between p-5">
        <div className="flex justify-center">
          <span className="text-[#636363] md:text-sm text-xs  flex items-center	">
            <Link href="/" className="text-blue-400 "> home</Link> <MdKeyboardArrowRight />  <Link href="/proberty" className="text-blue-400"> property</Link><MdKeyboardArrowRight />
            cairo-haram
          </span>
        </div>
        <div className="flex justify-center gap-5 text-xl">
          <div className="border-2 border-lightGreen p-1 rounded-md">
            <MdOutlineFavorite className="text-lightGreen" />
          </div>
          <div className="border-2 border-lightGreen p-1 rounded-md">
            <MdOutlineShare className="text-lightGreen" />
          </div>
          <div className=" bg-lightOrangeHover  p-1 rounded-md">
            <MdReportProblem className="text-white" />
          </div>
        </div>
      </div>

      <div>

        <div className="sm:flex text-2xl  justify-between p-5 sm:text-3xl font-bold " >
          <div className="flex justify-center">
            <h2>cairo-haram</h2>
          </div>
          <div className="flex justify-center">
            <div>100,0000/EGP</div>
          </div>
        </div>

        <div className=" p-5 text-[#636363] sm:text-sm text-xs " >8100 S Haram Giza, Cairo, IL 60620, EGY</div>
      </div>
    </div>
  );
}
export default memo(PropertyTitle)