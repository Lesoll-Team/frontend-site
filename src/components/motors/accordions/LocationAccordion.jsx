import { useState } from "react";
import Accordion from "./Accordion";
import { useSelector } from "react-redux";
import styles from "../../../styles/carBrandAccordion.module.css";
const LocationAccordion = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [selectedCarsFuel, setSelectedCarsFuel] = useState([]);
  const carFuelTypes = [
    {
      id: 1,
      nickname: "sedan",
      name: "القاهرة",
      count: 83,
    },
    {
      id: 2,
      nickname: "hatchback",
      name: "الإسكندرية",
      count: 77,
    },
    {
      id: 3,
      nickname: "suv",
      name: "الجيزة",
      count: 56,
    },
    {
      id: 4,
      nickname: "coupe",
      name: "دمياط",
      count: 45,
    },
    {
      id: 5,
      nickname: "van",
      name: "الشرقية",
      count: 23,
    },
    {
      id: 6,
      nickname: "suv3",
      name: "كفر الشيخ",
      count: 56,
    },
    {
      id: 7,
      nickname: "coupe3",
      name: "مطروح",
      count: 45,
    },
    {
      id: 8,
      nickname: "van4",
      name: "المنيا",
      count: 23,
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
    <Accordion title={language ? "مكان تواجد السيارة " : "Location of the car"}>
      <div className="">
        <div className={styles.accordionScroll + " h-60 overflow-y-auto"}>
          {carFuelTypes.map((fuel) => (
            <div key={fuel.id} className="flex items-center m-3 gap-3">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedCarsFuel.includes(fuel.nickname)}
                onChange={() => handleSelect(fuel.nickname)}
              />
              <span className="">{fuel.name}</span>
              <span className="text-gray-500 -mx-2.5">({fuel.count})</span>
            </div>
          ))}
        </div>
      </div>
    </Accordion>
  );
};
export default LocationAccordion;
