import AddProperty from "@/components/newAddProperty/AddProperty";
import { getSingleDraft } from "@/components/newAddProperty/apis/addEditPropertyApis";
import { Ring } from "@uiball/loaders";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [data, setData] = useState(null);
  const [apiStatus, setApiStatus] = useState("idle");
  const [serverError, setServerError] = useState("idle");
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    if (id && !data) {
      getSingleDraft({ setData, setApiStatus, setServerError, id });
    }
  }, [router]);
  return (
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
        <link rel="canonical" href={`https://lesoll.com/add-property`} />
      </Head>
      {apiStatus === "success" ? (
        <AddProperty propData={data.data} />
      ) : (
        <div className="w-full min-h-[90dvh] flex justify-center items-center">
          <Ring size={35} color="#000" />
        </div>
      )}
    </>
  );
};

export default Index;
