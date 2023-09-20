import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import EditProp from "@/components/editproperty/EditProp";
// import EditProp from "@/components/editProperty/EditProp";
// import EditProp from '@/components/editProperty/EditProp'
const EditProperty = () => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const router = useRouter();
  const [propData, setPropData] = useState("");
  const propertyId = router.query.id;
  const getProperty = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/property/get/property/singlepage/${propertyId}`
      )
      .then((res) => {
        setPropData(res.data.find);
      });
  };
  useEffect(() => {
    if (propertyId) {
      getProperty();
      // console.log(propData);
      // console.log(propData?.user?._id);
      // console.log(userInfo?._id);
      // setTimeout(() => {
      //   if (userInfo?._id !== propData?.user?._id) {
      //     console.log("not");
      //     router.push("/");
      //   }
      // }, 1000);
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
