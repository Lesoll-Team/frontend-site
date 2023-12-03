import { useSelector } from "react-redux";
import Userdata from "./UserData";
import UserProperties from "./UserProperties";
import AboutUser from "./AboutUser";

const ViewProfile = ({
  userData,
  propertiesData,
  totalProperties,
  totalPages,
  setPage,
  propertiesNums,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  console.log(propertiesData);
  return (
    <main className={`space-y-5 mx-5 lg:mx-28 `}>
      <Userdata userData={userData} totalProperties={totalProperties} />
      {/* <AboutUser
        propertiesNums={propertiesNums}
        totalProperties={totalProperties}
        userData={userData}
      /> */}
      <UserProperties propertiesNums={propertiesNums} />
    </main>
  );
};

export default ViewProfile;
