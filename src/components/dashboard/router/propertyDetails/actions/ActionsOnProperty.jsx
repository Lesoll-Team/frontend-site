import { FaFacebook } from "react-icons/fa";
import ActionCard from "./ActionCard";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import SectionContainer from "../SectionContainer";

const ActionsOnProperty = ({ propertyDetails }) => {
  return (
    <SectionContainer style={" grid grid-cols-2 sm:grid-cols-3 gap-2"}>
      <ActionCard
        title={"مشاراكات"}
        icon={<FaFacebook className="text-[#3b5998]" />}
        num={propertyDetails.facebookShareTotal}
      />
      <ActionCard
        title={"مشاراكات"}
        icon={<FaSquareXTwitter />}
        num={propertyDetails.twitterShareTotal}
      />
      <ActionCard
        title={"مشاراكات"}
        icon={<IoLogoWhatsapp className="text-[#25D366] text-xl" />}
        num={propertyDetails.whatsappShareTotal}
      />
      <ActionCard
        title={"مشاراكات أخرى"}
        num={propertyDetails.otherShareTotal}
      />
      <ActionCard
        title={"التواصل"}
        icon={<IoLogoWhatsapp className="text-[#25D366] text-xl" />}
        num={propertyDetails.whatsappClickTotal}
      />
      <ActionCard
        title={"التواصل"}
        icon={<IoIosCall className="text-blue-500" />}
        num={propertyDetails.callClickTotal}
      />
    </SectionContainer>
  );
};
export default ActionsOnProperty;
