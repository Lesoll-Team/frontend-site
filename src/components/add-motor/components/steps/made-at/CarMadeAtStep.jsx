import React, { useState } from "react";
import { useSelector } from "react-redux";
import NoItems from "@/components/newProfile/user/userProperties/NoItems";
import ItemSearch from "../../ui/itemSearch";
import StepContainer from "../../ui/StepContainer";
import { carMadeAtYears } from "@/components/add-motor/data/madeAtYears";
import YearCard from "./YearCard";
import ScrollableContainer from "../../ui/ScrollableContainer";
import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import SelectCard from "../SelectCard";

const CarMadeAtStep = () => {
  const { setValue, clearErrors, formSubmit, loading } = useAddMotorContext();

  const [search, setSearch] = useState("");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const filteredYears = carMadeAtYears.filter((item) => {
    const trimmedSearch = search.toLowerCase().trim();
    if (trimmedSearch === "") {
      return true; // Return all items if the search term is empty
    }
    return item.toLowerCase().trim().startsWith(trimmedSearch);
  });

  const handleSelect = (year) => {
    setValue("usedSince", year);
    clearErrors("usedSince");
    formSubmit();
  };
  return (
    <StepContainer className={"space-y-10"}>
      <ItemSearch
        placeholder={language ? "ابحث بواسطة السنة" : "Search by year"}
        setValue={setSearch}
        value={search}
      />
      <ScrollableContainer>
        {filteredYears.length > 0 ? (
          filteredYears.map((year) => {
            return (
              <SelectCard
                key={year}
                disabled={loading}
                handleSelect={() => handleSelect(year)}
              >
                <p>{year}</p>
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

export default CarMadeAtStep;
