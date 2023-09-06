import { Input, Button } from "@nextui-org/react";
import React, { useState } from "react";
import { createNewProperty } from "../../utils/propertyAPI";
import {
  selectAddPropData,
  setMultiImage,
} from "@/redux-store/features/addPropertySlice";
import { useDispatch, useSelector } from "react-redux";
import AddPropInput from "./AddPropIputs/AddPropInput";
import GetStarted from "./steps/getStarted/GetStarted";
import AddPropDropdown from "./AddPropIputs/AddPropDropdown";
import PropertyInfo from "./steps/propInfo/PropertyInfo";
import Description from "./steps/description/Description";
import Price from "./steps/price/Price";
import Gallery from "./steps/gallery/Gallery";
import Features from "./steps/features/Features";
import SellerInfo from "./steps/sellerInfo/SellerInfo";
import Appointment from "./steps/appointment/Appointment";
import Review from "./steps/reviewProperty/Review";
import Location from "./steps/location/Location";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";
const AddProperty = () => {
  const [step, setStep] = useState(0);
  const [Show, setShow] = useState(true);
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
    appointments: {
      allDays: true,
      from: "",
      to: "",
      startDate: "",
      endDate: "",
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
  });
  // console.log(propertyDetils);
  const [sended, setSended] = useState(false);
  // const incrementStep = () => {
  //   if (step < 9) {
  //     setStep(step + 1);
  //   }
  // };
  // const decrementStep = () => {
  //   if (step > 0) {
  //     setStep(step - 1);
  //   }
  // };
  const [isLading, setLading] = useState(false);
  // const [mainImg, setMainImg] = useState("");
  // const [multibulImg, setMultibulImg] = useState(null);

  const handleSubmit = async (e) => {
    if (!propertyDetils.title) {
      console.error("Title is missing.");
      return;
    }

    if (!propertyDetils.mainImage) {
      console.error("Main image is missing.");
      return;
    }

    if (!propertyDetils.multiImage || propertyDetils.multiImage.length === 0) {
      console.error("Multi-images are missing.");
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
    propertyDetils.service.map((service) => {
      formData.append("service", service);
    });
    formData.append(
      "installmentOption",
      JSON.stringify(propertyDetils.installmentOption)
    );
    formData.append("address", JSON.stringify(propertyDetils.address));
    formData.append(
      "appointments",
      JSON.stringify(propertyDetils.appointments)
    );
    formData.append("connectPhoneNumber", propertyDetils.connectPhoneNumber);
    formData.append("status", propertyDetils.status);
    formData.append("negotiable", propertyDetils.negotiable);
    formData.append("finishingType", propertyDetils.finishingType);
    formData.append("isFurnished", propertyDetils.isFurnished);
    formData.append("isRegisterd", propertyDetils.isRegisterd);
    // for (let i = 0; i < propertyDetils.multiImage.length; i++) {
    //   formData.append("multiImage", propertyDetils.service[i]);
    // }

    // for (let i = 0; i < multibulImg.length; i++) {
    //   formData.append("multiImage", multibulImg[i]);
    // }

    try {
      await createNewProperty(formData);
      setSended(true);

      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error("Error creating property:", error);
    }
    // dispatch(setMultiImage(formData.getAll("multiImage")));
    // console.log(formData.getAll("appointments"));

    setLading(false);
  };
  // console.log("data", propertyDetils);
  // const renderStep = () => {
  //   if (step === 0) {
  //     return (
  //       <GetStarted
  //         propertyDetils={propertyDetils}
  //         setData={setPropertyDetils}
  //       />
  //     );
  //   } else if (step === 1) {
  //     return (
  //       <PropertyInfo
  //         propertyDetils={propertyDetils}
  //         setData={setPropertyDetils}
  //       />
  //     );
  //   } else if (step === 2) {
  //     return (
  //       <Description
  //         propertyDetils={propertyDetils}
  //         setData={setPropertyDetils}
  //       />
  //     );
  //   } else if (step === 3) {
  //     return (
  //       <Price propertyDetils={propertyDetils} setData={setPropertyDetils} />
  //     );
  //   } else if (step === 4) {
  //     return (
  //       <Gallery propertyDetils={propertyDetils} setData={setPropertyDetils} />
  //     );
  //   } else if (step === 5) {
  //     return (
  //       <Features propertyDetils={propertyDetils} setData={setPropertyDetils} />
  //     );
  //   } else if (step === 6) {
  //     return (
  //       <Location propertyDetils={propertyDetils} setData={setPropertyDetils} />
  //     );
  //   } else if (step === 7) {
  //     return (
  //       <SellerInfo
  //         propertyDetils={propertyDetils}
  //         setData={setPropertyDetils}
  //       />
  //     );
  //   } else if (step === 8) {
  //     return (
  //       <Appointment
  //         propertyDetils={propertyDetils}
  //         setData={setPropertyDetils}
  //       />
  //     );
  //   } else if (step === 9) {
  //     return (
  //       <Review propertyDetils={propertyDetils} setData={setPropertyDetils} />
  //     );
  //   }
  // };

  // console.log(JSON.stringify(propertyDetils.appointments));
  // const handleSaleOption = (e) => {};
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div
      // dir={language ? "ltr" : "rtl"}
      className="container mx-auto py-10 space-y-4 min-h-[95dvh]  flex flex-col justify-center items-center"
    >
      <h1 className="text-center text-5xl font-bold text-white mb-4">
        Add Property
      </h1>
      <div
        className={` w-full  rounded-3xl  border-2 py-5  mx-auto px-7 bg-white drop-shadow-3xl duration-200 ${
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
                {/* <div className="">
              <h3 className="text-center text-lg text-lightOrange font-black tracking-widest">
                {currentStep + 1}
                <span className="px-3 text-darkGreen font-thin">/</span>
                {steps.length}
              </h3>
              <div className="h-3 w-full mx-auto border rounded-lg bg-darkGray mt-2 relative">
                <div
                  style={{
                    width: `${(step / 9) * 100}%`,
                  }}
                  className={`bg-lightGreen h-full duration-200 rounded-lg`}
                ></div>
              </div>
            </div> */}
                {/* {renderStep()} */}

                <GetStarted
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <PropertyInfo
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <Description
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <Price
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <Gallery
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <Features
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <Location
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <SellerInfo
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <Appointment
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                {/* <hr /> */}
                {/* <Review /> */}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLading}
                className="bg-lightGreen mx-auto text-xl rounded-xl w-full md:w-96 py-1 sm:py-2  text-white font-medium  text-center"
              >
                {isLading ? "Submit.." : "submit"}
              </button>
            </>
          ) : (
            <div className="flex flex-col justify-center h-full items-center w-full space-y-8 mt-10">
              <div className="space-y-3 flex flex-col justify-center items-center">
                <AiFillCheckCircle className="text-green-500 text-8xl  animate-appearance-in" />
                <h3 className="text-2xl font-semibold text-darkGreen">
                  تمت إضافة العقار بنجاح
                </h3>
                <p className="text-xl font-semibold text-darkGray">
                  سيتم مراجعة العقار من فريق ليسول وسيتم الرد فى اقرب وقت
                </p>
              </div>
              <div className="flex gap-5">
                <Link
                  className="text-xl bg-lightGreen px-5 border-[3px] border-lightGreen text-white font-medium py-1 rounded-lg w-[180px] text-center"
                  href={"/"}
                >
                  الرئيسية
                </Link>
                <Link
                  className="text-xl border-2 border-lightGreen px-5 text-lightGreen  font-medium py-1 rounded-lg w-[180px] text-center"
                  href={"/profile"}
                >
                  الصفحة الشخصية
                </Link>
              </div>
            </div>
          )}
          {/* <Button
              type="submit"
              color="primary"
              variant="flat"
              disabled={isLading}
            >
              {isLading ? "Submut.." : "submit"}
            </Button> */}

          {/* {step === 0 ? (
              <div
                onClick={incrementStep}
                className={`bg-lightOrange text-center text-white font-medium py-2 px-4 rounded-xl text-2xl w-[85%] md:w-96  mx-auto`}
              >
                Get Started
              </div>
            ) : (
              <>
                <div
                  onClick={decrementStep}
                  className="bg-lightOrange rounded-xl py-1 sm:py-2   text-white font-medium w-[100px] sm:w-[140px] md:w-[140px] focus:outline-lightOrangeHover text-center"
                >
                  Back
                </div>
                {step === 9 ? (
                  <button
                    disabled={isLading}
                    className="bg-lightGreen rounded-xl py-1 sm:py-2  text-white font-medium w-[100px] sm:w-[140px] md:w-[140px] focus:outline-lightOrangeHover text-center"
                  >
                    {isLading ? "Submut.." : "submit"}
                  </button>
                ) : (
                  <div
                    onClick={incrementStep}
                    className="bg-lightOrange rounded-xl py-1 sm:py-2  text-white font-medium w-[100px] sm:w-[140px] md:w-[140px] focus:outline-lightOrangeHover text-center"
                  >
                    Next
                  </div>
                )}
              </>
            )} */}
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
