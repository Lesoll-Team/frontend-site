import React, { useState } from "react";
import Negotiable from "./Negotiable";

import AddPropInput from "../../AddPropInput";
import AddPropCheck from "../../../../AddPropCheck";

const Cash = ({
  negotiable,
  setNegotiable,
  realEstateFinance,
  setRealEstateFinance,
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="w-full space-y-4">
      {/* negotiable checkbox */}
      <AddPropCheck
        title={"Negotiable"}
        value={negotiable}
        setValue={setNegotiable}
      />
      {/* real Estate Finance checkbox */}
      <AddPropCheck
        title={"Real Estate Finance"}
        value={realEstateFinance}
        setValue={setRealEstateFinance}
      />
      <AddPropInput
        title={"value"}
        type={"number"}
        value={value}
        setValue={setValue}
        placeholder={"value"}
        percent={true}
      />
    </div>
  );
};

export default Cash;
