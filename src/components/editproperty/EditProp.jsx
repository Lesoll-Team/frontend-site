import { useSelector } from "react-redux";
import GetStarted from "./steps/getStarted/GetStarted";
import { useEffect, useState } from "react";
import Description from "./steps/description/Description";
import SellerInfo from "./steps/sellerInfo/SellerInfo";
import Features from "./steps/features/Features";
import Link from "next/link";
import Price from "./steps/price/Price";
import PropertyInfo from "./steps/propInfo/PropertyInfo";
import Gallery from "./steps/gallery/Gallery";
import Location from "./steps/location/Location";
import { editProperty } from "@/utils/propertyAPI";
import Accepted from "./Accepted";
import { DotPulse } from "@uiball/loaders";
import { motion } from "framer-motion";

const EditProp = ({ propData, setPropData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const propType = {
    en: [
      { value: "Residential", name: "Residential" },
      { value: "Commercial", name: "Commercial" },
      { value: "Land", name: "Land" },
    ],
    ar: [
      { value: "Residential", name: "سكنى" },
      { value: "Commercial", name: "تجارى" },
      // { value: "Land", name: "أرض" },
    ],
  };
  const isLoading = useSelector((state) => state.Auth.isLoding);

  const [isAuth, setAuth] = useState(false);

  const [sended, setSended] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    setAuth(isLoading);

    // console.log(userDataInfo);
  }, []);
  useEffect(() => {
    if (propData) {
      // console.log(propData?.unitType?._id);
      if (propData?.service[0]?._id) {
        setPropData({
          ...propData,
          service: propData.service.map((obj) => obj._id),
        });
      }
    }
  }, [propData?.service]);

  // console.log(propData.service[0]._id);
  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    // e.preventDefault();
    const formData = new FormData();
    formData.append("title", propData.title);
    formData.append("offer", propData.offer);
    if (propData.mainImage) {
      formData.append("mainImage", propData.mainImage);
    }
    // Append each file individually from the multibulImg array
    if (propData.multiImage && propData.multiImage.length > 0) {
      for (let i = 0; i < propData.multiImage.length; i++) {
        formData.append("multiImage", propData.multiImage[i]);
      }
    }
    formData.append("rentalPeriod", propData.rentalPeriod);
    // formData.append("album", propData.album);
    formData.append("thumbnail", propData.thumbnail);
    formData.append("insurance", propData.insurance);
    formData.append("saleOption", propData.saleOption);
    formData.append("propType", propData.propType);
    if (propData?.unitType?._id) {
      formData.append("unitType", propData.unitType._id);
    } else {
      formData.append("unitType", propData.unitType);
    }
    formData.append("landType", propData.landType);
    formData.append("price", propData.price);
    formData.append("area", propData.area);
    formData.append("areaType", propData.areaType);
    // formData.append("RealEstateFinance", propData.realEstateFinance);
    formData.append("downPayment", propData.downPayment);

    formData.append("maintenancePayment", propData.maintenancePayment);

    formData.append("rooms", propData.rooms);
    formData.append("bathRooms", propData.bathRooms);
    formData.append("description", propData.description);
    // propData.unitType.map((unitType) => {
    //   formData.append("unitType", unitType);
    // });
    propData.album.map((album) => {
      formData.append("album", album._id);
    });
    propData.service.map((service) => {
      formData.append("service", service);
    });
    formData.append(
      "installmentOption",
      JSON.stringify(propData.installmentOption)
    );
    formData.append("address", JSON.stringify(propData.address));

    formData.append("connectPhoneNumber", propData.connectPhoneNumber);
    formData.append("status", propData.status);
    formData.append("negotiable", propData.negotiable);
    formData.append("finishingType", propData.finishingType);
    formData.append("isFurnished", propData.isFurnished);
    formData.append("isRegisterd", propData.isRegisterd);

    try {
      await editProperty(formData, propData._id);
      setSended(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error("Error creating property:", error);
    }

    setIsSubmitting(false);
  };
  // console.log(propData);
  return propData ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      // dir={language ? "ltr" : "rtl"}
      className="container mx-auto py-10 space-y-4 min-h-[95dvh]   flex flex-col justify-center items-center"
    >
      <h1 className="text-center text-5xl font-bold text-white mb-4"></h1>
      <div
        className={` w-full  rounded-3xl  border-2 py-5  mx-auto px-7 bg-white drop-shadow-2xl duration-200 ${
          sended ? " md:w-[80%] min-h-[200px] " : "min-h-[550px]"
        }`}
      >
        <div
          className={`flex flex-col justify-between min-h-[500px] space-y-10 ${
            sended && " items-center justify-center h-[500px]"
          }`}
        >
          {!sended ? (
            <>
              <div className="flex flex-col space-y-10 justify-between ">
                <GetStarted propertyDetils={propData} setData={setPropData} />
                <hr />

                <Price propertyDetils={propData} setData={setPropData} />
                <hr />
                <PropertyInfo propertyDetils={propData} setData={setPropData} />
                <hr />
                <Description propertyDetils={propData} setData={setPropData} />
                <hr />
                <Gallery propertyDetils={propData} setData={setPropData} />
                <hr />
                <Features propertyDetils={propData} setData={setPropData} />
                <hr />
                <Location propertyDetils={propData} setData={setPropData} />
                <hr />
                <SellerInfo propertyDetils={propData} setData={setPropData} />
                <hr />
                {/* <hr /> */}
                {/* <Review /> */}
              </div>
              {/* {errors && (
              <p className="text-center text-red-500">{errors[0]}</p>
            )} */}
              {isAuth ? (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`bg-lightGreen mx-auto text-xl h-10 rounded-xl w-full md:w-96 py-1   px-3 text-white font-semibold  text-center flex justify-center items-center ${
                    isSubmitting && "opacity-70"
                  }`}
                >
                  {isSubmitting ? (
                    // <DotWave size={47} speed={1.5} color="#fff" />
                    <DotPulse size={50} speed={1.3} color="#fff" />
                  ) : language ? (
                    "تعديل العقار"
                  ) : (
                    "Submit"
                  )}
                </button>
              ) : (
                <Link
                  href={"/signin"}
                  className="text-center bg-lightOrange py-2 text-white font-semibold rounded-xl"
                >
                  Sign In
                </Link>
              )}
            </>
          ) : (
            <Accepted />
          )}
        </div>
      </div>
    </motion.div>
  ) : (
    <div className="h-[90vh] flex items-center justify-center">
      <DotPulse size={60} speed={1.3} color="#309da0" />
    </div>
  );
};

export default EditProp;
