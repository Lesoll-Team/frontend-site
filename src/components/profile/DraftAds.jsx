import ProfileCard from "./Cards/ProfileCard";
const DraftAds = () => {
  return (
    <div className="w-full">
      <h3 className="text-center font-bold text-lightGreen text-4xl">Drafts</h3>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
        <ProfileCard type="draft" />
      </div>
    </div>
  );
};
export default DraftAds;
