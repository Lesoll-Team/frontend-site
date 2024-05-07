import React from "react";
import { useForm } from "react-hook-form";

const useNavSearch = () => {
  const form = useForm();
  const { register } = form;
  const NavSearch = () => {
    return (
      //   <div className="absolute -bottom-10 translate-y-3 showSearch duration-400 bg-red-500 w-full py-2">
      //     <input
      //       {...register("input")}
      //       className="w-full border-2 p-3 bg-gray-200 rounded-md"
      //       placeholder="Search"
      //       //   onChange={handleInputChange}
      //     />
      //   </div>
      null
    );
  };
  return { NavSearch };
};

export default useNavSearch;
