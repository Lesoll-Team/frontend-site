import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import AddPropInput from "../../AddPropIputs/AddPropInput";
import AddPropCheck from "../../AddPropIputs/AddPropCheck";
import AddPropDropdown from "../../AddPropIputs/AddPropDropdown";

const PropertyInfo = () => {
  const [finishingOptions, setFinishingOptions] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathRooms, setBathRooms] = useState("");
  const [finishingOptionsMenu, setFinishingOptionsMenu] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [registerd, setRegisterd] = useState(false);

  const handleFinishingOptions = () => {
    setFinishingOptionsMenu(!finishingOptionsMenu);
  };
  const finishingOptionsButtonRef = useRef(null); // Ref for the finishing options button

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        finishingOptionsButtonRef.current &&
        !finishingOptionsButtonRef.current.contains(event.target)
      ) {
        setFinishingOptionsMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className=" w-full mx-auto px-8 md:px-8 my-8   ">
      <h3 className="text-lg md:text-2xl text-darkGreen font-bold mb-3  ">
        Property Info
      </h3>
      <div className="flex flex-col  gap-3  md:gap-5 md:flex-row justify-between items-start">
        <div className=" w-full md:w-[48%] space-y-5">
          <AddPropInput
            title={"Area"}
            placeholder={"Area"}
            type={"number"}
            value={area}
            setValue={setArea}
          />
          <AddPropInput
            title={"Number of rooms"}
            placeholder={"Number of rooms"}
            type={"number"}
            value={rooms}
            setValue={setRooms}
          />
          <AddPropInput
            title={"Number of bathrooms"}
            placeholder={"Number of batrooms"}
            type={"number"}
            value={bathRooms}
            setValue={setBathRooms}
          />
        </div>
        <div className="  w-full md:w-[48%] space-y-5">
          <AddPropDropdown
            title={"Finishing Options"}
            options={["Residential", "Commercial", "Land"]}
            value={finishingOptions}
            setValue={setFinishingOptions}
          />

          <AddPropCheck
            title={"Furnished"}
            value={furnished}
            setValue={setFurnished}
          />
          <AddPropCheck
            title={"Registerd"}
            value={registerd}
            setValue={setRegisterd}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
