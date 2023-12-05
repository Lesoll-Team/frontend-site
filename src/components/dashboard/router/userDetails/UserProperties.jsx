import PropertyCard from "./PropertyCard";

const UserProperties = () => {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-3 items-center gap-5 justify-center">
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
  );
};
export default UserProperties;
