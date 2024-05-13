import { useUser } from "@/Shared/UserContext";
import { useState } from "react";
// import { useSelector } from "react-redux";

const useContact = ({ phoneNumber, message, user }) => {
  const { data } = useUser();

  const [showPopup, setShowPopup] = useState(false);

  if (!data && !showPopup) {
    setShowPopup(true);
  }
  if (phoneNumber && data) {
    const callLink = `tel:${phoneNumber}`;
    const whatsAppLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;
    return { callLink, whatsAppLink };
  }
  if (!phoneNumber && data) {
    const callLink = `tel:${user?.code}${user?.phone}`;
    const whatsAppLink = `https://api.whatsapp.com/send?phone=${user?.code}${
      user?.phone
    }&text=${encodeURIComponent(message)}`;
    return { callLink, whatsAppLink };
  }
  return { callLink: "", whatsAppLink: "", showPopup, error: true };
};
export default useContact;
