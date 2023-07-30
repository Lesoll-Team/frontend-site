import Image from "next/image";
import testImg from "../../../public/testimg.webp";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
const RealtyCard = () => {
  return (
    <div className="md:max-w-[310px] lg:max-w-[350px] max-w-[295px] h-[410px] rounded-[30px] overflow-hidden bg-white text-lightGreen pb-3 drop-shadow-2xl">
      {/* card img */}
      <Image
        src={testImg}
        priority
            loading="lazy"
        width={"auto"}
        height={"auto"}
        className="w-full h-[220px] overflow-hidden   object-cover"
        alt="RealtyCard"

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
          <div className="flex items-center justify-start">
            {" "}
            <BiSolidBed className="text-xl " />{" "}
            <p className="text-[12px] font-semibold ">3 Rooms</p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <FaBath className="text-xl " />{" "}
            <p className="text-[12px] font-semibold ">1 Bath</p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <TbRulerMeasure className="text-l " />{" "}
            <p className="text-[12px] font-semibold ">250 m2</p>
          </div>
        </div>
        {/* location */}
        <div className="px-7 mb-1 ">
          <p className="text-sm  text-lightGreen">Cairo - Naser City</p>
        </div>
      </div>
    </div>
  );
};

export default RealtyCard;
