import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

function UserModule() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
      <div className=''>
        <Button onPress={onOpen} color="secondary">Edit</Button>
        <Modal 
          backdrop="opaque" 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          radius="2xl"
          classNames={{
            body: "pb-6 ",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40 ",
            base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] m-auto  text-[#a8b0d3]",
            header: "border-b-[1px] border-[#292f46]",
            footer: "border-t-[1px] border-[#292f46] ",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
        >
          <ModalContent className='model'>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Actions</ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                  <Button color="foreground" variant="light" onClick={onClose}>
                    Close
                  </Button>
                  <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                    Done
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    );
}

export default UserModule