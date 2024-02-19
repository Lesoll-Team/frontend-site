import { useSelector } from "react-redux";

const PropertyFeatures = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <section className="md:space-y-[32px] space-y-[16px]">
      <h3 className="text-sm sm:text-3xl ">
        {language ? "المميزات" : "Features"}
      </h3>

      <div className="flex flex-wrap gap-4 md:gap-x-8">
        {propertyData.service.map((service) => {
          return <FeatureCard key={service._id} name={service.name} />;
        })}
      </div>
    </section>
  );
};
export default PropertyFeatures;

const FeatureCard = ({ name }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="border px-5 py-3 text-center md:text-base text-sm flex items-center justify-start rounded text-lightGreen font-bold">
      <p> {language ? name.ar : name.en}</p>
    </div>
  );
};
