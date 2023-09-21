import React from "react";
import { AiOutlineClear } from "react-icons/ai";
import { useSelector } from "react-redux";

function CompareHeader() {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className=" mt-5">
      <div className="flex justify-center text-lightGreen font-bold text-5xl">
        <p> {language ? "مقارنة العقارات" : "Compare properties"}</p>
      </div>
      <div className="grid grid-cols-2 py-5 text-xl ">
        <div className=" gap-2 flex justify-center">
          <p>{language ? "عدد المقارنة " : "compare count"}:</p>
          <p>2</p>
        </div>

        <div className="flex gap-2 items-center justify-center ">
          <p> {language ? "مسح المقارنة " : "Delete compare"} :</p>
          <button>
            <AiOutlineClear className="text-lightOrange" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompareHeader;
