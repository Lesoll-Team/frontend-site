import AddMotor from "@/components/add-motor/AddMotor";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="min-h-[90dvh] container mx-auto py-10">
      <Head>
        <title>
          {language
            ? "اضف سيارتك مع ليسول | موقع مخصص لبيع وايجار العقارات والسيارات في مصر"
            : "Add car with Lesoll dedicated to selling and renting real estate and cars"}
        </title>
        <meta name="robots" content="noindex, nofollow" />

        <meta
          name="description"
          content="اضف عقارك مع ليسول، فحن متخصصون في بيع وايجار جميع أنواع العقارات، شقق للبيع، شقق للايجار، اراضي للبيع والايجار، محلات للبيع والايجار، شقق دوبلكس"
        />
        <link rel="canonical" href={`https://lesoll.com/add-motor`} />
      </Head>
      <AddMotor />
    </div>
  );
};

export default index;
