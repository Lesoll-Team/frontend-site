import Image from "next/image";
import testImg from "../../../public/testimg.webp";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const RealtyCard = ({
  title,
  price,
  img,
  offer,
  rooms,
  bathRooms,
  area,
  description,
}) => {
  function getWordStr(str) {
    return str.split(/\s+/).slice(0, 10).join(" ");
  }
  const shortDescription = getWordStr(description);
  return (
    <div className="md:max-w-[310px] lg:max-w-[350px] max-w-[295px] h-[410px] rounded-[30px] overflow-hidden relative bg-white text-lightGreen pb-3 drop-shadow-xl">
      {/* number of views */}
      <div className="flex items-center justify-end absolute w-full top-10">
        <div className=" bg-white  drop-shadow-lg p-7 mr-2  text-2xl rounded-lg text-center px-2 py-1 cursor-pointer  ">
          {/* <AiOutlineHeart /> */}
          <AiFillHeart className="text-red-500" />
        </div>
      </div>
      {/* card img */}
      <Image
        alt="Realty"
        src={testImg}
        loading="lazy"
        width={"auto"}
        height={"auto"}
        className="w-full h-[220px] overflow-hidden   object-cover"
      />
      {/* card body  */}
      <div className="relative ">
        <div className="  bg-lightGreen text-white rounded-b-[30px] h-10 px-6 flex justify-between mb-1 items-center relative z-[100]">
          <p className=" font-bold ">
            {price ? parseInt(price).toLocaleString() : 0} EGP
          </p>
          <p className=" font-bold ">{offer || "exp: for sale"}</p>
        </div>
        <div className="-mt-10 text-lightOrange rounded-b-[40px] h-20 pt-12 px-6 flex justify-between mb-1 font-bold">
          <p>{title || "Title"}</p>
        </div>

        <div className="-mt-10 text-lightGreen h-20 pt-12 px-7 flex  justify-start gap-5 mb-5">
          <div className="flex items-center justify-start gap-1">
            <BiSolidBed className="text-xl " />
            <p className="text-xs font-semibold text-darkGray">
              {rooms || 0} Rooms
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaBath className="text-xl " />
            <p className="text-xs font-semibold text-darkGray">
              {bathRooms || 0} Bath
            </p>
          </div>
          <div className="flex items-center gap-1">
            <TbRulerMeasure className="text-l " />
            <p className="text-xs font-semibold text-darkGray">
              {area || 0} m2
            </p>
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
