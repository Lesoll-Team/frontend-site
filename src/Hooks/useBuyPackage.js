import dynamic from "next/dynamic";
const AddPhoneModal = dynamic(
  () => import("@/Shared/contact-modals/AddPhoneModal"),
);
const LoginModal = dynamic(() => import("@/Shared/contact-modals/LoginModal"));
const RegisterModal = dynamic(
  () => import("@/Shared/contact-modals/RegisterModal"),
);
const NotSignUpModal = dynamic(
  () => import("@/Shared/contact-modals/NotSignedModal"),
);
import { useState } from "react";
import { cn } from "@/utils/cn";
import PriceModel from "@/components/pricing/PriceModel";
import { useUser } from "@/Shared/UserContext";

const useBuyPackage = ({ id }) => {
  const { data } = useUser();
  const [notLogedOpen, setNotLogedOpen] = useState(false);
  const [isSelectedPayment, setIsSelectedPayment] = useState(false);
  const [noPhoneOpen, setNoPhoneOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  // const [methodType, setMethodType] = useState("");

  const handleActionClick = () => {
    if (data) {
      if (data?.phone) {
        setIsSelectedPayment(true);
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
        <PriceModel
          id={id}
          // setMethodType={setMethodType}
          isOpen={isSelectedPayment}
          setIsOpen={setIsSelectedPayment}
        />
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
