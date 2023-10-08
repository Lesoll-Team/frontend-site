import { useCallback, useMemo, useState } from "react";
import {updateUsers} from "../../utils/userAPI";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

function UserUpdateModule({ userID,typeUser,userIsAdmin }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isAdmin, setAdmin] = useState(userIsAdmin);
  const [selectedKeys, setSelectedKeys] = useState(new Set([typeUser]));
  const typeOfUser = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const handleUpdateData = async (e) => {
    e.preventDefault();
    // try {
      const newUserData = { typeOfUser, isAdmin };
      await updateUsers(userID, newUserData);
    // } catch (error) {
    //   console.error("Error Update User Data:", error);
    // }
  };

  return (
    <div className="">
      <Button size="sm" onPress={onOpen}>
        Update
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="2xl"
        size="sm"
        className="   "
        classNames={{
          body: " ",
          base: "m-auto",
          header: "border-b-[1px] p-1",
        }}
      >
        <ModalContent className="model">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                Update User Data
              </ModalHeader>
              <form onSubmit={handleUpdateData}>
                <ModalBody>

                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered" className="capitalize">
                        {typeOfUser}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Single selection example"
                      variant="flat"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedKeys}
                      onSelectionChange={setSelectedKeys}
                    >
                      <DropdownItem key="individual">Individual</DropdownItem>
                      <DropdownItem key="broker">Broker</DropdownItem>
                      <DropdownItem key="company">Company</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <Checkbox
                    aria-label="set Admin"
                    size="lg"
                    onClick={() => setAdmin(!isAdmin)}
                    isSelected={userIsAdmin}>
                    set Admin
                  </Checkbox>

                </ModalBody>
                <ModalFooter>
                  <Button color="foreground" variant="light" onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    className="bg-[#6f4ef2] "
                    type="submit"
                    onPress={onClose}>
                    Done
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default UserUpdateModule;
