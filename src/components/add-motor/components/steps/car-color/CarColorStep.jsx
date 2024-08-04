import { carBrands } from "@/components/add-motor/data/carsBrands";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/addMoto.module.css";
import NoItems from "@/components/newProfile/user/userProperties/NoItems";
import ItemSearch from "../../ui/itemSearch";
import StepContainer from "../../ui/StepContainer";
import { carColors } from "@/components/add-motor/data/carColors";
import ScrollableContainer from "../../ui/ScrollableContainer";
import CarColorCard from "./CarColorCard";
const { customScrollbar } = styles;
const CarColorStep = () => {
  const [search, setSearch] = useState("");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const filterdColors = carColors.filter((item) => {
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
        placeholder={language ? "ابحث بواسطة اللون" : "Search by color"}
        setValue={setSearch}
        value={search}
      />
      <ScrollableContainer>
        {filterdColors.length > 0 ? (
          filterdColors.map((color, index, allColors) => {
            const last = index + 1 === allColors.length;

            return <CarColorCard color={color} last={last} key={color.ar} />;
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

export default CarColorStep;
