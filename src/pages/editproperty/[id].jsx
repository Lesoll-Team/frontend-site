import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { useSelector } from "react-redux";
// import axios from "axios";
import EditProp from "@/components/editproperty/EditProp";
import { GetEditAds } from "@/utils/propertyAPI";
import { DotPulse } from "@uiball/loaders";
import AddProperty from "@/components/newAddProperty/AddProperty";
import { formatApiData } from "@/Hooks/editProperty/fromateApiData";
// import EditProp from "@/components/editProperty/EditProp";
// import EditProp from '@/components/editProperty/EditProp'
const EditProperty = () => {
  // const userInfo = useSelector((state) => state.userProfile.userData);
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

  console.log("edit data:", formatApiData(propData));
  return (
    <div>
      {/* EditProperty {propertyId}
      <p>{JSON.stringify(propData)}</p> */}
      {/* <EditProperty/> */}
      {/* <EditProp propData={propData} /> */}
      {propData ? (
        <AddProperty propData={propData} />
      ) : (
        <div className="h-[90vh] flex items-center justify-center">
          <DotPulse size={60} speed={1.3} color="#309da0" />
        </div>
      )}
    </div>
  );
};

export default EditProperty;
