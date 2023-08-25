
import React, { memo } from "react";
import ConfirmAppointment from "./ConfirmAppointment";
import PropertyTitle from "./PropertyTitle";
import PropertyImgSlider from "./PropertySlider";
import OverviewDetails from "./OverviewDetails";
import AddressLocation from "./AddressLocation";
import SimilarListings from "./SimilarListings";
import DescriptionFeatures from "./DescriptionFeatures";

function PropertyDetailsMain({singleProperty}) {

  return (
    <div className="container mx-auto">
      <div>
        <PropertyTitle singleTitle={singleProperty}/>

      </div>
      <div className="lg:grid grid-cols-3">
        <div className="col-span-2 ">
          <PropertyImgSlider className="col-span-2" />
        </div>
        <div className="col-span-1 ">
          <ConfirmAppointment className="" />
        </div>
      </div>

      <div>
        <div className="mb-10">
          <OverviewDetails  singleOverviewDetails={singleProperty}/>
        </div>
        <div className="mb-10">
          <DescriptionFeatures singleDescriptionFeatures={singleProperty}/>
        </div>
        <div className="mb-10">
          <AddressLocation singleAddressLocation={singleProperty}/>
        </div>
      </div>
      <div>
        <SimilarListings />
      </div>
    </div>
  );
}
export default memo(PropertyDetailsMain);
