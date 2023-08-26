import React, { useState } from "react";

import FormControlBtns from "../../FormControlBtns";
import MultiImgs from "./MultiImgs";
import MainImg from "./MainImg";

const Photos = () => {
  const [mainImg, setMainImg] = useState();
  const [multiImg, setMultiImg] = useState();
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setMainImg(imageList[0]);
  };
  const onChangeMulti = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setMainImg(imageList);
  };

  return (
    <div className="w-full min-h-[450px] mx-auto px-6 md:px-8 my-5 space-y- flex flex-col justify-between">
      <div>
        {" "}
        <h3 className="text-lg md:text-2xl text-darkGreen font-bold mb-1">
          Photos
        </h3>
        <p className="text-sm sm:text-lg font-medium text-dar">
          Please provide clear and high-quality photos to ensure the acceptance
          of your property
        </p>
        <div className="my-3">
          <MainImg />
          <MultiImgs />
        </div>
      </div>
      <div className="-mb-6 ">
        <FormControlBtns canGoNext={true} />
      </div>
    </div>
  );
};

export default Photos;
