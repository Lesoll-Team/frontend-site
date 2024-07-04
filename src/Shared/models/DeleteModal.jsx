import { getLangBoolean } from "@/utils/getLangBoolean";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalHeader,
} from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function DeleteModal({
  OpenButton,
  children,
  reason,
  setError,
  error = false,
  selectedReason,
  deleteProp,
}) {
  const language = getLangBoolean();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const onDelete = () => {
    if (selectedReason !== "other") {
      if (reason) {
        deleteProp();
        onClose();
      } else {
        setError(true);
      }
    } else {
      deleteProp();
      onClose();
    }
  };

  return (
    <>
      <div onClick={onOpen} className="">
        {OpenButton}
      </div>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody dir={language && "rtl"}>
                <div></div>
                {children}
                {error && (
                  <p className="text-red-500">
                    {language
                      ? "من فضلك اختار سبب الحذف"
                      : "Please select a reason"}
                  </p>
                )}
                <div className="flex items-center gap-3 mb-2">
                  <button
                    className="px-4 py-2 border-2 duration-150 rounded-lg border-red-600 text-red-600  hover:bg-red-600 hover:text-white font-semibold"
                    onClick={onClose}
                  >
                    {language ? "الغاء" : "Close"}
                  </button>
                  <button
                    className="px-4 py-2 border-2 duration-150 rounded-lg border-darkGreen text-darkGreen  hover:bg-darkGreen hover:text-white font-semibold "
                    onClick={onDelete}
                  >
                    {language ? "حذف العقار" : "Delete"}
                  </button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
