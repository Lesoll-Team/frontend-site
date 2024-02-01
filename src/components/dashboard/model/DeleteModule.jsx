import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

function UserModule() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
      <div className=''>
        <Button onPress={onOpen} color="danger">Delete</Button>
        <Modal 
          backdrop="opaque" 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          radius="2xl"
          classNames={{
            body: "pb-6 ",
            base: " bg-[#19172c]  m-auto  text-[#a8b0d3]",
            header: "border-b-[1px] ",
            // closeButton: "hover:bg-white/5 active:bg-white/10",
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
                  <Button className="bg-[#6f4ef2] " onPress={onClose}>
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