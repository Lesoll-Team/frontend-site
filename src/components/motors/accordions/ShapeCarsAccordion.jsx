import { useState } from "react";
import Accordion from "./Accordion";
import { useSelector } from "react-redux";
import Image from "next/image";

const ShapeCarsAccordion = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [selectedCars, setSelectedCars] = useState([]);

  const carTypes = [
    {
      id: 1,
      nickname: "sedan",
      name: "سيدان",
      count: 20,
      icon: "/motors/sedan.png",
    },
    {
      id: 2,
      nickname: "hatchback",
      name: "هاتشباك",
      count: 20,
      icon: "/motors/hatchback.png",
    },
    { id: 3, nickname: "suv", name: "SUV", count: 20, icon: "/motors/suv.png" },
    {
      id: 4,
      nickname: "coupe",
      name: "كوبيه",
      count: 20,
      icon: "/motors/coupe.png",
    },
    { id: 5, nickname: "van", name: "فان", count: 20, icon: "/motors/van.png" },
    {
      id: 6,
      nickname: "station",
      name: "ستيشن",
      count: 20,
      icon: "/motors/station.png",
    },
    {
      id: 7,
      nickname: "cabriolet",
      name: "كابورليه",
      count: 20,
      icon: "/motors/cabriolet.png",
    },
    {
      id: 8,
      nickname: "pickup",
      name: "بيك أب",
      count: 20,
      icon: "/motors/pickup.png",
    },
  ];

  const handleSelect = (nickname) => {
    setSelectedCars((prevSelected) =>
      prevSelected.includes(nickname)
        ? prevSelected.filter((carNickname) => carNickname !== nickname)
        : [...prevSelected, nickname],
    );
  };
  return (
    <Accordion title={language ? "هيكل السيارة" : "Shape car"}>
      <div className=" p-4">
        <div className="h-64 overflow-y-auto">
          {carTypes.map((car) => (
            <div key={car.id} className="flex items-center m-4 gap-3">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedCars.includes(car.nickname)}
                onChange={() => handleSelect(car.nickname)}
              />
              <Image
                src={car.icon}
                alt={`${car.name} icon`}
                width={70}
                height={70}
                className="w-auto h-auto"
                loading="lazy"
              />
              <span className="">{car.name}</span>
              <span className="text-gray-500 -mx-2.5">({car.count})</span>
            </div>
          ))}
        </div>
      </div>
    </Accordion>
  );
};

export default ShapeCarsAccordion;
