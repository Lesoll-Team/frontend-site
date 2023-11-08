import { useSelector } from "react-redux";
import Userdata from "./UserData";
import UserProperties from "./UserProperties";

const ViewProfile = ({
  userData,
  propertiesData,
  totalProperties,
  totalPages,
  setPage,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <main className={`space-y-10  my-8`}>
      <Userdata userData={userData} totalProperties={totalProperties} />
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
