import { carBrands } from "@/components/add-motor/data/carsBrands";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/addMoto.module.css";
import NoItems from "@/components/newProfile/user/userProperties/NoItems";
import ItemSearch from "../../ui/itemSearch";
const { customScrollbar } = styles;
const CarBrandStep = () => {
  const [search, setSearch] = useState("");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const filterdCars = carBrands.filter((item) => {
    if (
      item.ar.includes(search.toLocaleLowerCase()) ||
      item.en.includes(search.toLocaleLowerCase())
    ) {
      return item;
    }
  });
  return (
    <div className="bg-bgGray md:w-[75%] min-h-[70vh] mx-auto py-10 px-10 rounded space-y-5">
      <div className="md:w-[80%] mx-auto flex items-center">
        <ItemSearch
          placeholder={language ? "ابحث بواسطة الماركة" : "Search by brand"}
          setValue={setSearch}
          value={search}
        />
      </div>
      <div
        className={`grid grid-cols-2 2xl:grid-cols-4  gap-5 rounded md:w-[80%] mx-auto max-h-[68vh] px-2 overflow-y-auto ${customScrollbar} `}
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
                <p className=""> {language ? car.ar : car.en}</p>
              </button>
            );
          })
        ) : (
          <div className="col-span-full h-[50dvh] grid place-content-center ">
            <NoItems title={language ? "لا توجد نتائج " : "No results"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CarBrandStep;
