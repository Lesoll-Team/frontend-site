import RealtyCard from "../realtyCard/RealtyCard";
const DraftAds = () => {
  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-lightGreen text-4xl">Drafts</h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
        <RealtyCard />
        <RealtyCard />
        <RealtyCard />
        <RealtyCard />
        <RealtyCard />
      </div>
    </div>
  );
};
export default DraftAds;
