import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetEditAds } from "@/utils/propertyAPI";
import { DotPulse } from "@uiball/loaders";
import EditProperty from "@/components/edit-property/EditProperty";
const EditPropertyPage = () => {
  const router = useRouter();
  const [propData, setPropData] = useState("");
  const propertyId = router.query.id;
  const getProperty = async () => {
    const data = await GetEditAds(propertyId);
    setPropData(data);
  };
  useEffect(() => {
    if (propertyId && !propData) {
      getProperty();
    }
  }, [propertyId]);

  return (
    <div>
      {propData ? (
        <EditProperty propData={propData} />
      ) : (
        <div className="h-[90vh] flex items-center justify-center">
          <DotPulse size={60} speed={1.3} color="#309da0" />
        </div>
      )}
    </div>
  );
};

export default EditPropertyPage;

// import { useSelector } from "react-redux";
// import EditProp from "@/components/editproperty/EditProp";
// import AddProperty from "@/components/newAddProperty/AddProperty";
// import { formatApiData } from "@/components/edit-property/fromateApiData";
// import EditProp from "@/components/editProperty/EditProp";
// import EditProp from '@/components/editProperty/EditProp'
// const userInfo = useSelector((state) => state.userProfile.userData);
