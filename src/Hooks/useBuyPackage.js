import AddPhoneModal from "@/Shared/contact-modals/AddPhoneModal";
import LoginModal from "@/Shared/contact-modals/LoginModal";
import NotSignUpModal from "@/Shared/contact-modals/NotSignedModal";
import RegisterModal from "@/Shared/contact-modals/RegisterModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { buyPackageAction } from "@/utils/PricingAPI";
import { cn } from "@/utils/cn";

const useBuyPackage = ({ id }) => {
  const userData = useSelector((state) => state.userProfile.userData);
  const [notLogedOpen, setNotLogedOpen] = useState(false);
  const [noPhoneOpen, setNoPhoneOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const handleActionClick = () => {
    if (userData) {
      if (userData?.phone) {
        buyPackageAction({ id }).then((data) => router.push(data.link));
      } else {
        setNoPhoneOpen(true);
      }
    } else {
      setNotLogedOpen(true);
    }
  };
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
  const ButtonsBuyPackage = ({ className, children, disabled }) => {
    return (
      <>
        <button
          disabled={disabled}
          className={cn("", className)}
          onClick={() => handleActionClick()}
        >
          {children}
        </button>
        <ContactModals />
      </>
    );
  };
  return ButtonsBuyPackage;
};
export default useBuyPackage;
