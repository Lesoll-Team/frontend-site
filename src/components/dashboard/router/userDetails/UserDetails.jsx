import PropertyCard from "./PropertyCard";
import UserData from "./UserData";

const UserDetails = () => {
  return (
    <div className="sm:container px-3 sm:px-2 mx-auto my-3">
      <UserData />
      <PropertyCard />
    </div>
  );
};
export default UserDetails;
