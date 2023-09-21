import React from "react";
import RealtyCard from "../realtyCard/RealtyCard";
import { Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import CompareDetails from "./CompareDetails";
function CompareCards() {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="container mx-auto justify-center gap-3 px-5 flex overflow-x-auto ">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Button color="danger" className="font-bold text-white">{language?"إزالة":"delete"}</Button>
        </div>
        <RealtyCard />
        <CompareDetails />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div>
          <Button color="danger" className="font-bold text-white">{language?"إزالة":"delete"}</Button>
        </div>
        <RealtyCard />
        <CompareDetails />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div>
          <Button color="danger" className="font-bold text-white">{language?"إزالة":"delete"}</Button>
        </div>
        <RealtyCard />
        <CompareDetails />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div>
          <Button color="danger" className="font-bold text-white">{language?"إزالة":"delete"}</Button>
        </div>
        <RealtyCard />
        <CompareDetails />
      </div>



    </div>
  );
}

export default CompareCards;
