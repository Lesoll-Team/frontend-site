import UserData from "./userInfo/UserData";
import UserProperties from "./UserProperties";

const UserDetails = () => {
  return (
    <div className="sm:max-w-[1800px] px-3 sm:px-2 mx-auto my-3 space-y-5">
      <UserData />
      <UserProperties />
    </div>
  );
};
export default UserDetails;
