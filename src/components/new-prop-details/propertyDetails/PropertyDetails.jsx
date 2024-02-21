import { cn } from "@/utils/cn";
import PropertyInfo from "./sections/PropertyInfo";
import PropertyFeatures from "./sections/PropertyFeatures";
import PropertyDescription from "./sections/PropertyDescription";
import PropertyInstallmentPlans from "./sections/PropertyInstallmentPlans";
import PropertyLocation from "./sections/PropertyLocation";

const PropertyDetails = ({ propertyData, className }) => {
  return (
    <div className={cn("space-y-[30px] md:space-y-[58px] pb-5", className)}>
      <PropertyInfo propertyData={propertyData} />
      {propertyData.service.length > 0 && (
        <PropertyFeatures propertyData={propertyData} />
      )}
      <PropertyDescription propertyData={propertyData} />
      <PropertyInstallmentPlans propertyData={propertyData} />
      <PropertyLocation propertyData={propertyData} />
    </div>
  );
};
export default PropertyDetails;
