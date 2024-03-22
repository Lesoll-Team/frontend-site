import { useSelector } from "react-redux";
import InstallmentCard from "./InstallmentCard";

const InstallmentPlans = ({ projectData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  console.log(projectData);
  return (
    <div className="space-y-[16px]">
      <h2>{language ? "خطط السداد" : "Installment Plans"}</h2>
      <div className="grid  grid-cols-3 md:flex-wrap md:flex  gap-3  md:gap-7">
        {projectData?.installment?.map((item, index) => {
          return <InstallmentCard plan={item} key={index} />;
        })}
      </div>
    </div>
  );
};
export default InstallmentPlans;
