import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function ConfirmModal({
  actinFunction,
  title,
  description,
  children,
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
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{description || ""}</ModalBody>
              <div className="flex p-3 gap-5">
                <button
                  className="bg-red-500 py-2 px-4 rounded-lg text-white"
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
                    actinFunction();
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
