import React, { useState } from "react";
import { useSelector } from "react-redux";
import NoItems from "@/components/newProfile/user/userProperties/NoItems";
import ItemSearch from "../../ui/itemSearch";
import StepContainer from "../../ui/StepContainer";
import ModalCard from "./ModalCard";
import ScrollableContainer from "../../ui/ScrollableContainer";
import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import SelectCard from "../SelectCard";
const CarModalStep = () => {
  const { watch, setValue, clearErrors, formSubmit, loading } =
    useAddMotorContext();
  const [search, setSearch] = useState("");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const carModels = useSelector((state) => state.brandModels.models);

  const brandModels = carModels?.filter(
    (item) => item.carNumber == watch("brand").number,
  );
  const filterdCars = brandModels?.filter((item) => {
    if (
      item.ar
        .toLocaleLowerCase()
        .trim()
        .includes(search.toLocaleLowerCase().trim()) ||
      item.en
        .toLocaleLowerCase()
        .trim()
        .includes(search.toLocaleLowerCase().trim())
    ) {
      return item;
    }
  });
  const handleSelect = (car) => {
    setValue("model", car);
    clearErrors("model");
    formSubmit();
  };
  return (
    <StepContainer className={"space-y-10"}>
      <ItemSearch
        placeholder={language ? "ابحث بواسطة النوع" : "Search by model"}
        setValue={setSearch}
        value={search}
      />
      <ScrollableContainer>
        {filterdCars.length > 0 ? (
          filterdCars.map((car) => {
            return (
              <SelectCard
                key={car.en}
                disabled={loading}
                handleSelect={() => handleSelect(car)}
              >
                {language ? car.ar : car.en}
              </SelectCard>
            );
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
