import { useSelector } from "react-redux";
import SectionContainer from "../SectionContainer";

const AcceptedDetails = ({ propertyDetails }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const formatDate = (date) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(date).toLocaleString("ar-Eg", options);
  };
  return (
    <SectionContainer style={"flex justify-between items-center"}>
      <div className="text-sm md:text-xl">
        <p>{language ? "تمت الموافقة عليه من :" : "Accepted by:"}</p>

        {"  "}
        <p className="font-semibold text-lightGreen">
          {propertyDetails.getAdminAccept}
        </p>
      </div>
      <div className="text-sm md:text-xl">
        <p> {language ? "تاريخ النشر فى" : "Posted At"}</p>

        {"  "}
        <p className="font-semibold text-lightGreen">
          {formatDate(propertyDetails.getProperty.createdAt)}
        </p>
      </div>
    </SectionContainer>
  );
};
export default AcceptedDetails;
