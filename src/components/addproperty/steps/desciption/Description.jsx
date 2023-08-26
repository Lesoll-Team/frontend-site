import { setDescription } from "@/redux-store/features/propertySlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormControlBtns from "../../FormControlBtns";

const Description = () => {
  const description = useSelector((state) => state.Property.description);
  const dispatch = useDispatch();
  const canGoNext = Boolean(description);
  return (
    <div className="w-full min-h-[450px] mx-auto px-6 md:px-8 my-5 space-y- flex flex-col justify-between">
      <div>
        <h3 className="text-2xl text-darkGreen font-bold mb-1">Description</h3>
        <p className="text-sm sm:text-lg font-medium text-lightGreen">
          Write a full description for your property to attract buyer's
          attention
        </p>
        <textarea
          placeholder="example: apartment for sale or rent with good view"
          value={description}
          onChange={(e) => dispatch(setDescription(e.target.value))}
          className="w-full text-lg font-medium text-darkGreen focus:outline-none placeholder:text-darkgray placeholder:opacity-60    rounded-xl p-4 drop-shadow-xl max-h-[300px] resize-none"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="-mb-6 ">
        <FormControlBtns canGoNext={canGoNext} />
      </div>
    </div>
  );
};

export default Description;
