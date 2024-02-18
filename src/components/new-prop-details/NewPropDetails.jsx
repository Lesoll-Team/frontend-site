import PropertyImages from "./PropertyImages";
import PriceTitle from "./PriceTitle";
import PropertyOwner from "./propertyUserData/PropertyOwner";
import PropertyDetails from "./propertyDetails/PropertyDetails";

const NewPropDetails = ({ propertyData }) => {
  return (
    <div className="min-h-[50dvh] mt-10 space-y-3 md:space-y-8">
      <PropertyImages propertyData={propertyData} />
      <PriceTitle propertData={propertyData} />
      <div className="relative md:grid  grid-cols-3 gap-2">
        <div className=" col-start-3 md:sticky top-24 h-fit flex justify-end py-2">
          <PropertyOwner
            className={"w-full md:w-[85%] lg:max-w-[350px]"}
            propertyData={propertyData}
          />
        </div>
        <PropertyDetails
          className={"col-span-2 col-start-1 row-start-1 "}
          propertyData={propertyData}
        />
        {/* <div className="bg-red-400  ">
          da
        </div> */}
      </div>
    </div>
  );
};
export default NewPropDetails;
