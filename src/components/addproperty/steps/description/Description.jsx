import React from "react";
import { useSelector } from "react-redux";
const Description = ({ setData, propertyDetils }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-7">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "وصف العقار" : "Description"}
      </h3>
      <div>
        <textarea
          placeholder={
            language
              ? "مثال : شقه فى للبيع تطل على مشهد جيد"
              : "example: apartment for sale or rent with good view"
          }
          value={propertyDetils.description}
          onChange={(e) => {
            setData({ ...propertyDetils, description: e.target.value });
          }}
          className="w-full focus:border-lightGreen text-lg font-medium text-darkGreen focus:outline-none placeholder:text-darkgray placeholder:opacity-60 border-[3px]   rounded-xl p-4  max-h-[300px] resize-none"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
};

export default Description;