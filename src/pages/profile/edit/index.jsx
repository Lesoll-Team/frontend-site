import { useEffect } from "react";
import ProfileLayout from "../ProfileLayout";
import { useRouter } from "next/router";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import ProfileHeader from "@/components/newProfile/user/ProfileHeader";

const index = () => {
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
    <ProfileLayout hideHeader={false}>{/* <ProfileHeader /> */}</ProfileLayout>
  );
};
export default index;
