import { createNeed } from "@/utils/propertyAPI";
import { useState } from "react";
import MainData from "./sections/MainData";

const NeedsForm = () => {
  const [needsData, setNeedsData] = useState({
    offer: "For Sale",
    unitType: "63cc933946d6193aa1f50f95",
    saleOption: "Cash",
    rentalPeriod: "",
    rooms: 2,
    bathrooms: 1,
    governrate: "63be6b362518e5f7360e3d73",
    region: "63ebac546472f4aa4879ee2f",
    price: {
      from: 30,
      to: 60,
    },
    area: {
      from: 100,
      to: 200,
    },
  });
  const handlePostNeed = async (e) => {
    e.preventDefault();

    // console.log(formData.getAll());
    try {
      await createNeed(needsData);
    } catch (error) {
      return error.data;
    }
  };
  return (
    <div className="container mx-auto">
      <MainData needData={needsData} setNeedData={setNeedsData} />
      <button onClick={handlePostNeed}>check needs</button>
    </div>
  );
};
export default NeedsForm;
