import React, { memo } from "react";
import UnitTypeIcons from "../shared/UnitTypeIcons";

const UnitTypesSmallScreen = () => {
  return (
    <div>
      <UnitTypeIcons />
    </div>
  );
};

export default memo(UnitTypesSmallScreen);
