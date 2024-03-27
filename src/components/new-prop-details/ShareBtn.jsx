import SocialMediaModal from "@/Shared/models/SocialMediaModal";
import { IoShareSocialOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const ShareBtn = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <SocialMediaModal
      slug={propertyData?.slug}
      id={propertyData?._id}
      title={language ? "مشاركة العقار" : "Share property"}
    >
      <button
        type="button"
        className="flex items-center justify-center  h-10 w-10 md:h-12 md:w-12 bg-white rounded-full"
      >
        <IoShareSocialOutline className="text-xl md:text-2xl" />
      </button>
    </SocialMediaModal>
  );
};
export default ShareBtn;
