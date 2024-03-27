import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  // ModalFooter,
  // Button,
  useDisclosure,
  // RadioGroup,
  // Radio,
} from "@nextui-org/react";
// import { useState } from "react";
import { useSelector } from "react-redux";
export default function ConfirmModal({
  actinFunction,
  title,
  description,
  children,
  id,
}) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //   const [modalPlacement, setModalPlacement] = useState("bottom-center");

  return (
    <div className="flex flex-col gap-2">
      <div onClick={onOpen} className=" w-full">
        {children}
      </div>
      <Modal
        isOpen={isOpen}
        placement={"bottom-center"}
        onOpenChange={onOpenChange}
      >
        <ModalContent dir="rtl">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 pt-8">
                {title}
              </ModalHeader>
              <ModalBody>{description || ""}</ModalBody>
              <div className="flex p-3 gap-5">
                <button
                  className="border-red-500 border-1 py-2 px-4 rounded-lg text-red-500"
                  onClick={() => {
                    onClose();
                  }}
                >
                  {language ? "إلغاء" : "Cancel"}
                </button>
                <button
                  className="bg-lightGreen py-2 px-4 rounded-lg text-white"
                  color="primary"
                  onClick={() => {
                    onClose();
                    actinFunction(id || "");
                  }}
                >
                  {language ? "تأكيد" : "Confirm"}
                </button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
