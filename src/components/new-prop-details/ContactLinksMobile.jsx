import { getContactLinks } from "@/utils/getContactLinks";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const ContactLinksMobile = ({ phone }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const message = "adksadiasdlsadg";
  console.log("phone", phone);
  const { callLink, whatsAppLink } = getContactLinks({
    phoneNumber: phone,
    message: message,
  });
  console.log("call", callLink);
  console.log("whats", whatsAppLink);
  return (
    <div className="md:hidden  sticky bottom-0 flex w-full">
      <a
        target="_blank"
        href={whatsAppLink}
        className="py-3 flex items-center justify-center w-full gap-2 bg-[#39AE41] text-white"
      >
        {language ? "واتساب" : "Whatsapp"}
        <FaWhatsapp />
      </a>
      <a
        href={callLink}
        target="_blank"
        className="py-3 flex items-center justify-center w-full gap-2 bg-lightNeutral text-[#5F98D1]"
      >
        {language ? "اتصال" : "Call"}
        <IoCallSharp className="" />
      </a>
    </div>
  );
};
export default ContactLinksMobile;
