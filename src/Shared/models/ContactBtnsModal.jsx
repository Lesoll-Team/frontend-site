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
export default function ContactBtnsModal({
  title,
  description,
  children,
  signup,
  phone,
}) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //   const [modalPlacement, setModalPlacement] = useState("bottom-center");

  return (
    <div className="flex flex-col  w-full gap-2">
      <div onClick={onOpen} className=" w-full">
        {children}
      </div>
      <Modal
        isOpen={isOpen}
        placement={"bottom-center"}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <p dir="rtl" className="text-xl text-center font-semibold">
                  {description}
                </p>
                {signup && (
                  <div className="flex p-3 gap-5 justify-center">
                    <Link
                      title={language ? "سجل الدخول" : "Sign in"}
                      href={"/signin"}
                      className="border-2 px-3 py-1 border-lightOrange rounded-full bg-white text-lightOrange hover:bg-lightOrange hover:text-white duration-150 font-semibold "
                    >
                      {language ? "سجل الدخول" : "Sign In"}
                    </Link>
                    <Link
                      title={language ? "اشترك الأن" : "Sign Up"}
                      href={"/signup"}
                      className="border-2 px-3 py-1 border-lightOrange rounded-full bg-lightOrange text-white hover:bg-white hover:text-lightOrange duration-150 font-semibold "
                    >
                      {language ? "اشترك الأن" : "Sign Up"}
                    </Link>
                  </div>
                )}
                {phone && (
                  <div className="flex p-3 gap-5 justify-center">
                    <Link
                      title={language ? "الإعدادات" : "settings"}
                      href={"/profile/settings"}
                      className="border-2 px-3 py-1 border-lightOrange rounded-full bg-white text-lightOrange hover:bg-lightOrange hover:text-white duration-150 font-semibold "
                    >
                      {language ? "أضف رقم الهاتف" : "Add your phone number"}
                    </Link>
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
