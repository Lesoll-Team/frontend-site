import { useEffect } from "react";
import ProfileLayout from "../ProfileLayout";
import { useRouter } from "next/router";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import ProfileHeader from "@/components/newProfile/user/ProfileHeader";
import AllDataForm from "@/components/newProfile/user/editUserDataForms/AllDataForm";
import useIsAuth from "@/Hooks/useIsAuth";

const index = () => {
  const { isAuth } = useIsAuth();
  const { windowWidth } = useWindowWidth();
  const router = useRouter();
  //   useEffect(() => {
  //     if (windowWidth) {
  //       if (windowWidth > 768) {
  //         router.push(`/profile`);
  //       }
  //     }
  //   }, [windowWidth]);
  return (
    <ProfileLayout hideHeader={true}>
      <AllDataForm />
    </ProfileLayout>
  );
};
export default index;
