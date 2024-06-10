// import AddProperty from "@/components/addproperty/AddProperty";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

import AddProperty from "@/components/property-forms/forms/add-property/AddProperty";
const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    // <div className="  bg-gradient-to-r from-lightGreen to-lightOrange">
    <>
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
      <AddProperty />
      {/* <AddProperty />
      ad */}
    </>
  );
};

export default index;
