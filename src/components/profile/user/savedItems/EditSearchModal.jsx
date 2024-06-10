import {
  Modal,
  ModalContent,
  // ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Button from "@/Shared/ui/Button";
import { useSelector } from "react-redux";

export default function EditSearchModal({ children }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button onClick={onOpen} className=" w-full">
        {children}
      </button>
      <Modal size={""} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader> */}
              <ModalBody>www</ModalBody>

              <div className="flex justify-end pt-10 pb-5 px-5">
                <div>
                  <h3>adadad</h3>
                </div>
                <Button>{language ? "تعديل" : "Edit"}</Button>{" "}
                <Button
                  onClick={onClose}
                  className={"text-baseGray border-outLine "}
                  variant="bordered"
                >
                  {language ? "رجوع" : "cancel"}
                </Button>{" "}
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
