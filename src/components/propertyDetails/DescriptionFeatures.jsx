import React, { memo } from "react"; //, useEffect, useState
import { MdCheckCircleOutline } from "react-icons/md";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
import { useSelector } from "react-redux";

function DescriptionFeatures({ singleDescriptionFeatures }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className=" p-10 px-14 border-2 border-gray-200 rounded-3xl">
      <div>
        <b className="sm:text-3xl text-lg">
          {/* Description */}
          {language ? ar.property.description : en.property.description}
        </b>
        <div>
          <p className=" sm:text-[22px] text-[16px] text-justify ">
            {singleDescriptionFeatures.description}
          </p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <b className="sm:text-3xl text-lg">
        {language ? ar.property.features : en.property.features}
      </b>

      <div className=" grid xl:grid-cols-6 lg:grid-cols-4  grid-cols-3 ">
        {singleDescriptionFeatures.service.map((services) => (
          <div key={services._id}>
            <div className=" flex items-center  sm:text-xl text-sm   sm:p-3 py-2   ">
           <span>   <MdCheckCircleOutline className="mx-2 w-[23px] h-[23px] text-lightGreen" /></span>
        <span>      {language ? services.name.ar : services.name.en}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default memo(DescriptionFeatures);
