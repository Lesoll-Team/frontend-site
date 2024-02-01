import AddProperty from "@/components/addproperty/AddProperty";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import UserTypeForm from "@/components/addproperty/userTypeForm/UserTypeForm";
import NotSignedScreen from "@/components/addproperty/NotSignedScreen";
const Index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userInfo = useSelector((state) => state.GlobalState.userData);

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
        <link rel="canonical" href={`https://lesoll.com/sell`} />
      </Head>
      {userInfo &&
        (userInfo?.typeOfUser !== "normal" ? (
          <AddProperty />
        ) : (
          <UserTypeForm />
        ))}
      {!userInfo && <NotSignedScreen />}
    </>
  );
};

export default React.memo(Index);
