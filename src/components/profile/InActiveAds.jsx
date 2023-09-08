import ProfileCard from "./realtyCards/ProfileCard";
const InActiveAds = () => {
  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-lightGreen text-4xl">
        InActive Ads
      </h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
        <ProfileCard type="inactive" />
      </div>
    </div>
  );
};
export default InActiveAds;
