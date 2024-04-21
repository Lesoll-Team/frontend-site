import React from "react";
import { useSelector } from "react-redux";

const PopularTag = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div
      className={`font-bold  text-white relative
       w-[50px] h-[130px] lg-text `}
    >
      <div
        className={`bg-lightGreen text-white
        -mt-[35px]
        ${language ? "-rotate-[48deg] -ml-[90px] pl-5" : " pr-6 -mr-[90px] rotate-[48deg] "} absolute
       w-[200px] h-[130px] flex items-end pb-5  justify-center`}
      >
        {language ? "اكثر شعبية" : "popular"}
      </div>
    </div>
  );
};

export default PopularTag;
//   return (
//     <div
//       className="w-[200px] -ml-[80px]  h-[85px]   -rotate-45  bg-lightGreen font-bold text-white absolute
//     flex items-end justify-center pb-5 pl-8 font-cairo lg-text
//     "
//     >
//       {language ? "اكثر شعبية" : "popular"}
//     </div>
//   );
