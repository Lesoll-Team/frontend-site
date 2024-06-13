import OtherOptionPrice from "@/components/pricing/OtherOptionPrice";
// import PriceFilter from "@/components/pricing/PriceFilter";
import PriceHeader from "@/components/pricing/PriceHeader";
import PricePageBody from "@/components/pricing/PricePageBody";

const Prices = () => {
  return (
    <div className="min-h-screen">
      <PriceHeader />
      <div className=" md:container md:mx-auto mx-[20px] mt-10">
        <PricePageBody />
        <OtherOptionPrice />
      </div>
    </div>
  );
};
export default Prices;
