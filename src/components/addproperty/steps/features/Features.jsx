import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";

const Features = () => {
  return (
    <div className="w-full mx-auto px-8 md:px-8 my-8 space-y-3">
      <h3 className="text-2xl text-darkGreen font-bold mb-2">Features</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-between items-center gap-7">
        {/* {features.map((feature,i)=>{
  return (
    <div key={i} className="flex items-center gap-2">
    <div className="w-5 h-5 border-2 border-darkGreen rounded-full  relative">
      <GiCheckMark className="text-lightOrange font-bold  text-3xl  absolute -left-1 rotate-6 -top-[12px]" />
    </div>
    <p className="text-lg">Balacony</p>
  </div>
  )
})} */}
      </div>
    </div>
  );
};

export default Features;
