import Userdata from "./UserData";
import UserProperties from "./UserProperties";
// import AboutUser from "./AboutUser";

const ViewProfile = ({ userData, totalProperties, propertiesNums }) => {
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
