import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";

const PropertyFeatures = ({ propertyData }) => {
  const { t } = useTranslation("common");

  return (
    <section className="md:space-y-[32px] space-y-[16px]">
      <h2 className=" ">{t("المميزات")}</h2>

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
    <div className="border px-5 py-3 text-center  flex items-center justify-start rounded  font-bold">
      <p className="lg-text text-lightGreen font-cairo">
        {" "}
        {language ? name.ar : name.en}
      </p>
    </div>
  );
};
