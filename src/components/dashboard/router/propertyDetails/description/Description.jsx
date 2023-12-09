import { FaArrowLeft } from "react-icons/fa";
import SectionContainer from "../SectionContainer";
import { FaArrowLeftLong } from "react-icons/fa6";
import DescriptionModal from "./DescriptionModal";

const Description = ({ propertyDetails }) => {
  return (
    <SectionContainer style={"space-y-3 flex flex-col justify-between"}>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">الوصف</h3>
        <p className="line-clamp-4 leading-relaxed">
          {propertyDetails.getProperty.description}
        </p>
      </div>
      <div className="grid place-content-center">
        <DescriptionModal description={propertyDetails.getProperty.description}>
          <button
            type="button"
            className="text-center text-lightOrange mx-auto  flex items-center gap-1"
          >
            رؤية المزيد <FaArrowLeftLong className="text-sm" />
          </button>
        </DescriptionModal>
      </div>
    </SectionContainer>
  );
};
export default Description;
