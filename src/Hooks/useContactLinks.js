import AddPhoneModal from "@/Shared/contact-modals/AddPhoneModal";
import LoginModal from "@/Shared/contact-modals/LoginModal";
import NotSignUpModal from "@/Shared/contact-modals/NotSignedModal";
import RegisterModal from "@/Shared/contact-modals/RegisterModal";
import {
  needsCallClick,
  needsWhatsClick,
  propertyCallClick,
  propertyWhatsClick,
} from "@/utils/clicksApis";
import { cn } from "@/utils/cn";
import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const useContactLinks = ({ phoneNumber, message = "", type, id }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  const [notLogedOpen, setNotLogedOpen] = useState(false);
  const [noPhoneOpen, setNoPhoneOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const whatsLinkRef = useRef(null);
  const callLinkRef = useRef(null);

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

  const handleActionClick = (clickType) => {
    if (userData) {
      if (userData?.phone) {
        if (clickType === "whatsapp") {
          if (type === "property") {
            propertyWhatsClick({ id });
          } else if (type === "need") {
            needsWhatsClick({ id });
          }
          whatsLinkRef.current.click();
        } else if (clickType === "call") {
          if (type === "property") {
            propertyCallClick({ id });
          } else if (type === "need") {
            needsCallClick({ id });
          }
          callLinkRef.current.click();
        }
      } else {
        setNoPhoneOpen(true);
      }
    } else {
      setNotLogedOpen(true);
    }
  };
  // console.log(notLogedOpen);

  const ContactModals = () => {
    return (
      <>
        <NotSignUpModal
          isOpen={notLogedOpen}
          setIsOpen={setNotLogedOpen}
          setLoginIsOpen={setLoginIsOpen}
          setRegisterIsOpen={setRegisterIsOpen}
        />
        <RegisterModal isOpen={registerIsOpen} setIsOpen={setRegisterIsOpen} />
        <LoginModal isOpen={loginIsOpen} setIsOpen={setLoginIsOpen} />
        <AddPhoneModal isOpen={noPhoneOpen} setIsOpen={setNoPhoneOpen} />
      </>
    );
  };
  const WhatappLinkBtn = ({ className, children }) => (
    <>
      {userData && userData.phone && (
        <a
          ref={whatsLinkRef}
          className="hidden"
          target="_blank"
          href={whatsAppLink}
        ></a>
      )}
      <button
        onClick={() => {
          handleActionClick("whatsapp");
        }}
        className={cn("", className)}
      >
        {children ? (
          children
        ) : (
          <>
            {language ? "واتساب" : "Whatsapp"}
            <FaWhatsapp />
          </>
        )}
      </button>
      <ContactModals />
    </>
  );
  const CallLinkBtn = ({ className, children }) => (
    <>
      {userData && userData.phone && (
        <a
          ref={callLinkRef}
          className="hidden"
          target="_blank"
          href={callLink}
        ></a>
      )}
      <button
        onClick={() => {
          handleActionClick("call");
        }}
        className={cn("", className)}
      >
        {children ? (
          children
        ) : (
          <>
            {language ? "اتصال" : "Call"}
            <IoCallSharp className="" />
          </>
        )}
      </button>
      <ContactModals />
    </>
  );
  return { WhatappLinkBtn, CallLinkBtn };
};
export default useContactLinks;
