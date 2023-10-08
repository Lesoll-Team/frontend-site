import AddProperty from "@/components/addproperty/AddProperty";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    // <div className="  bg-gradient-to-r from-lightGreen to-lightOrange">
    <div className="  ">
      <Head>
        <title>{language ? "إضافة عقار" : "Add property"}</title>
        <meta name="description" content="إضافة عقار لموقع ليسول" />
      </Head>
      {/* // <div className=""> */}
      <AddProperty />
    </div>
  );
};

export default index;
