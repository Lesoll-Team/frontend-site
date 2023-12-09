import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

const DescriptionModal = ({ children, description }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        placement="bottom-center"
      >
        <ModalContent className="p-3" dir="rtl">
          {(onClose) => (
            <>
              <ModalBody>
                <p className="leading-loose">{description}</p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default DescriptionModal;
