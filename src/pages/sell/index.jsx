// import AddProperty from "@/components/addproperty/AddProperty";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

import UserTypeForm from "@/components/addproperty/userTypeForm/UserTypeForm";
import NotSignedScreen from "@/components/addproperty/NotSignedScreen";
import AddProperty from "@/components/newAddProperty/AddProperty";
const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userInfo = useSelector((state) => state.userProfile.userData);

  return (
    // <div className="  bg-gradient-to-r from-lightGreen to-lightOrange">
    <div className=" ">
      <Head>
        <title>
          {language
            ? "اضف عقارك مع ليسول | موقع مخصص لبيع وايجار العقارات في مصر"
            : "Add property with Lesoll dedicated to selling and renting real estate"}
        </title>
        <meta
          name="description"
          content="اضف عقارك مع ليسول، فحن متخصصون في بيع وايجار جميع أنواع العقارات، شقق للبيع، شقق للايجار، اراضي للبيع والايجار، محلات للبيع والايجار، شقق دوبلكس"
        />
        <link rel="canonical" href={`https://lesoll.com/sell`} />
      </Head>
      {/* // <div className=""> */}
      {userInfo ? (
        userInfo?.typeOfUser !== "normal" ? (
          <AddProperty />
        ) : (
          <UserTypeForm />
        )
      ) : (
        <NotSignedScreen />
      )}
      {/* <AddProperty />
      ad */}
    </div>
  );
};

export default index;
