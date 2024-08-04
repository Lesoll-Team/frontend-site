// import { carBrands } from "@/components/add-motor/data/carsBrands";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/addMoto.module.css";
import NoItems from "@/components/newProfile/user/userProperties/NoItems";
import ItemSearch from "../../ui/itemSearch";
import StepContainer from "../../ui/StepContainer";
import BrandCard from "./BrandCard";
import ScrollableContainer from "../../ui/ScrollableContainer";
import RenderBrandsSkeleton from "./RenderBrandsSkeleton";
const { customScrollbar } = styles;
const CarBrandStep = () => {
  const [search, setSearch] = useState("");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const carBrands = useSelector((state) => state.carBrands.brands);
  const filterdCars = carBrands?.filter((item) => {
    if (
      item.ar
        .trim()
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase().trim()) ||
      item.en
        .trim()
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase().trim())
    ) {
      return item;
    }
  });
  return (
    <StepContainer className={"space-y-10"}>
      <ItemSearch
        disabled={!carBrands}
        placeholder={language ? "ابحث بواسطة الماركة" : "Search by brand"}
        setValue={setSearch}
        value={search}
      />

      <ScrollableContainer
        className={"grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"}
      >
        {carBrands ? (
          filterdCars.length > 0 ? (
            filterdCars.map((car) => {
              return <BrandCard car={car} key={car.ar} />;
            })
          ) : (
            <div className="col-span-full h-[50dvh] grid place-content-center ">
              <NoItems title={language ? "لا توجد نتائج " : "No results"} />
            </div>
          )
        ) : (
          <RenderBrandsSkeleton />
        )}
      </ScrollableContainer>
    </StepContainer>
  );
};

export default CarBrandStep;
