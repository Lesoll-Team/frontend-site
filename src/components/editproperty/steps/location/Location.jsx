import { useEffect } from "react";
import MapComp from "./MapComp";
import { useSelector } from "react-redux";

const Location = ({ propertyDetils, setData, propErrors, setPropErrors }) => {
  useEffect(() => {
    if (propertyDetils?.address?.name) {
      setPropErrors((prevErrors) => ({ ...prevErrors, address: false }));
    }
  }, [propertyDetils?.address?.name]);
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-4">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "موقع العقار" : "Property Location"}
      </h3>
      <p className="text-xl font-medium">{propertyDetils?.address?.name}</p>
      <MapComp
        propErrors={propErrors}
        setPropErrors={setPropErrors}
        propertyDetils={propertyDetils}
        setData={setData}
      />
    </div>
  );
};

export default Location;
