import SectionContainer from "../SectionContainer";
import ServiceCard from "./ServiceCard";

const PropertyServices = ({ services }) => {
  return (
    <SectionContainer>
      <h3 className="text-xl mb-3">المميزات</h3>
      <div className="flex justify-start items-center flex-wrap gap-2">
        {services.length > 0 ? (
          services.map((service) => {
            return <ServiceCard key={service._id} service={service.name.ar} />;
          })
        ) : (
          <div className="min-h-[120px] w-full grid place-content-center">
            <p>لا يوجود مميزات</p>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};
export default PropertyServices;
