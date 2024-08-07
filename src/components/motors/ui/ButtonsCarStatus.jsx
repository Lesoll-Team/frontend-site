import { updateCarStates } from "@/redux-store/features/carsCategory/searchMotorsSlice";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

const ButtonsCarStatus = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { status } = useSelector((state) => state.Motors);
  const dispatch = useDispatch();

  const changeStatusCar = (key) => {
    dispatch(
      updateCarStates({
        status: key,
      }),
    );
  };

  return (
    <div
      dir={"rtl"}
      className="grid grid-cols-3 gap-2 items-center justify-between w-full"
    >
      <button
        onClick={() => changeStatusCar("all")}
        className={`shadow-sm border rounded-md bg-white p-2 px-3 `}
      >
        {language ? "الكل" : "All"}
      </button>
      <button
        onClick={() => changeStatusCar("new")}
        className={`${status === "new" && "border-lightGreen text-lightGreen"} shadow-sm border rounded-md bg-white p-2 px-3 `}
      >
        {language ? "جديد" : "New"}
      </button>
      <button
        onClick={() => changeStatusCar("used")}
        className={`${status === "used" && "border-lightGreen text-lightGreen "}shadow-sm border rounded-md bg-white p-2 `}
      >
        {language ? "مستعمل" : "Used"}
      </button>
    </div>
  );
};
export default memo(ButtonsCarStatus);
