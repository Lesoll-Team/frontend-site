import { setDescription } from "@/redux-store/features/propertySlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Description = () => {
  const description = useSelector((state) => state.Property.description);
  const dispatch = useDispatch();
  return (
    <div className="w-full mx-auto px-8 md:px-8 my-8 space-y-3 ">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">Description</h3>
      <p className="text-sm sm:text-lg font-medium text-lightGreen">
        Write a full description for your property to attract buyer's attention
      </p>
      <textarea
        placeholder="example: apartment for sale or rent with good view"
        value={description}
        onChange={(e) => dispatch(setDescription(e.target.value))}
        className="w-full text-lg font-medium text-darkGreen focus:outline-none placeholder:text-darkGreen placeholder:opacity-60    rounded-xl p-4 drop-shadow-xl max-h-[250px] resize-none"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default Description;
