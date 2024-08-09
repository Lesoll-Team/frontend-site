import React, { useState } from "react";
import { useSelector } from "react-redux";
import NoItems from "@/components/newProfile/user/userProperties/NoItems";
import ItemSearch from "../../ui/itemSearch";
import StepContainer from "../../ui/StepContainer";
import { carColors } from "@/components/add-motor/data/carColors";
import ScrollableContainer from "../../ui/ScrollableContainer";
import SelectCard from "../SelectCard";
import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";

const CarColorStep = () => {
  const { setValue, clearErrors, formSubmit, loading } = useAddMotorContext();

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
  const handleSelect = (color) => {
    setValue("carColor", color);
    clearErrors("carColor");
    formSubmit();
  };
  return (
    <StepContainer className={"space-y-10"}>
      <ItemSearch
        placeholder={language ? "ابحث بواسطة اللون" : "Search by color"}
        setValue={setSearch}
        value={search}
      />
      <ScrollableContainer>
        {filterdColors.length > 0 ? (
          filterdColors.map((color) => {
            return (
              <SelectCard
                color
                key={color.en}
                disabled={loading}
                handleSelect={() => handleSelect(color)}
              >
                <div
                  style={{
                    backgroundColor: color.code,
                  }}
                  className={`h-8 border w-8 bg-[${color.code}] rounded-full`}
                ></div>
                <p>{language ? color.ar : color.en}</p>
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

export default CarColorStep;
