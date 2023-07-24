import Image from "next/image";
import testImg from "../../../public/card.png";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
const RealtyCard = () => {
  return (
    <div className="max-w-[350px] rounded-[50px] overflow-hidden bg-darkGreen pb-3 shadow">
      {/* card img */}
      <Image
        src={testImg}
        width={"auto"}
        height={"auto"}
        className="w-full h-[260px] overflow-hidden   object-cover"
      />
      {/* card body  */}
      <div className="s">
        <div className="-mt-10 bg-white ` h-10 px-6 flex justify-between mb-1 items-center relative z-[100]">
          <p className="text-lightOrange font-bold ">18,000 EGP</p>
          <p className="text-lightOrange  ">For Sale</p>
        </div>
        <div className="-mt-10 text-white rounded-b-[40px] h-20 pt-12 px-6 flex justify-between mb-1">
          <p>شقه مفروشه للإيجار بالشيخ زايد</p>
        </div>
        <div className="-mt-10 text-white rounded-b-[40px] h-20 pt-12 px-7 flex  justify-start gap-5 mb-1">
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
          <p className="text-sm  text-white">Cairo - Naser City</p>
        </div>
      </div>
    </div>
  );
};

export default RealtyCard;
