import { Image } from "@nextui-org/react";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { FaEdit, FaEye, FaHeart, FaRegUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";

const PropertyDetailsAdmin = ({ propertyDetails }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const formatDate = (date) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(date).toLocaleString("ar-Eg", options);
  };
  console.log(propertyDetails);
  return (
    <div className="relative">
      <div className="fixed left-0 top-[50%] z-50">
        <div className="bg-blue-500 p-2 text-white">
          <Link
            href={`/editproperty/${propertyDetails.getProperty.slug}`}
            className="bg-blue-300 static"
          >
            <FaEdit className="text-xl md:text-2xl" />
          </Link>
        </div>
        <div className="bg-lightGreen p-2 text-white">
          <Link
            href={`/property-details/${propertyDetails.getProperty.slug}`}
            className="bg-blue-300 static"
          >
            <CgWebsite className="text-xl md:text-2xl" />
          </Link>
        </div>
        <div className="bg-lightOrange p-2 text-white">
          <Link
            href={`/dashboard/user-details/${propertyDetails.getProperty.user.username}`}
            className="bg-blue-300 static"
          >
            <FaRegUserCircle className="text-xl md:text-2xl" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto py-5 space-y-5 ">
        {/* header----------------------------------------------- */}
        <div className="flex justify-between  p-2 bg-white rounded-md">
          <div className="text-sm md:text-xl">
            <p>{language ? "تمت الموافقة عليه من :" : "Accepted by:"}</p>

            {"  "}
            <p className="font-semibold text-lightGreen">
              {propertyDetails.getAdminAccept}
            </p>
          </div>
          <div className="text-sm md:text-xl">
            <p> {language ? "تاريخ النشر فى" : "Posted At"}</p>

            {"  "}
            <p className="font-semibold text-lightGreen">
              {formatDate(propertyDetails.getProperty.createdAt)}
            </p>
          </div>
        </div>
        {/* ----------------------------main content ------------------------------- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
          <div className="w-full">
            <Image
              src={propertyDetails.getProperty.thumbnail}
              className=" w-[100%]  object-cover"
            />
          </div>
          {/* ------------------------------------------- */}
          <div className="w-full space-y-4">
            {/* -------------------------------------------------------------- */}
            <div className="w-[100%] bg-white h-full p-3 py-5 rounded-lg">
              <div className=" w-full space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-1 px-3 bg-gray-100 flex items-center gap-1 rounded-lg">
                    <FaEye className="text-cyan-600" />
                    <p>{propertyDetails.getViewPage}</p>
                  </div>
                  <div className="p-1 px-3 bg-gray-100 flex items-center gap-1 rounded-lg">
                    <FaHeart className="text-red-500" />
                    <p>{propertyDetails.favoritesTotal}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className=" text-xl font-semibold">
                    السعر{" "}
                    <span className="text-lightGreen">
                      {propertyDetails.getProperty.price.toLocaleString(
                        "ar",
                        "Eg"
                      )}
                    </span>
                  </p>
                  <p className="text-lightGreen font-bold">للبيع</p>
                </div>

                <p className="text-xl xl:text-3xl font-semibold text-lightOrange">
                  {propertyDetails.getProperty.title}
                </p>
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-darkGreen" />
                  <p>
                    {propertyDetails.getProperty.address.governrate},{" "}
                    {propertyDetails.getProperty.address.governrate}
                  </p>
                </div>
              </div>
            </div>
            {/* --------------------------------------------------------------------- */}
            <div className="bg-white rounded-lg w-full p-3 h-full grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div className="bg-gray-100 p-3 text-center rounded-md">
                <h4 className="text-sm sm:text-lg font-semibold ">
                  مشاراكات فيسبوك
                </h4>
                <p>{propertyDetails.facebookShareTotal}</p>
              </div>
              <div className="bg-gray-100 p-3 text-center rounded-md">
                <h4 className="text-sm sm:text-lg font-semibold ">
                  مشاراكات تويتر
                </h4>
                <p>{propertyDetails.twitterShareTotal}</p>
              </div>
              <div className="bg-gray-100 p-3 text-center rounded-md">
                <h4 className="text-sm sm:text-lg font-semibold ">
                  مشاراكات واتس اب
                </h4>
                <p>{propertyDetails.whatsappShareTotal}</p>
              </div>
              <div className="bg-gray-100 p-3 text-center rounded-md">
                <h4 className="text-sm sm:text-lg font-semibold ">
                  {" "}
                  مشاراكات أخرى
                </h4>
                <p>{propertyDetails.otherShareTotal}</p>
              </div>
              <div className="bg-gray-100 p-3 text-center rounded-md">
                <h4 className="text-sm sm:text-lg font-semibold ">
                  {" "}
                  التواصل واتس اب
                </h4>
                <p>{propertyDetails.whatsappClickTotal}</p>
              </div>
              <div className="bg-gray-100 p-3 text-center rounded-md">
                <h4 className="text-sm sm:text-lg font-semibold ">
                  التواصل بالهاتف
                </h4>
                <p>{propertyDetails.callClickTotal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyDetailsAdmin;
