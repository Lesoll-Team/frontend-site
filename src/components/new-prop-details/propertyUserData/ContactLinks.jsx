import { getContactLinks } from "@/utils/getContactLinks";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const ContactLinks = ({ propertyData }) => {
  const message = "";
  const { callLink, whatsAppLink } = getContactLinks({
    phoneNumber: propertyData.user?.code + propertyData.user?.phone,
    message: message,
  });
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  return (
    <div className=" hidden  md:flex flex-col gap-3 w-full">
      <a
        href={callLink}
        target="_blank"
        className="py-2 text-xl rounded flex items-center justify-center w-full gap-2 bg-lightNeutral text-[#5F98D1]"
      >
        {language ? "اتصال" : "Call"}
        <IoCallSharp className="" />
      </a>
      <a
        target="_blank"
        href={whatsAppLink}
        className="py-2 text-xl rounded flex items-center justify-center w-full gap-2 bg-[#39AE41] text-white"
      >
        {language ? "واتساب" : "Whatsapp"}
        <FaWhatsapp />
      </a>
    </div>
  );
};
export default ContactLinks;
