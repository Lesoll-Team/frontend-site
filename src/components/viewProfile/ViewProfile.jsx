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
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <main className={`space-y-5 mx-5 lg:mx-28 `}>
      <Userdata userData={userData} totalProperties={totalProperties} />
      <AboutUser totalProperties={totalProperties} userData={userData} />
      <UserProperties
        userData={userData}
        totalProperties={totalProperties}
        propertiesData={propertiesData}
        totalPages={totalPages}
        setPage={setPage}
      />
    </main>
  );
};

export default ViewProfile;
