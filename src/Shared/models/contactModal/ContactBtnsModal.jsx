import SignUpForm from "@/components/auth/signup/components/form/SignUpForm";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
// import { useState } from "react";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";
import OtpInputForm from "@/components/auth/otp/components/OtpInputForm";
import { useState } from "react";
export default function ContactBtnsModal({
  title,
  description,
  children,
  signup,
  phone,
}) {
  const userData = useSelector((state) => state.userProfile.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //   const [modalPlacement, setModalPlacement] = useState("bottom-center");
  const [token, setToken] = useState();

  return (
    <div className="flex flex-col w-full gap-2 ">
      <div onClick={onOpen} className=" w-full">
        {children}
      </div>
      <Modal
        radius="sm"
        isOpen={isOpen}
        isDismissable={false}
        placement={"bottom-center"}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader> */}
              <ModalBody dir={language ? "rtl" : "ltr"}>
                <SignUp setToken={setToken} />
                {/* <OtpInputForm /> */}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
