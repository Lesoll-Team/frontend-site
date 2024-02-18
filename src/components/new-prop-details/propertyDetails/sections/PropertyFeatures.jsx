import { useSelector } from "react-redux";

const PropertyFeatures = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <section>
      <h3 className="text-xl sm:text-2xl mb-3">
        {language ? "المميزات" : "Features"}
      </h3>

      <div className="flex flex-wrap gap-3">
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
    <div className="border px-2 py-3 text-center md:text-base text-sm flex items-center justify-start rounded text-lightGreen font-bold">
      <p> {language ? name.ar : name.en}</p>
    </div>
  );
};
