import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import Link from "next/link";
import { createNewProperty } from "../../utils/propertyAPI";
const GetStarted = dynamic(() => import("./steps/getStarted/GetStarted"));
const PropertyInfo = dynamic(() => import("./steps/propInfo/PropertyInfo"));
const Description = dynamic(() => import("./steps/description/Description"));
const Price = dynamic(() => import("./steps/price/Price"));
const Gallery = dynamic(() => import("./steps/gallery/Gallery"));
const Features = dynamic(() => import("./steps/features/Features"));
const SellerInfo = dynamic(() => import("./steps/sellerInfo/SellerInfo"));
// const Appointment = dynamic(() => import("./steps/appointment/Appointment"));
const Location = dynamic(() => import("./steps/location/Location"));
import useAddPropValidation from "@/Hooks/useAddPropValidation";
import Accepted from "./Accepted";
import { DotPulse } from "@uiball/loaders";
import { useRouter } from "next/router";

const AddProperty = () => {
  // const router = useRouter();
  // const router = useRouter();
  // console.log(router.pathname);
  // useEffect(() => {
  //   const exitingFunction = (event) => {
  //     // display a confirmation dialog with a message
  //     const confirmExit = window.confirm(
  //       "Are you sure you want to leave this page?"
  //     );

  //     // if the user clicks Cancel, prevent the page from unloading
  //     if (!confirmExit) {
  //       router.preventDefault();
  //       event.returnValue = ""; // For some older browsers
  //     }
  //   };

  //   window.addEventListener("beforeunload", exitingFunction);

  //   return () => {
  //     console.log("unmounting component...");
  //     window.removeEventListener("beforeunload", exitingFunction);
  //   };
  // }, []);

  const userInfo = useSelector((state) => state.GlobalState.userData);
  // console.log(userInfo);
  const [propertyDetils, setPropertyDetils] = useState({
    title: "",
    offer: "",
    mainImage: "",
    multiImage: "",
    rentalPeriod: "",
    insurance: 0,
    saleOption: "", //'', 'Cash', 'Installment', 'Cash & Installment'
    governrate: "", //ID
    region: "", //ID
    propType: "", //'Residential', 'Commercial', 'Land',
    unitType: "", //'Residential', 'Commercial', 'Land'
    landType: "", // '', 'Agriculture', 'Building'
    price: 0,
    area: 0,
    areaType: "m",
    realEstateFinance: false,
    downPayment: 0,
    maintenancePayment: 0,
    deliveryDate: "",
    sellerName: userInfo?.fullname,
    sellerEmail: userInfo?.email,
    rooms: 0,
    bathRooms: 0,
    description: "",
    service: [], //ID,
    installmentOption: {
      type: "Yearly",
      period: 0,
      amount: 0,
    },
    address: {
      name: "",
      governrate: "",
      region: "",
      longitude: "",
      latitude: "",
      placeId: "",
      postalCode: "",
    },

    connectPhoneNumber: "",

    countryCode: "",
    status: "Pending",
    reason: "",
    level: "",
    negotiable: false,
    finishingType: "",
    isRegisterd: false,
    isFurnished: false,
    downPaymentType: "cash",
    downPaymentAmount: 0,
    installmentPeriodType: "yearly",
    // installmentPeriod: 0,
    phoneChoice: "same", // "same" , "other"
  });
  const [propErrors, setPropErrors] = useState({});

  // console.log(propertyDetils);
  const isLoading = useSelector((state) => state.Auth.isLoding);

  const [isAuth, setAuth] = useState(false);

  const [sended, setSended] = useState(false);

  const [isLading, setLading] = useState(false);
  const [PhoneTitleError, setPhoneTitleError] = useState(false);

  useEffect(() => {
    setAuth(isLoading);

    // console.log(userDataInfo);
  });

  const { errors, validateProperty } = useAddPropValidation(
    propErrors,
    setPropErrors
  );
  const handleSubmit = async (e) => {
    const isValid = validateProperty(propertyDetils);
    if (!isValid) {
      return;
    }
    setLading(true);
    // e.preventDefault();
    const formData = new FormData();
    formData.append("title", propertyDetils.title);
    formData.append("offer", propertyDetils.offer);
    formData.append("mainImage", propertyDetils.mainImage);

    // Append each file individually from the multibulImg array
    for (let i = 0; i < propertyDetils.multiImage.length; i++) {
      formData.append("multiImage", propertyDetils.multiImage[i]);
    }
    formData.append("rentalPeriod", propertyDetils.rentalPeriod);
    formData.append("insurance", propertyDetils.insurance);
    formData.append("saleOption", propertyDetils.saleOption);
    formData.append("propType", propertyDetils.propType);
    formData.append("unitType", propertyDetils.unitType);
    formData.append("landType", propertyDetils.landType);
    formData.append("price", propertyDetils.price);
    formData.append("area", propertyDetils.area);
    formData.append("areaType", propertyDetils.areaType);
    formData.append("RealEstateFinance", propertyDetils.realEstateFinance);
    formData.append("downPayment", propertyDetils.downPayment);
    formData.append("maintenancePayment", propertyDetils.maintenancePayment);
    formData.append("rooms", propertyDetils.rooms);
    formData.append("bathRooms", propertyDetils.bathRooms);
    formData.append("description", propertyDetils.description);
    formData.append("level", propertyDetils.level);
    formData.append("deliveryDate", propertyDetils.deliveryDate);
    propertyDetils.service.map((service) => {
      formData.append("service", service);
    });
    formData.append(
      "installmentOption",
      JSON.stringify(propertyDetils.installmentOption)
    );
    formData.append("address", JSON.stringify(propertyDetils.address));

    if (propertyDetils.phoneChoice === "other") {
      formData.append("connectPhoneNumber", propertyDetils.connectPhoneNumber);
    }
    formData.append("status", propertyDetils.status);
    formData.append("negotiable", propertyDetils.negotiable);
    formData.append("finishingType", propertyDetils.finishingType);
    formData.append("isFurnished", propertyDetils.isFurnished);
    formData.append("isRegisterd", propertyDetils.isRegisterd);

    try {
      await createNewProperty(formData);
      setSended(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., display an error message)
      // console.error("Error creating property:", error.message);
      // console.log(error.message.includes("Phone number"));
      if (error.message.includes("Phone number")) {
        setPhoneTitleError(true);
        setPropErrors((prevState) => ({ ...prevState, title: ture }));
      }
    }

    setLading(false);
  };
  // console.log(propertyDetils);
  useEffect(() => {
    if (userInfo?.phone) {
      if (!userInfo?.phone) {
        setPropertyDetils({ ...propertyDetils, phoneChoice: "other" });
      }
    }
  }, [userInfo?.phone]);
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div
      // dir={language ? "ltr" : "rtl"}
      className="sm:container px-3 sm:px-0  mx-auto py-10 space-y-4 min-h-[95dvh] pb-20  flex flex-col justify-center items-center"
    >
      <div
        className={` w-full  rounded-3xl  py-5  mx-auto px-7  duration-200  ${
          sended ? " md:w-[80%] min-h-[200px] " : "min-h-[550px]"
        }`}
      >
        <div
          className={`flex flex-col justify-between min-h-[500px] space-y-10 z-[1000] ${
            sended && " items-center justify-center h-[500px]"
          }`}
        >
          {!sended ? (
            <>
              <div className="flex flex-col space-y-10 justify-between ">
                <GetStarted
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                {propertyDetils.offer !== "For Investment" && (
                  <div className="animate-appearance-in space-y-10">
                    <Price
                      propErrors={propErrors}
                      setPropErrors={setPropErrors}
                      propertyDetils={propertyDetils}
                      setData={setPropertyDetils}
                    />
                    <hr />
                  </div>
                )}
                <PropertyInfo
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <Description
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <Gallery
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <Features
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <Location
                  propErrors={propErrors}
                  setPropErrors={setPropErrors}
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                {userInfo && (
                  <SellerInfo
                    propErrors={propErrors}
                    setPropErrors={setPropErrors}
                    propertyDetils={propertyDetils}
                    setData={setPropertyDetils}
                  />
                )}
                {/* <Appointment
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                /> */}
                {/* <hr /> */}
                {/* <Review /> */}
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
                  disabled={isLading}
                  className="bg-lightGreen mx-auto text-xl rounded-xl w-full  py-2 hover:bg-lightGreenHover duration-150  px-3 text-white font-medium  text-center flex justify-center items-center"
                >
                  {isLading ? (
                    <DotPulse size={50} speed={1.3} color="#fff" />
                  ) : language ? (
                    "أضف العقار"
                  ) : (
                    "Add Property"
                  )}
                </button>
              ) : (
                <Link
                  href={"/signin"}
                  className="text-center bg-lightOrange py-2 text-white font-semibold rounded-xl"
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
    </div>
  );
};

export default AddProperty;
