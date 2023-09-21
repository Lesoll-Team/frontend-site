import React, { memo, useState } from "react"; //, useEffect, useState
import { MdCheckCircleOutline } from "react-icons/md";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
import { useSelector } from "react-redux";

function DescriptionFeatures({ singleDescriptionFeatures }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className=" sm:p-10 p-0 px-0 sm:px-14  bg-gray-100 rounded-3xl">
<div className="sm:mt-0 mt-3 sm:px-0 px-2">
  <b className="sm:text-3xl text-lg">
    {/* Description */}
    {language ? ar.property.description : en.property.description}
  </b>
  <div className="">
    <p    className={`lg:text-lg md:text-medium sm:text-small text-sm ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {isExpanded ? singleDescriptionFeatures?.description : singleDescriptionFeatures?.description.slice(0, 100)}
    </p>
    {singleDescriptionFeatures.description.length > 100 && (
      <button onClick={toggleDescription} className="text-lightGreen hover:underline">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    )}
  </div>
</div>
      <br />
      <hr />
      <br />
      <b className="sm:text-3xl text-lg sm:px-0 px-2">
        {language ? ar.property.features : en.property.features}
      </b>

      <div className=" grid xl:grid-cols-6 lg:grid-cols-4  grid-cols-3  ">
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
