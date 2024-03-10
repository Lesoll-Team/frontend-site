import ContactBtnsModal from "@/Shared/models/ContactBtnsModal";
import { cn } from "@/utils/cn";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const useContactLinks = ({ phoneNumber, message = "" }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);

  const removePlus = (phoneNumber) => {
    // Check if phoneNumber exists and is a string
    if (phoneNumber && typeof phoneNumber === "string") {
      // Check if the phone number starts with "+"
      if (phoneNumber.startsWith("+")) {
        // Return the phone number without the "+"
        return phoneNumber.substring(1);
      } else {
        // If the phone number doesn't start with "+", return as is
        return phoneNumber;
      }
    } else {
      // If phoneNumber is not a string or undefined, return an empty string
      return "";
    }
  };

  // Example usage:
  // let phoneNumber = "+201147085506";
  let phoneNumberWithoutPlus = removePlus(phoneNumber);

  let phoneNumberWithePlus = "+" + phoneNumberWithoutPlus;
  const callLink = `tel:${phoneNumberWithePlus}`;
  const whatsAppLink = `https://api.whatsapp.com/send?phone=${phoneNumberWithoutPlus}&text=${encodeURIComponent(
    message
  )}`;
  const haveNoPhoneNiumber = Boolean(userData && !userData.phone);
  const WhatappLinkBtn = ({ className, children }) =>
    userData ? (
      haveNoPhoneNiumber ? (
        <ContactBtnsModal
          phone={true}
          description={
            language
              ? "لا يمكن التواصل مع المعلن في حالة عدم تسجيل رقم هاتفك لدينا"
              : "You can't contact with the seller with out completeing your account phone number "
          }
        >
          {children ? (
            children
          ) : (
            <p className={cn("cursor-pointer", className)}>
              {language ? "واتساب" : "Whatsapp"}
              <FaWhatsapp />
            </p>
          )}
        </ContactBtnsModal>
      ) : (
        <a target="_blank" href={whatsAppLink} className={cn("", className)}>
          {children ? (
            children
          ) : (
            <>
              {language ? "واتساب" : "Whatsapp"}
              <FaWhatsapp />
            </>
          )}
        </a>
      )
    ) : (
      <ContactBtnsModal
        signup={true}
        description={
          language
            ? "لا يمكن التواصل مع المعلن فى حالة عدم تسجبل الدخول"
            : "You can't contact with the seller with out signing in "
        }
      >
        {children ? (
          children
        ) : (
          <p className={cn("cursor-pointer", className)}>
            {language ? "واتساب" : "Whatsapp"}
            <FaWhatsapp />
          </p>
        )}
      </ContactBtnsModal>
    );
  const CallLinkBtn = ({ className, children }) =>
    userData ? (
      haveNoPhoneNiumber ? (
        <ContactBtnsModal
          phone={true}
          description={
            language
              ? "لا يمكن التواصل مع المعلن في حالة عدم تسجيل رقم هاتفك لدينا"
              : "You can't contact with the seller with out completeing your account phone number "
          }
        >
          {" "}
          {children ? (
            children
          ) : (
            <p className={cn("cursor-pointer", className)}>
              {language ? "اتصال" : "Call"}
              <IoCallSharp className="" />
            </p>
          )}
        </ContactBtnsModal>
      ) : (
        <a target="_blank" href={callLink} className={cn("", className)}>
          {children ? (
            children
          ) : (
            <>
              {language ? "اتصال" : "Call"}
              <IoCallSharp className="" />
            </>
          )}
        </a>
      )
    ) : (
      <ContactBtnsModal
        signup={true}
        description={
          language
            ? "لا يمكن التواصل مع المعلن فى حالة عدم تسجبل الدخول"
            : "You can't contact with the seller with out signing in "
        }
      >
        {children ? (
          children
        ) : (
          <p className={cn("cursor-pointer", className)}>
            {language ? "اتصال" : "Call"}
            <IoCallSharp className="" />
          </p>
        )}
      </ContactBtnsModal>
    );
  return { WhatappLinkBtn, CallLinkBtn };
};
export default useContactLinks;
