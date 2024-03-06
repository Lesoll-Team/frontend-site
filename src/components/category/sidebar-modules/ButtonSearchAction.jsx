import { sendFilterToRootsPage } from "@/redux-store/features/category/categorySlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ButtonSearchAction = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { sort, pageNumber, clickOnUnits } = useSelector(
    (state) => state.Category
  );
  const dispatch = useDispatch();
  const handleFilterAction = () => {
    dispatch(sendFilterToRootsPage());
  };
  useEffect(() => {
    handleFilterAction();
  }, [sort, pageNumber, clickOnUnits]);
  return (
    <div className="mb-5 flex justify-center">
      <button
        onClick={handleFilterAction}
        className="md:w-[24.2vw] w-full rounded-[1vh] h-[40px] md:h-[3.813rem] bg-lightGreen text-white"
      >
        {language ? "عرض النتائج" : "Show results"}
      </button>
    </div>
  );
};

export default ButtonSearchAction;
