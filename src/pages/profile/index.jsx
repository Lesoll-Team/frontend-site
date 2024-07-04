import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import ProfileLayout from "./ProfileLayout";
import AllDataForm from "@/components/newProfile/user/editUserDataForms/AllDataForm";
import ProfileLinks from "@/components/newProfile/user/ProfileLinks";
import CompanyInfoForm from "@/components/newProfile/user/editUserDataForms/CompanyInfoForm";
import { useUser } from "@/Shared/UserContext";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLangBoolean } from "@/utils/getLangBoolean";
const ProfilePage = () => {
  const router = useRouter();
  const { data, status } = useUser();

  const language = getLangBoolean();
  const isCompany = data?.typeOfUser === "company";
  useEffect(() => {
    if (status === "failed") {
      router.push("/");
    }
  }, [status]);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>{language ? "الصفحة الشخصية" : "Profile"}</title>
        <meta name="description" content="الصفحة الشخصية" />
        <link rel="canonical" href={`https://lesoll.com/profile`} />
      </Head>

      {data ? (
        <ProfileLayout hideHeader={false}>
          {isCompany ? (
            <CompanyInfoForm main={true} />
          ) : (
            <AllDataForm main={true} />
          )}
          <ProfileLinks main={true} />
        </ProfileLayout>
      ) : (
        <div className="w-full flex justify-center items-center h-screen ">
          <b> You not have access...</b>
        </div>
      )}
    </>
  );
};
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default ProfilePage;
