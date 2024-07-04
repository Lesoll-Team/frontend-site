import { useEffect } from "react";
import ProfileLayout from "../ProfileLayout";
import { useRouter } from "next/router";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import AllDataForm from "@/components/newProfile/user/editUserDataForms/AllDataForm";
import useIsAuth from "@/Hooks/useIsAuth";
import CompanyInfoForm from "@/components/newProfile/user/editUserDataForms/CompanyInfoForm";
// import { useSelector } from "react-redux";
import { useUser } from "@/Shared/UserContext";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index = () => {
  const { data } = useUser();
  useIsAuth();
  const { windowWidth } = useWindowWidth();
  const router = useRouter();
  useEffect(() => {
    if (windowWidth) {
      if (windowWidth > 768) {
        router.push(`/profile`);
      }
    }
  }, [windowWidth]);
  const isCompany = data?.typeOfUser === "company";
  return (
    <ProfileLayout hideHeader={true}>
      {isCompany ? <CompanyInfoForm /> : <AllDataForm />}
    </ProfileLayout>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default Index;
