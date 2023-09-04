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
const AddProperty = () => {
  const [step, setStep] = useState(0);
  const [Show, setShow] = useState(true);
  const [propertyDetils, setPropertyDetils] = useState({
    title: "",
    offer: "",
    mainImage: null,
    multiImage: null,
    rentalPeriod: "",
    insurance: "",
    saleOption: "", //'', 'Cash', 'Installment', 'Cash & Installment'
    governrate: null, //ID
    region: null, //ID
    propType: "Residential", //'Residential', 'Commercial', 'Land',
    unitType: "", //'Residential', 'Commercial', 'Land'
    landType: "", // '', 'Agriculture', 'Building'
    price: "",
    area: null,
    areaType: "meter",
    realEstateFinance: false,
    downPayment: "",
    maintenancePayment: null,
    connectPhoneNumber: "",
    rooms: null,
    bathRooms: null,
    description: "",
    service: [], //ID,
    installmentOption: {
      type: "Yearly",
      period: null,
      amount: null,
    },
    spaceType: "m",
    address: {
      name: "shobra maser",
      governrate: "cairo",
      region: "rodelfarg",
      longitude: "30",
      latitude: "31",
      placeId: "4981811",
      postalCode: "11633",
    },

    appointments: {
      allDays: true,
      from: "",
      to: "",
      startDate: "",
      endDate: "",
    },
    phoneNumber: null,
    countryCode: null,
    status: "pendding",
    reason: "",
    level: "",
    negotiable: false,
    finishingType: "",
    isRegisterd: false,
    isFurnished: false,
  });
  const incrementStep = () => {
    if (step < 9) {
      setStep(step + 1);
    }
  };
  const decrementStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const [isLading, setLading] = useState(false);
  // const [mainImg, setMainImg] = useState(null);
  // const [multibulImg, setMultibulImg] = useState(null);
  const dispatch = useDispatch();
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
    formData.append("propType", propertyDetils.propType);
    formData.append("price", propertyDetils.price);
    formData.append("area", propertyDetils.area);
    formData.append("finishingType", propertyDetils.finishingType);
    formData.append("isFurnished", propertyDetils.isFurnished);
    formData.append("isRegisterd", propertyDetils.isRegisterd);
    formData.append("description", propertyDetils.description);
    formData.append("downPayment", propertyDetils.downPayment);
    formData.append("rooms", propertyDetils.rooms);
    propertyDetils.service.map((service) => {
      formData.append("service", service);
    });
    // for (let i = 0; i < propertyDetils.multiImage.length; i++) {
    //   formData.append("multiImage", propertyDetils.service[i]);
    // }
    formData.append("saleOption", propertyDetils.saleOption);
    formData.append("bathRooms", propertyDetils.bathRooms);
    formData.append(
      "installmentOption",
      JSON.stringify(propertyDetils.installmentOption)
    );
    formData.append("address", JSON.stringify(propertyDetils.address));
    formData.append(
      "appointments",
      JSON.stringify(propertyDetils.appointments)
    );

    formData.append("mainImage", propertyDetils.mainImage);

    // Append each file individually from the multibulImg array
    for (let i = 0; i < propertyDetils.multiImage.length; i++) {
      formData.append("multiImage", propertyDetils.multiImage[i]);
    }
    // for (let i = 0; i < multibulImg.length; i++) {
    //   formData.append("multiImage", multibulImg[i]);
    // }

    try {
      await createNewProperty(formData);
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
  const renderStep = () => {
    if (step === 0) {
      return (
        <GetStarted
          propertyDetils={propertyDetils}
          setData={setPropertyDetils}
        />
      );
    } else if (step === 1) {
      return (
        <PropertyInfo
          propertyDetils={propertyDetils}
          setData={setPropertyDetils}
        />
      );
    } else if (step === 2) {
      return (
        <Description
          propertyDetils={propertyDetils}
          setData={setPropertyDetils}
        />
      );
    } else if (step === 3) {
      return (
        <Price propertyDetils={propertyDetils} setData={setPropertyDetils} />
      );
    } else if (step === 4) {
      return (
        <Gallery propertyDetils={propertyDetils} setData={setPropertyDetils} />
      );
    } else if (step === 5) {
      return (
        <Features propertyDetils={propertyDetils} setData={setPropertyDetils} />
      );
    } else if (step === 6) {
      return (
        <Location propertyDetils={propertyDetils} setData={setPropertyDetils} />
      );
    } else if (step === 7) {
      return (
        <SellerInfo
          propertyDetils={propertyDetils}
          setData={setPropertyDetils}
        />
      );
    } else if (step === 8) {
      return (
        <Appointment
          propertyDetils={propertyDetils}
          setData={setPropertyDetils}
        />
      );
    } else if (step === 9) {
      return (
        <Review propertyDetils={propertyDetils} setData={setPropertyDetils} />
      );
    }
  };

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
      <div className=" w-full  rounded-3xl min-h-[550px] border-2 py-5  mx-auto px-7 bg-white drop-shadow-3xl">
        <div className="flex flex-col justify-between min-h-[500px] space-y-5">
          <div className="flex flex-col space-y-4 justify-between">
            <div className="">
              {/* <h3 className="text-center text-lg text-lightOrange font-black tracking-widest">
                {currentStep + 1}
                <span className="px-3 text-darkGreen font-thin">/</span>
                {steps.length}
              </h3> */}
              {/* <div className="h-3 w-full mx-auto border rounded-lg bg-darkGray mt-2 relative">
                <div
                  style={{
                    width: `${(step / 9) * 100}%`,
                  }}
                  className={`bg-lightGreen h-full duration-200 rounded-lg`}
                ></div>
              </div> */}
            </div>
            {/* {renderStep()} */}
            {Show && (
              <div className="space-y-10">
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
                <Location />
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
                <hr />
                <Review />
              </div>
            )}
          </div>

          <div className="flex justify-between items-center gap-5 ">
            {/* <Button
              type="submit"
              color="primary"
              variant="flat"
              disabled={isLading}
            >
              {isLading ? "Submut.." : "submit"}
            </Button> */}
            <button
              onClick={handleSubmit}
              disabled={isLading}
              className="bg-lightGreen rounded-xl py-1 sm:py-2  text-white font-medium w-[100px] sm:w-[140px] md:w-[140px] focus:outline-lightOrangeHover text-center"
            >
              {isLading ? "Submut.." : "submit"}
            </button>
            {step === 0 ? (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
