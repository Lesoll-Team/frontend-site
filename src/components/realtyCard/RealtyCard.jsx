import Image from "next/image";
import testImg from "../../../public/testimg.webp";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const RealtyCard = () => {
  return (
    <div className="md:max-w-[310px] lg:max-w-[350px] max-w-[295px] h-[410px] rounded-[30px] overflow-hidden relative bg-white text-lightGreen pb-3 drop-shadow-xl">
      {/* number of views */}
      <div className="flex items-center justify-between absolute w-full top-10">
        <div className=" bg-white  top-9 text-sm w-20 text-center px-2 py-1  rounded-r-full">
          3 weeks
        </div>
        <div className=" bg-white  drop-shadow-lg p-7 mr-2  text-2xl rounded-lg text-center px-2 py-1 cursor-pointer  ">
          {/* <AiOutlineHeart /> */}
          <AiFillHeart className="text-red-500" />
        </div>
      </div>
      {/* card img */}
      <Image
        alt="Realty"
        src={testImg}
        width={"auto"}
        height={"auto"}
        className="w-full h-[220px] overflow-hidden   object-cover"
      />
      {/* card body  */}
      <div className="relative ">
        <div className="  bg-lightGreen text-white rounded-b-[30px] h-10 px-6 flex justify-between mb-1 items-center relative z-[100]">
          <p className=" font-bold ">18,000 EGP</p>
          <p className="  ">For Sale</p>
        </div>
        <div className="-mt-10 text-lightOrange rounded-b-[40px] h-20 pt-12 px-6 flex justify-between mb-1 font-bold">
          <p>شقه مفروشه للإيجار بالشيخ زايد</p>
        </div>
        <div className="-mt-10 text-lightGreen h-20 pt-12 px-7 flex  justify-start gap-5 mb-5">
          <div className="flex items-center justify-start gap-1">
            {" "}
            <BiSolidBed className="text-xl " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">3 Rooms</p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <FaBath className="text-xl " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">1 Bath</p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <TbRulerMeasure className="text-l " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">250 m2</p>
          </div>
        </div>
        {/* location */}
        <div className="px-7 mb-1 ">
          <p className="text-sm  text-darkGray">Cairo - Naser City</p>
        </div>
      </div>
    </div>
  );
};

export default RealtyCard;
