import ProfileLayout from "../ProfileLayout";
import MySubscriptions from "@/components/newProfile/user/MySubscriptions/MySubscriptions";
// import MySubscriptions from "@/components/newProfile/user/MySubscriptions";
// import UserProperties from "@/components//UserProperties";

const index = () => {
  return (
    <ProfileLayout>
      <MySubscriptions />
    </ProfileLayout>
  );
};
export default index;
