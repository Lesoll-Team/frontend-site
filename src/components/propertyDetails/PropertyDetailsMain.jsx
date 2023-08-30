
import React, { memo } from "react";
import ConfirmAppointment from "./ConfirmAppointment";
import PropertyTitle from "./PropertyTitle";
import PropertyImgSlider from "./PropertySlider";
import OverviewDetails from "./OverviewDetails";
import AddressLocation from "./AddressLocation";
import SimilarListings from "./SimilarListings";
import DescriptionFeatures from "./DescriptionFeatures";
import {ar} from "../../language/ar/common"
import {en} from "../../language/en/common"
function PropertyDetailsMain({singleProperty}) {

  console.log(singleProperty);
const images = [
  { url: 'https://demo01.houzez.co/wp-content/uploads/2016/03/035-1170x785.jpg' },
  { url: '/card.png' },
  { url: 'https://demo01.houzez.co/wp-content/uploads/2016/03/035-1170x785.jpg' },
  // Add more image URLs here
];
  return (
    <div className="container mx-auto">
      <div>
        <PropertyTitle singleTitle={singleProperty}/>

      </div>
      <div className="lg:grid grid-cols-3 items-center">
        <div className="col-span-2 ">
          <PropertyImgSlider images={images} className="col-span-2" />
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
