import React, { useState, useRef, useEffect } from "react";
import { HiDownload, HiOutlineDotsVertical } from "react-icons/hi";
import { useSelector } from "react-redux";

const PlanCard = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const language = useSelector((state) => state.GlobalState.languageIs);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-3 py-5 md:px-5 md:py10 border-2 rounded bg-white drop-shadow-md flex flex-col gap-8 relative">
      <div
        ref={menuRef}
        className={`absolute w-fit relat ${language ? "left-3" : " right-3"}`}
      >
        <button onClick={() => setMenuVisible(!isMenuVisible)}>
          <HiOutlineDotsVertical />
        </button>
        {isMenuVisible && (
          <div
            className={` absolute bg-white  drop-shadow p-1 ${language ? "left-0" : " right-0"} rounded`}
          >
            <p className="text-center px-7  w-full py-2 whitespace-nowrap">
              {language ? "تغير الباقة" : "Change package"}
            </p>
            <hr />
            <p className="text-center px-7  w-full py-2 text-red-500 whitespace-nowrap">
              {language ? " إلغاء الإشتراك" : "unsubscrip"}
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <h3>باقة بريميوم</h3>
        <h3 className="text-lightGreen">500 جنية \ شهر</h3>
      </div>
      <div>
        <div>
          <div className="py-3 px-4 flex justify-between bg-gray-300">
            <p className="font-bold">
              {language ? "عدد الإعلانات المتبقية" : "Remaining ads "}
            </p>
            <p>
              20 {language ? "من" : "out of"} 50 {language ? "إعلان" : "ad"}
            </p>
          </div>
          <div className="py-3 px-4 flex justify-between">
            <p className="font-bold">
              {language ? "تاريخ الإشتراك" : "Subscription date"}
            </p>
            <p>20/2/2024</p>
          </div>
          <div className="py-3 px-4 flex justify-between bg-gray-300">
            <p className="font-bold">
              {language ? "تجدد تلقائيا يوم" : "Automatically renewed in "}
            </p>
            <p>20/2/2024</p>
          </div>
        </div>
      </div>
      <button className="w-fit flex gap-2 items-center text-[#0863BD]">
        <HiDownload />{" "}
        <p className="text-[#0863BD]">
          {language ? "تحميل الفاتورة" : "Download the invoice "}
        </p>
      </button>
    </div>
  );
};
export default PlanCard;
