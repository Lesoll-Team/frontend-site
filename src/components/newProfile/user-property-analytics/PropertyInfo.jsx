import { useSelector } from "react-redux";

const PropertyInfo = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-6">
      <h1>تاون هاوس للبيع بكمبوند KOUN بالساحل الشمالي</h1>
      <div className="flex gap-8 md:gap-10 items-center">
        <p>
          {language ? "نوع الإعلان: " : "Ad type: "}{" "}
          {language ? "مجانى" : "Free"}
        </p>
        <p>{language ? " تاريخ النشر: " : "Date of publish: "} 2024/5/10</p>
      </div>
    </div>
  );
};

export default PropertyInfo;
