import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import React from "react";
import { IoClose } from "react-icons/io5";

const SidebarFilter = ({ notificationsMenuRef, languageIs, setOpenFilter }) => {
  return (
    <div className="  absolute left-0  w-full  h-screen flex   ">
      <div
        dir={languageIs ? "rtl" : "ltr"}
        ref={notificationsMenuRef}
        className={` bg-white  shadow-r-sm z-[1000] h-screen  md:w-[37.7vw] w-full pb-[100px] px-[2vw] pt-[50px] flex flex-col gap-y-[4.5vh]`}
      >
        <div className=" w-full flex justify-between items-center">
          <span className="text-[25px]">{languageIs ? "بحث" : "Search"}</span>
          <IoClose
            onClick={() => setOpenFilter(false)}
            className="text-[20px] cursor-pointer"
          />
        </div>

        <div className="">
          <div className="flex gap-x-2">
            <span>{languageIs ? "السعر" : "Price"}</span>

            <span className="text-gray1">
              {languageIs ? "(جنيه)" : "(EGY)"}
            </span>
          </div>
          <div className="flex justify-between gap-x-[1.5vw]">
            <input
              type="number"
              className="indent-2 md:h-[5.7vh] h-[33px] w-6/12  border-1 border-gray1  focus:outline-none rounded-[1vh]"
              placeholder={languageIs ? "من" : "from"}
            />

            <input
              type="number"
              className="indent-2 md:h-[5.7vh] h-[33px] w-6/12  border-1 border-gray1  focus:outline-none rounded-[1vh]"
              placeholder={languageIs ? "الى" : "to"}
            />
          </div>
        </div>

        <div className="flex   gap-x-[1.5vw]">
          <div className="flex w-full flex-col  gap-x-2">
            <span>{languageIs ? "السعر" : "Price"}</span>

            <Dropdown
              defaultValue={null}
              data={"data"}
              value={"value"}
              setValue={"setValue"}
              setValueKey={"setValueKey"}
              classNames={" w-full "}
            />
          </div>
          <div className="flex flex-col w-full gap-x-2">
            <span>{languageIs ? "السعر" : "Price"}</span>

            <Dropdown
              defaultValue={null}
              data={"data"}
              value={"sss"}
              setValue={"setValue"}
              setValueKey={"setValueKey"}
              classNames={" w-full "}
            />
          </div>
        </div>
      </div>
      <div className="h-screen absolute  z-[600] w-full bg-[#323232] opacity-30" />
    </div>
  );
};

export default SidebarFilter;
