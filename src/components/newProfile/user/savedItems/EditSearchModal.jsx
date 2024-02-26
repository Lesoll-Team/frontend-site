import {
  Modal,
  ModalContent,
  ModalHeader,
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
      <div onClick={onOpen} className=" w-full">
        {children}
      </div>
      <Modal size={"4xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>

              <div className="flex justify-end">
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
