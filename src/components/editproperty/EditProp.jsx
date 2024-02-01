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
// import Location from "./steps/location/Location";
import { editProperty, getGovernorate, getRegion } from "@/utils/propertyAPI";
import Accepted from "./Accepted";
import { DotPulse } from "@uiball/loaders";
import { motion } from "framer-motion";
import useAddPropValidation from "@/Hooks/useAddPropValidation";
import Place from "./steps/place/Place";

const EditProp = ({ propData, setPropData }) => {
  const [governrate, setGovernrate] = useState([]);
  const [region, setRegion] = useState([]);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const isLoading = useSelector((state) => state.Auth.isLoding);

  const [isAuth, setAuth] = useState(false);

  const [sended, setSended] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [PhoneTitleError, setPhoneTitleError] = useState(false);

  useEffect(() => {
    setAuth(isLoading);
  }, []);

  useEffect(() => {
    if (propData) {
      if (propData?.service[0]?._id) {
        const service = propData.service.map((obj) => obj._id);
        setTimeout(() => {
          setPropData((prevData) => ({ ...prevData, service: service }));
        }, 50);
      }
    }
  }, []);
  useEffect(() => {
    const fetchGovernrate = async () => {
      const gov = await getGovernorate();
      setGovernrate(gov);
    };
    fetchGovernrate();
    const fetchRegion = async () => {
      const gov = await getRegion();
      setRegion(gov);
    };
    fetchRegion();
  }, []);

  useEffect(() => {
    if (!propData.connectPhoneNumber) {
      setPropData({ ...propData, phoneChoice: "same" });
    } else {
      setPropData({ ...propData, phoneChoice: "other" });
    }
  }, [propData?.title]);

  const [propErrors, setPropErrors] = useState({});

  const { errors, validateProperty } = useAddPropValidation(
    propErrors,
    setPropErrors
  );

  const handleSubmit = async (e) => {
    const isValid = validateProperty(propData);
    if (!isValid) {
      return;
    }
    setIsSubmitting(true);
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
    formData.append("RealEstateFinance", propData.RealEstateFinance);
    formData.append("downPayment", propData?.downPayment || 0);

    formData.append("maintenancePayment", propData?.maintenancePayment || 0);

    formData.append("rooms", propData?.rooms);
    formData.append("bathRooms", propData?.bathRooms);
    formData.append("description", propData?.description);

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

    if (propData.phoneChoice === "other") {
      formData.append("connectPhoneNumber", propData.connectPhoneNumber);
    } else {
      formData.append("connectPhoneNumber", "");
    }
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
      if (error.message.includes("Phone number")) {
        setPhoneTitleError(true);
      }
    }

    setIsSubmitting(false);
  };
  const userInfo = useSelector((state) => state.GlobalState.userData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      // dir={language ? "ltr" : "rtl"}
      className="sm:container px-3 sm:px-0  mx-auto py-10 space-y-4 min-h-[95dvh] pb-20  flex flex-col justify-center items-center"
    >
      <div
        className={` w-full  rounded-3xl  py-5  mx-auto px-7  duration-200 ${
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
                <GetStarted
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propData}
                  setData={setPropData}
                />
                <hr />

                {propData.offer !== "For Investment" && (
                  <div className="animate-appearance-in space-y-10">
                    <Price
                      propErrors={propErrors}
                      setPropErrors={setPropErrors}
                      propertyDetils={propData}
                      setData={setPropData}
                    />
                    <hr />
                  </div>
                )}
                <PropertyInfo
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propData}
                  setData={setPropData}
                />
                <hr />
                <Description
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propData}
                  setData={setPropData}
                />
                <hr />
                <Gallery
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propData}
                  setData={setPropData}
                />
                <hr />
                <Features propertyDetils={propData} setData={setPropData} />
                <hr />
                {/* <Location
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propData}
                  setData={setPropData}
                /> */}
                <Place
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propData}
                  setData={setPropData}
                  governrate={governrate}
                  region={region}
                />
                <hr />
                <SellerInfo
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propData}
                  setData={setPropData}
                />
              </div>

              {errors && (
                <p className="text-center text-red-500">{errors[0]}</p>
              )}
              {PhoneTitleError && (
                <p className="text-center text-red-500">
                  {language
                    ? "غير مسموح بإضافة الرقم فى العنوان"
                    : "Phon Number is Not allowed to be added the title"}
                </p>
              )}
              {isAuth ? (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`bg-lightGreen mx-auto text-xl  rounded-xl w-full  py-2 hover:bg-lightGreenHover duration-150   px-3 text-white font-semibold  text-center flex justify-center items-center ${
                    isSubmitting && "opacity-70"
                  }`}
                >
                  {isSubmitting ? (
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
                  title={language ? "سجل الدخول" : "Sign In"}
                >
                  {language ? "سجل الدخول" : "Sign In"}
                </Link>
              )}
            </>
          ) : (
            <Accepted />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EditProp;
