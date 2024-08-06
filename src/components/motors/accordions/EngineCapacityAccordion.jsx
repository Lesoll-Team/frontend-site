import { useState } from "react";
import Accordion from "./Accordion";
import { useSelector } from "react-redux";

const EngineCapacityAccordion = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [selectedCarsFuel, setSelectedCarsFuel] = useState([]);
  const carFuelTypes = [
    {
      id: 1,
      nickname: "sedan",
      name: "من 800 الى 1200",
    },
    {
      id: 2,
      nickname: "hatchback",
      name: "من 1300 الى 1400",
    },
    {
      id: 3,
      nickname: "suv",
      name: "من 1500 الى 1600",
    },
    {
      id: 4,
      nickname: "coupe",
      name: "من 1800 الى 2000",
    },
    {
      id: 5,
      nickname: "van",
      name: "من 2200 الى 3000",
    },
    {
      id: 6,
      nickname: "coupe3",
      name: "اكثر من 3000",
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
    <Accordion title={language ? "سعة المحرك" : "Engine capacity"}>
      <div className="">
        <div className="h-[230px] overflow-y-auto">
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
export default EngineCapacityAccordion;
