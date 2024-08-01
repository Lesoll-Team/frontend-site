import { useState } from "react";
import { useSelector } from "react-redux";
import Accordion from "./Accordion";

const FuelTypeAccordion = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [selectedCarsFuel, setSelectedCarsFuel] = useState([]);

  const carFuelTypes = [
    {
      id: 1,
      nickname: "sedan",
      name: "بنزين",
    },
    {
      id: 2,
      nickname: "hatchback",
      name: "غاز طبيعي",
    },
    {
      id: 3,
      nickname: "suv",
      name: "ديزل",
    },
    {
      id: 4,
      nickname: "coupe",
      name: "هجين",
    },
    {
      id: 5,
      nickname: "van",
      name: "كهرباء",
    },
  ];

  const handleSelect = (nickname) => {
    setSelectedCarsFuel((prevSelected) =>
      prevSelected.includes(nickname)
        ? prevSelected.filter((carNickname) => carNickname !== nickname)
        : [...prevSelected, nickname],
    );
  };
  return (
    <Accordion title={language ? "نوع الوقود" : "Fuel type"}>
      <div className=" p-2">
        <div className="h-64 overflow-y-auto">
          {carFuelTypes.map((fuel) => (
            <div key={fuel.id} className="flex items-center m-3 gap-3">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedCarsFuel.includes(fuel.nickname)}
                onChange={() => handleSelect(fuel.nickname)}
              />

              <span className="">{fuel.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Accordion>
  );
};
export default FuelTypeAccordion;
