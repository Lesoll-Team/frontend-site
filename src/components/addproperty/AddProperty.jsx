import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";
import { createNewProperty } from "../../utils/propertyAPI";
const GetStarted = dynamic(() => import("./steps/getStarted/GetStarted"));
const PropertyInfo = dynamic(() => import("./steps/propInfo/PropertyInfo"));
const Description = dynamic(() => import("./steps/description/Description"));
const Price = dynamic(() => import("./steps/price/Price"));
const Gallery = dynamic(() => import("./steps/gallery/Gallery"));
const Features = dynamic(() => import("./steps/features/Features"));
const SellerInfo = dynamic(() => import("./steps/sellerInfo/SellerInfo"));
const Appointment = dynamic(() => import("./steps/appointment/Appointment"));
const Location = dynamic(() => import("./steps/location/Location"));
import useAddPropValidation from "@/Hooks/useAddPropValidation";
import Head from "next/head";
import Accepted from "./Accepted";
const AddProperty = () => {
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
  const isLoading = useSelector((state) => state.Auth.isLoding);

  const [isAuth, setAuth] = useState(false);

  const [sended, setSended] = useState(false);

  const [isLading, setLading] = useState(false);

  useEffect(() => {
    setAuth(isLoading);

    // console.log(userDataInfo);
  });
  const { errors, validateProperty } = useAddPropValidation();
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
      console.error("Error creating property:", error);
    }

    setLading(false);
  };
  // z
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div
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
                <GetStarted
                  propertyDetils={propertyDetils}
                  setData={setPropertyDetils}
                />
                <hr />
                <Price
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
              {errors && (
                <p className="text-center text-red-500">{errors[0]}</p>
              )}
              {isAuth ? (
                <button
                  onClick={handleSubmit}
                  disabled={isLading}
                  className="bg-lightGreen mx-auto text-xl rounded-xl w-full md:w-96 py-1 sm:py-2  text-white font-medium  text-center"
                >
                  {isLading ? "Submit.." : "submit"}
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
    </div>
  );
};

export default AddProperty;
