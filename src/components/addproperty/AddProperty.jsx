import React, { useState } from "react";
import bgPic from "../../../public/addpropbg.webp";

// step imports
import GetStarted from "./steps/getStarted/GetStarted";
import PropertyInfo from "./steps/propertyInfo/PropertyInfo";
import Description from "./steps/desciption/Description";
import Photos from "./steps/photos/Photos";
import Features from "./steps/features/Features";
import SellerInfo from "./steps/sellerInfo/SellerInfo";
import Location from "./steps/location/Location";
import Appointments from "./steps/appointments/Appointments";
import Review from "./steps/reviewproperty/Review";
import ListingPrice from "./steps/ListingPrice/ListingPrice";

const AddProperty = () => {
  const steps = [
    "get started",
    "property info",
    "description",
    "listing price",
    "photos",
    "features",
    "seller info",
    "location",
    "appointments",
    "review",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const renderComponent = () => {
    if (currentStep === 0) {
      return <GetStarted />;
    } else if (currentStep === 1) {
      return <PropertyInfo />;
    } else if (currentStep === 2) {
      return <Description />;
    } else if (currentStep === 3) {
      return <ListingPrice />;
    } else if (currentStep === 4) {
      return <Photos />;
    } else if (currentStep === 5) {
      return <Features />;
    } else if (currentStep === 6) {
      return <SellerInfo />;
    } else if (currentStep === 7) {
      return <Location />;
    } else if (currentStep === 8) {
      return <Appointments />;
    } else if (currentStep === 9) {
      return <Review setStep={setCurrentStep} />;
    } else {
      return <GetStarted />;
    }
  };
  return (
    <div className="min-h-[93vh] flex items-center justify-center flex-col mx-auto bg-[url(../../public/addpropbg.webp)] bg-no-repeat bg-cover">
      <div className="container mx-auto mb-10">
        <h2 className="text-white text-4xl text-center my-4 md:my-10  font-semibold">
          Add Property
        </h2>
        <div className="w-full lg:w-[80%] bg-white flex flex-col justify-between  min-h-[560px] mx-auto  rounded-[40px]  pb-6 drop-shadow-xl">
          <div>
            {/* progress bar */}
            <div className="mt-8">
              {/* <h3 className="text-center text-lg text-lightOrange font-black tracking-widest">
                {currentStep + 1}
                <span className="px-3 text-darkGreen font-thin">/</span>
                {steps.length}
              </h3> */}
              <div className="h-3 w-[83%] md:w-[93%] mx-auto border rounded-lg bg-darkGray mt-2 relative">
                <div
                  style={{
                    width: `${(currentStep / (steps.length - 1)) * 100}%`,
                  }}
                  className={`bg-lightGreen h-full duration-200 rounded-lg`}
                ></div>
              </div>
            </div>
            {/* steps */}
            <div className="mx-auto my-">{renderComponent()}</div>
          </div>

          {/* buttons */}
          {currentStep === 0 ? (
            <div className="flex justify-center">
              <button
                onClick={handleNext}
                className="bg-lightOrange text-white font-medium py-2 px-4 rounded-xl text-2xl w-[85%] md:w-96 my-5"
              >
                Get Started
              </button>
            </div>
          ) : (
            <div className="flex justify-between my-1 px-5 gap-5">
              <button
                onClick={handleBack}
                className="bg-lightOrange rounded-xl py-2 px-4 text-white font-medium w-[100px] sm:w-[140px] md:w-[160px]"
              >
                Back
              </button>
              {currentStep === steps.length - 1 ? (
                <button className="bg-lightGreen rounded-xl py-2 px-4 text-white font-medium w-[100px] sm:w-[140px] md:w-[160px]">
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="bg-lightOrange rounded-xl py-2 px-4 text-white font-medium w-[100px] sm:w-[140px] md:w-[160px]"
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
