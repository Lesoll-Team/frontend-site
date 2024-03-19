import { useSelector } from "react-redux";
import InstallmentCard from "./InstallmentCard";

const InstallmentPlans = ({ projectData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-[16px]">
      <h2>{language ? "خطط السداد" : "Installment Plans"}</h2>
      <div className="flex flex-wrap gap-y-3 gap-x-[14px] md:gap-y-4 md:gap-x-10">
        {projectData?.installment?.map((item, index) => {
          return <InstallmentCard plan={item} key={index} />;
        })}
      </div>
    </div>
  );
};
export default InstallmentPlans;
