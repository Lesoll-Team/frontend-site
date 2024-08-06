import { carBrands } from "@/components/add-motor/data/carsBrands";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/addMoto.module.css";
import NoItems from "@/components/newProfile/user/userProperties/NoItems";
import ItemSearch from "../../ui/itemSearch";
import StepContainer from "../../ui/StepContainer";
import ModalCard from "./ModalCard";
import ScrollableContainer from "../../ui/ScrollableContainer";
const { customScrollbar } = styles;
const CarModalStep = () => {
  const [search, setSearch] = useState("");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const filterdCars = carBrands.filter((item) => {
    if (
      item.ar.includes(search.toLocaleLowerCase().trim()) ||
      item.en.includes(search.toLocaleLowerCase().trim())
    ) {
      return item;
    }
  });
  return (
    <StepContainer className={"space-y-10"}>
      <ItemSearch
        placeholder={language ? "ابحث بواسطة النوع" : "Search by model"}
        setValue={setSearch}
        value={search}
      />
      <ScrollableContainer>
        {filterdCars.length > 0 ? (
          filterdCars.map((car, index, allCars) => {
            const last = index + 1 === allCars.length;
            return <ModalCard last={last} car={car} key={car.ar} />;
          })
        ) : (
          <div className="col-span-full h-[50dvh] grid place-content-center ">
            <NoItems title={language ? "لا توجد نتائج " : "No results"} />
          </div>
        )}
      </ScrollableContainer>
    </StepContainer>
  );
};

export default CarModalStep;
