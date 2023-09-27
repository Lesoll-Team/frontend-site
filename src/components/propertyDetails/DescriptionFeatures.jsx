import React, { memo, useState } from "react"; //, useEffect, useState
import { MdCheckCircleOutline } from "react-icons/md";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
import { useSelector } from "react-redux";
import { Chip } from "@nextui-org/react";

function DescriptionFeatures({ singleDescriptionFeatures }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="  p-0 px-0   rounded-xl space-y-4">
      <div className="  space-y-3">
        <h3 className="sm:text-4xl text-lg  font-bold text-lightOrange ">
          {/* Description */}
          {language ? ar.property.description : en.property.description}
        </h3>
        <div className="bg-white drop-shadow-lg border p-10 rounded-xl ">
          <p
            style={{
              lineHeight: "2",
            }}
            className={`lg:text-lg md:text-medium sm:text-small text-sm  font-medium tracking-wider ${
              isExpanded ? "expanded" : "collapsed"
            }`}
          >
            {isExpanded
              ? singleDescriptionFeatures?.description
              : singleDescriptionFeatures?.description.slice(0, 200)}
            {!isExpanded &&
              singleDescriptionFeatures.description.length > 200 &&
              "...."}
          </p>
          {singleDescriptionFeatures.description.length > 100 && (
            <button
              onClick={toggleDescription}
              className="text-lightGreen hover:underline"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
      {singleDescriptionFeatures?.service.length > 0 && (
        <div className="space-y-3">
          <h3 className="sm:text-4xl text-lg sm:px-0 px-2 font-bold text-lightOrange">
            {language ? "المميزات" : en.property.features}
          </h3>
          <div className=" flex flex-wrap gap-2  bg-white drop-shadow-xl p-10 rounded-lg border">
            {singleDescriptionFeatures.service.map((services) => (
              <div
                key={services._id}
                className="bg-lightGreen px-3 py-1 rounded-lg"
              >
                <p className="text-white font-semibold">
                  {language ? services.name.ar : services.name.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(DescriptionFeatures);
