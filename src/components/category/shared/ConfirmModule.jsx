import React from "react";
import { IoIosSquareOutline, IoMdCheckboxOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { saveSearchFilter } from "./api";

import { useRouter } from "next/router";
const ConfirmModule = ({
  setConfirmSendMessage,
  confirmSendMessage,
  setOpenSaveFilterInput,
  setMessageConfirmed,
  messageConfirmed,
  setSaveed,
}) => {
  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);

  const handleCheckboxChange = () => {
    setConfirmSendMessage(!confirmSendMessage);
  };
  const sendConfirmData = async () => {
    await saveSearchFilter({
      confirmSendMessage,
      messageConfirmed,
      slug: router.asPath,
    }).then(() => {
      setOpenSaveFilterInput(false);
      setSaveed(true);
    });
  };
  return (
    <div className=" z-[800] flex flex-col  rounded-[1vw] items-center md:w-[60vw] w-11/12 h-[85vh] bg-white md:gap-y-[4vh] gap-y-[3vh] p-5">
      <div className=" max-w-min ">
        <CheckMarkIcon styles="  w-[15vw]" />
      </div>
      <div className="font-extrabold text-center -mt-5">
        <h5>تم حفظ عملية البحث بنجاح !</h5>
      </div>
      <div className="font-extrabold text-gray2 text-center">
        <p>
          يمكنك رؤية عمليات بحثك المحفوظة من قسم “العناصر المحفوظة” بحسابك
          الشخصي
        </p>
      </div>
      <hr className="border-t-2 border-[#CCCCCC] w-full " />
      <div className="w-full">
        <label htmlFor="save-search">
          {language ? "تسمية البحث" : "Search label"}
        </label>
        <input
          id="save-search"
          type="text"
          onChange={(e) => setMessageConfirmed(e.target.value)}
          className="w-full h-10 px-4 py-2 text-gray-700 placeholder:text-gray-500 focus:outline-none  font-medium focus:border-lightGreen  border-gray1  border-1 rounded-md "
        />
      </div>
      <div className="w-full items-center flex gap-x-1">
        <button onClick={handleCheckboxChange}>
          {confirmSendMessage ? (
            <IoMdCheckboxOutline
              className={`${
                confirmSendMessage ? "text-lightGreen" : "text-gray2"
              }  h-5 w-5 `}
            />
          ) : (
            <IoIosSquareOutline
              className={`${
                confirmSendMessage ? "text-lightGreen" : "text-gray2"
              }  h-5 w-5 `}
            />
          )}
        </button>

        <label
          className={`${confirmSendMessage && "text-lightGreen"}`}
          htmlFor="confirm-message"
        >
          {language
            ? "تلقي رسائل عبر البريد الإلكتروني بالإعلانات الجديدة"
            : "Receive emails with new announcements"}
        </label>
      </div>
      <hr className="border-t-2 border-[#CCCCCC] w-full " />
      <div className="w-full">
        <div className=" md:w-6/12 w-full  flex gap-x-2 md:justify-end justify-center">
          <button
            onClick={sendConfirmData}
            disabled={messageConfirmed == "" && !confirmSendMessage}
            className={`${
              messageConfirmed || confirmSendMessage
                ? "bg-lightGreen"
                : "bg-[#95dee1]"
            }  text-white rounded-[1vw] font-extrabold h-[40px] md:h-[50px]  w-6/12`}
          >
            {language ? "تم" : "Confirm"}
          </button>
          <button
            onClick={() => setOpenSaveFilterInput(false)}
            className="border-gray2 border-1 text-gray2 font-extrabold rounded-[1vw] h-[40px] md:h-[50px]  w-6/12"
          >
            {language ? "رجوع" : "Back"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModule;

const CheckMarkIcon = ({ styles }) => {
  return (
    <svg
      width="88"
      height="87"
      viewBox="0 0 88 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles}`}
    >
      <g clipPath="url(#clip0_1727_5725)">
        <path
          d="M44.0004 86.5926C67.7996 86.5926 87.0926 67.2996 87.0926 43.5004C87.0926 19.7012 67.7996 0.408203 44.0004 0.408203C20.2012 0.408203 0.908203 19.7012 0.908203 43.5004C0.908203 67.2996 20.2012 86.5926 44.0004 86.5926Z"
          fill="#32BA7C"
        />
        <path
          d="M32.9902 62.9395L55.148 85.0973C73.4996 80.2035 87.0934 63.4832 87.0934 43.5004C87.0934 43.0926 87.0934 42.6848 87.0934 42.277L69.6934 26.2363L32.9902 62.9395Z"
          fill="#0AA06E"
        />
        <path
          d="M45.0871 53.1525C46.9902 55.0557 46.9902 58.3182 45.0871 60.2213L41.1449 64.1635C39.2418 66.0666 35.9793 66.0666 34.0762 64.1635L16.8121 46.7635C14.909 44.8604 14.909 41.5979 16.8121 39.6947L20.7543 35.7525C22.6574 33.8494 25.9199 33.8494 27.823 35.7525L45.0871 53.1525Z"
          fill="white"
        />
        <path
          d="M60.1754 23.11C62.0785 21.2068 65.341 21.2068 67.2441 23.11L71.1863 27.0521C73.0895 28.9553 73.0895 32.2178 71.1863 34.1209L41.2801 63.8912C39.377 65.7943 36.1145 65.7943 34.2113 63.8912L30.2691 59.949C28.366 58.0459 28.366 54.7834 30.2691 52.8803L60.1754 23.11Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1727_5725">
          <rect
            width="87"
            height="87"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
