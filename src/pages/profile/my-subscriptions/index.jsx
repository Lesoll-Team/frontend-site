import { useRouter } from "next/router";
import ProfileLayout from "../ProfileLayout";
import useIsAuth from "@/Hooks/useIsAuth";
import MySubscriptions from "@/components/newProfile/user/my-subscriptions/MySubscriptions";
// import UserProperties from "@/components//UserProperties";

const index = ({}) => {
  const IsAuth = useIsAuth();
  const router = useRouter();

  return (
    <ProfileLayout>
      <MySubscriptions />
    </ProfileLayout>
  );
};
export default index;
