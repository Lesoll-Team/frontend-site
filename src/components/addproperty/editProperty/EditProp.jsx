import React, { useEffect, useState } from "react";
import { createNewProperty } from "../../../utils/propertyAPI";

import { useDispatch, useSelector } from "react-redux";

import GetStarted from "./steps/getStarted/GetStarted";
import PropertyInfo from "./steps/propInfo/PropertyInfo";
import Description from "./steps/description/Description";
import Price from "./steps/price/Price";
import Gallery from "./steps/gallery/Gallery";
import Features from "./steps/features/Features";
import SellerInfo from "./steps/sellerInfo/SellerInfo";
import Appointment from "./steps/appointment/Appointment";
// import Review from "./steps/reviewProperty/Review";
import Location from "./steps/location/Location";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditProp = () => {
  const { push } = useRouter();
  const userInfo = useSelector((state) => state.GlobalState.userData);
  //   const userToken = JSON.parse(localStorage.getItem("userToken"));
  // console.log(userInfo?._id);
  const [propertyDetils, setPropertyDetils] = useState(null);
  const [isLading, setLading] = useState(false);
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
  const getProp = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/property/get/property/singlepage/64f5cfd50a4be1e744e6ab0c`
      );
      setPropertyDetils(response.data.find);
      // console.log(propertyDetils);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProp();
  }, []);
  //   if (userInfo?._id !== propertyDetils?.user?._id) {
  //
  //   }
  if (propertyDetils?.user?._id === propertyDetils?.user?._id) {
    return (
      <div className="container mx-auto py-5 space-y-4 min-h-[95dvh]  flex flex-col justify-center items-center m-20">
        <h2 className="text-center text-5xl font-bold text-darkGreen mb-4">
          Edit Property
        </h2>
        <div className=" w-full  rounded-3xl min-h-[550px] border-2 py-5  mx-auto px-7 bg-white drop-shadow-2xl">
          <div className="flex flex-col justify-between min-h-[500px] space-y-5">
            <div className="flex flex-col space-y-4 justify-between">
              {/* {propertyDetils && ( */}
              <div className="space-y-10 mb-5">
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
                {/* <Gallery
                propertyDetils={propertyDetils}
                setData={setPropertyDetils}
              /> */}
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
              </div>
              {/* )} */}
            </div>

            <div className="flex justify-center  items-center gap-5 ">
              <button
                onClick={handleSubmit}
                disabled={isLading}
                className="bg-lightGreen rounded-xl py-1 text-2xl sm:py-2 text-white font-medium w-full md:w-[50%] focus:outline-lightOrangeHover text-center"
              >
                {isLading ? "Submit.." : "submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    push("/");
    return (
      <div className="grid place-items-center h-screen">
        <p>You Don't Have Access</p>
      </div>
    );
  }
  // console.log(propertyDetils?.user?._id === propertyDetils?.user?._id);
  // console.log("64f5c9e0ad0e98d8a55a4954" === "64f5c9e0ad0e98d8a55a4954");
};

export default EditProp;
