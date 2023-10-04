import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import EditProp from "@/components/editproperty/EditProp";
import { GetEditAds } from "@/utils/propertyAPI";
// import EditProp from "@/components/editProperty/EditProp";
// import EditProp from '@/components/editProperty/EditProp'
const EditProperty = () => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const router = useRouter();
  const [propData, setPropData] = useState("");
  const propertyId = router.query.id;
  const getProperty = async () => {
    const data = await GetEditAds(propertyId);
    setPropData(data);
  };
  useEffect(() => {
    if (propertyId) {
      getProperty();
    }
  }, [propertyId]);
  // console.log(propData);
  //   console.log(userInfo._id);
  return (
    <div>
      {/* EditProperty {propertyId}
      <p>{JSON.stringify(propData)}</p> */}
      {/* <EditProperty/> */}
      {/* <EditProp propData={propData} /> */}
      <EditProp propData={propData} setPropData={setPropData} />
    </div>
  );
};

export default EditProperty;
