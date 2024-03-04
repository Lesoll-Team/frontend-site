import { useSelector } from "react-redux";
const fieldsToConsider = [
  "fullname",
  "email",
  "avatarUrl",
  "phone",
  "companyAddress",
  "taxCard",
  "theCommercialRegistrationImg",
  "workingHours",
  "Bio",
];

const CompanyPrograssBar = () => {
  const userData = useSelector((state) => state.userProfile.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const completeness = (() => {
    const totalFields = fieldsToConsider.length;
    const completedFields = fieldsToConsider.filter(
      (field) => userData[field]
    ).length;
    return (completedFields / totalFields) * 100;
  })();
  const roundedCompleteness = Math.round(completeness / 5) * 5;
  if (roundedCompleteness !== 100) {
    return (
      <div className={`space-y-2 `}>
        <h3 className="text-base md:text-xl text-baseGray font-bold">
          {language
            ? "ادخل جميع بياناتك لتكمل ملفك الشخصي"
            : "Enter all your details to complete your profile"}
        </h3>
        <div className="flex gap-1 items-center">
          <div className="w-full h-3 bg-gray-300 rounded-full flex overflow-hidden">
            <span
              style={{
                width: `${roundedCompleteness}%`,
              }}
              className={` ${
                roundedCompleteness < 40
                  ? "bg-red-500"
                  : roundedCompleteness < 80
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            ></span>
          </div>
          <p className="font-bold">{roundedCompleteness}%</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default CompanyPrograssBar;
