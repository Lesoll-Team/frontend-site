import PropertiesCategories from "@/components/homePage/PropertiesCategories";
import Head from "next/head";

import React from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="py-10">
      <Head>
        <title>
          {language
            ? "استكشف الشقق والعقارات في مصر | ليسول"
            : "Explore apartments and properties in Egypt | Lesoll"}
        </title>
        <meta
          name="description"
          content={
            language
              ? "ابحث عن عقارات للبيع او الايجار في مصر، ابحث عن شقق او فلل او اراضي او شاليهات سواء كاش او تقسيط او تمويل عقاري في القاهرة و الجيزة والاسكندرية و جميع محافظات مصر"
              : "Search for properties for sale or rent in Egypt. Look for apartments, villas, land, or chalets, either for cash, installments, or mortgage financing in Cairo, Giza, Alexandria, and all other governorates in Egypt."
          }
        />
      </Head>
      <PropertiesCategories />
    </div>
  );
};

export default Index;
