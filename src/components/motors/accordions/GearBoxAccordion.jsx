import { useSelector } from "react-redux";
import Accordion from "./Accordion";
import { TbAutomaticGearbox } from "react-icons/tb";
import { GrManual } from "react-icons/gr";
import { useState } from "react";

const GearBoxAccordion = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [gearBox, setGearBox] = useState("");

  return (
    <Accordion title={language ? "ناقل الحركة" : "Transmission"}>
      <div className="grid grid-cols-3 py-4 gap-2 px-4">
        <button
          onClick={(e) => setGearBox("")}
          className="hover:shadow-small  rounded-sm sm-text border p-1 text-[#666666] flex items-center justify-around"
        >
          {language ? "الكل" : "All"}
        </button>
        <button
          onClick={(e) => setGearBox("manual")}
          className={`${gearBox === "manual" ? "text-lightGreen font-semibold border-lightGreen border-1 " : "text-[#666666]"} hover:shadow-small  rounded-sm sm-text border p-1 flex items-center justify-around`}
        >
          <GrManual className="text-lg " />
          {language ? "مانيوال" : "Manual"}
        </button>
        <button
          onClick={(e) => setGearBox("automatic")}
          className={`${gearBox === "automatic" ? "text-lightGreen font-semibold border-lightGreen border-1 " : "text-[#666666]"} hover:shadow-small  rounded-sm border sm-text p-1 flex items-center justify-around`}
        >
          <TbAutomaticGearbox className="text-lg " />
          {language ? "اوتوماتيك" : "Automatic"}
        </button>
      </div>
    </Accordion>
  );
};
export default GearBoxAccordion;
