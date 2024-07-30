import { carBrands } from "@/components/add-motor/data/carsBrands";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/addMoto.module.css";
import NoItems from "@/components/newProfile/user/userProperties/NoItems";
import ItemSearch from "../../ui/itemSearch";
import StepContainer from "../../ui/StepContainer";
const { customScrollbar } = styles;
const CarBrandStep = () => {
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
        placeholder={language ? "ابحث بواسطة الماركة" : "Search by brand"}
        setValue={setSearch}
        value={search}
      />
      <div
        className={`grid grid-cols-2 xl:grid-cols-4  gap-5 rounded   max-h-[60vh] px-2 overflow-y-auto ${customScrollbar} `}
      >
        {filterdCars.length > 0 ? (
          filterdCars.map((car) => {
            return (
              <button className="w-full flex flex-col items-center md:justify-center justify-start p-2 py-3 md:p-6  gap-3 rounded bg-white">
                <Image
                  width={100}
                  height={100}
                  src={car.image}
                  className="w-full  object-cover"
                />
                <p className="text-center"> {language ? car.ar : car.en}</p>
              </button>
            );
          })
        ) : (
          <div className="col-span-full h-[50dvh] grid place-content-center ">
            <NoItems title={language ? "لا توجد نتائج " : "No results"} />
          </div>
        )}
      </div>
    </StepContainer>
  );
};

export default CarBrandStep;
