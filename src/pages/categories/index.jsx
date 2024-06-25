import PropertiesCategories from "@/components/homePage/PropertiesCategories";
import { getLangBoolean } from "@/utils/getLangBoolean";
import Head from "next/head";

import React from "react";

const Index = () => {
  const language = getLangBoolean();
  return (
    <div className="py-10">
      <Head>
        <title>{language ? "ar" : "en"}</title>
      </Head>
      <PropertiesCategories language={language} />
    </div>
  );
};

export default Index;
