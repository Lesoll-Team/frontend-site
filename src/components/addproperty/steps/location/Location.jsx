import React, { useState } from "react";
import AddPropInput from "../../AddPropIputs/AddPropInput";
import FormControlBtns from "../../FormControlBtns";

const Location = () => {
  const [location, setLocation] = useState("");
  const [governrate, setGovernrate] = useState("");
  const [region, setRegion] = useState("");

  const handleLocationChange = (newLocation) => {
    setLocation((prevData) => ({
      ...prevData,
      price: newLocation,
    }));
  };
  return (
    <div className="w-full min-h-[450px] mx-auto px-6 md:px-8 my-5 space-y- flex flex-col justify-between">
      <div>
        <h3 className="text-lg md:text-2xl text-darkGreen font-bold mb-1">
          Location
        </h3>
        <div className="grid md:grid-cols-2  gap-4 justify-between">
          <div className="space-y-4">
            <AddPropInput
              className="w-"
              placeholder={"Property location"}
              value={location}
              setValue={setLocation}
            />
            <AddPropInput
              title={"governrate"}
              placeholder={"governrate"}
              value={governrate}
              setValue={setGovernrate}
            />
            <AddPropInput
              title={"Region"}
              placeholder={"Region"}
              value={region}
              setValue={setRegion}
            />
          </div>
          <div className="w-full  overflow-hidden">
            <img
              className="rounded-xl h-full"
              src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1600,c_limit/GoogleMapTA.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="-mb-6 mt-5">
        <FormControlBtns canGoNext={true} />
      </div>
    </div>
  );
};

export default Location;
