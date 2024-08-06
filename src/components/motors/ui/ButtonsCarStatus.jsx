import { useState } from "react";
import { useSelector } from "react-redux";

const ButtonsCarStatus = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [statusCar, setStatusCar] = useState("");
  return (
    <div
      dir={language && "rtl"}
      className="grid grid-cols-3 gap-2 items-center justify-between w-full"
    >
      <button
        onClick={() => setStatusCar("all")}
        className={`shadow-sm border rounded-md bg-white p-2 px-3 `}
      >
        {language ? "الكل" : "All"}
      </button>
      <button
        onClick={() => setStatusCar("new")}
        className={`${statusCar === "new" && "border-lightGreen text-lightGreen"} shadow-sm border rounded-md bg-white p-2 px-3 `}
      >
        {language ? "جديد" : "New"}
      </button>
      <button
        onClick={() => setStatusCar("used")}
        className={`${statusCar === "used" && "border-lightGreen text-lightGreen "}shadow-sm border rounded-md bg-white p-2 `}
      >
        {language ? "مستعمل" : "Used"}
      </button>
    </div>
  );
};
export default ButtonsCarStatus;
