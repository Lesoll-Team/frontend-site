import { useState } from "react";
import { useSelector } from "react-redux";

const useContact = ({ phoneNumber, message, user }) => {
  const userData = useSelector((state) => state.userProfile.userData);
  const [showPopup, setShowPopup] = useState(false);

  if (!userData && !showPopup) {
    setShowPopup(true);
  }
  if (phoneNumber && userData) {
    const callLink = `tel:${phoneNumber}`;
    const whatsAppLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    return { callLink, whatsAppLink };
  }
  if (!phoneNumber && userData) {
    const callLink = `tel:${user?.code}${user?.phone}`;
    const whatsAppLink = `https://api.whatsapp.com/send?phone=${user?.code}${
      user?.phone
    }&text=${encodeURIComponent(message)}`;
    return { callLink, whatsAppLink };
  }
  return { callLink: "", whatsAppLink: "", showPopup, error: true };
};
export default useContact;
