import SocialMediaModal from "@/Shared/models/SocialMediaModal";
import { useTranslation } from "next-i18next";
import { IoShareSocialOutline } from "react-icons/io5";

const ShareBtn = ({ propertyData }) => {
  const { t } = useTranslation("common");

  return (
    <SocialMediaModal
      slug={propertyData?.slug}
      id={propertyData?._id}
      title={t("Share_Property")}
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
