import Image from "next/image";
import testImg from "../../../../public/testimg.webp";
import { BiSolidBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
import { deleteProperty } from "@/utils/propertyAPI";

const ProfileCard = ({ propertyDetails, type, onRemove }) => {
  const deleteProp = async () => {
    try {
      await deleteProperty(propertyDetails._id);
      // After successfully adding to favorites, trigger the removal callback
      onRemove(propertyDetails._id);
    } catch (error) {
      console.error("Error del prop:", error);
    }
  };
  return (
    <div className="md:max-w-[310px] lg:max-w-[350px] max-w-[295px] min-h-[410px] rounded-[30px] overflow-hidden relative bg-white text-lightGreen pb-3 drop-shadow-xl">
      {/* number of views */}
      <div className="flex items-center justify-end absolute w-full top-10">
        <div className=" bg-white text-lightOrange font-medium top-9 text-sm w-20 text-center px-2 py-1   rounded-l-full">
          {type === "active"
            ? "active"
            : type === "inactive"
            ? "inactive"
            : type === "pending"
            ? "pending"
            : type === "draft"
            ? "draft"
            : ""}
        </div>
      </div>
      {/* card img */}
      <img
        alt="Realty"
        src={propertyDetails.thumbnail}
        loading="lazy"
        className="w-full h-[220px] overflow-hidden   object-cover"
      />
      {/* card body  */}
      <div className="relative ">
        <div className="  bg-lightGreen text-white rounded-b-[30px] h-10 px-6 flex justify-between mb-1 items-center relative z-[100]">
          <p className=" font-bold ">{propertyDetails.price} EGP</p>
          <p className="  ">{propertyDetails.offer}</p>
        </div>
        <div className="-mt-10 text-lightOrange rounded-b-[40px] h-20 pt-12 px-6 flex justify-between mb-1 font-bold">
          <p>{propertyDetails.title}</p>
        </div>
        <div className="-mt-10 text-lightGreen h-20 pt-12 px-7 flex  justify-start gap-5 mb-5">
          <div className="flex items-center justify-start gap-1">
            {" "}
            <BiSolidBed className="text-xl " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propertyDetails.rooms} Rooms
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <FaBath className="text-xl " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propertyDetails.bathrooms} Bath
            </p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <TbRulerMeasure className="text-l " />{" "}
            <p className="text-[12px] font-semibold text-darkGray">
              {propertyDetails.area} m2
            </p>
          </div>
        </div>
        {/* location */}
        {/* <div className="px-7 mb-1 ">
      <p className="text-sm  text-lightGreen">Cairo - Naser City</p>
    </div> */}
        <div className="px-7 mb-1 flex justify-between items-center ">
          <p className="text-sm  text-darkGray">
            {propertyDetails.address.name}
          </p>
          <div className="flex gap-3 items-center">
            <AiFillDelete
              className="text-xl  md:text-2xl text-red-600 cursor-pointer"
              onClick={deleteProp}
            />

            <Link href={"/profile"}>
              <AiOutlineEdit className="text-xl md:text-2xl text-lightGreen" />
            </Link>
          </div>
        </div>
        {type === "draft" ? (
          <div className="flex flex-col items-center space-y-2 mt-5">
            <button className="w-[90%] mx-auto text-center text-lightGreen py-1 text-md rounded-xl font-semibold border-lightGreen border-2 md:hover:bg-lightGreen md:hover:text-white duration-300">
              Resume
            </button>
          </div>
        ) : type !== "pending" ? (
          <div className="flex flex-col items-center space-y-2 mt-5">
            <button className="w-[90%] mx-auto text-center text-lightGreen py-1 text-md rounded-xl font-semibold border-lightGreen border-2 md:hover:bg-lightGreen md:hover:text-white duration-300">
              Repost
            </button>
            <button className="w-[90%] mx-auto text-center text-lightGreen py-1 text-md rounded-xl font-semibold border-lightGreen border-2 md:hover:bg-lightGreen md:hover:text-white duration-300">
              Change Status
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default ProfileCard;
