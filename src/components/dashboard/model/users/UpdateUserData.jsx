
import { useCallback, useMemo, useState } from "react";
import updateUsers from "../../utils/userAPI";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

function UserUpdateModule({ userID }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["broker"]));
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [typeOfUser, setTypeOfUser] = useState("");
  const [isAdmin, setAdmin] = useState(false);
//   console.log(typeOfUser);
//   console.log(isAdmin);
  const handleUpdateData = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        const newUserData = { typeOfUser, isAdmin };
        await updateUsers(userID, newUserData);
        console.log(userID);
        console.log(newUserData);
      } catch (error) {
        console.error("Error Update User Data:", error);
      }
    },
    []
  );
  const handleSelectedValueChange = useCallback((value) => {
    setTypeOfUser(value);
  }, []);
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
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
        size="1xl"
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
              <ModalHeader className="flex flex-col gap-1 w-[1000px]">
                Update User Data
              </ModalHeader>
              <form onSubmit={handleUpdateData}>
                <ModalBody>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        onChange={() => setTypeOfUser(selectedValue)}
                        variant="bordered"
                        className="capitalize"
                      >
                        {selectedValue}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Single selection example"
                      variant="flat"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedKeys}
                      onSelectionChange={(newSelectedKeys) => {
                        setSelectedKeys(newSelectedKeys);
                        const selectedValue = Array.from(newSelectedKeys)
                          .join(", ")
                          .replaceAll("_", " ");
                        handleSelectedValueChange(selectedValue);
                      }}
                    >
                      <DropdownItem key="individual">individual</DropdownItem>
                      <DropdownItem key="broker">broker</DropdownItem>
                      <DropdownItem key="company">company</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <div className="grid grid-cols-1  justify-items-center">
                    <div className="flex justify-center items-center">
                      <Button
                        onClick={() => setAdmin(!isAdmin)}
                        color={isAdmin ? "danger" : "warning"}
                      >
                        {isAdmin ? "Delete Admin Access" : "Set Admin Access"}
                      </Button>
                      <Chip>
                        {isAdmin ? "He is Admin" : "He is Default User"}
                      </Chip>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="foreground" variant="light" onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    className="bg-[#6f4ef2] "
                    type="submit"
                    onPress={onClose}
                  >
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
 













/**import { useCallback, useMemo, useState } from "react";
import updateUsers from "../../utils/userAPI";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

function UserUpdateModule({ userID }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["broker"]));
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [typeOfUser, setTypeOfUser] = useState("");
  const [isAdmin, setAdmin] = useState(false);
//   console.log(typeOfUser);
//   console.log(isAdmin);
  const handleUpdateData = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        const newUserData = { typeOfUser, isAdmin };
        await updateUsers(userID, newUserData);
        console.log(userID);
        console.log(newUserData);
      } catch (error) {
        console.error("Error Update User Data:", error);
      }
    },
    []
  );
  const handleSelectedValueChange = useCallback((value) => {
    setTypeOfUser(value);
  }, []);
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
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
        size="1xl"
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
              <ModalHeader className="flex flex-col gap-1 w-[1000px]">
                Update User Data
              </ModalHeader>
              <form onSubmit={handleUpdateData}>
                <ModalBody>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        onChange={() => setTypeOfUser(selectedValue)}
                        variant="bordered"
                        className="capitalize"
                      >
                        {selectedValue}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Single selection example"
                      variant="flat"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedKeys}
                      onSelectionChange={(newSelectedKeys) => {
                        setSelectedKeys(newSelectedKeys);
                        const selectedValue = Array.from(newSelectedKeys)
                          .join(", ")
                          .replaceAll("_", " ");
                        handleSelectedValueChange(selectedValue);
                      }}
                    >
                      <DropdownItem key="individual">individual</DropdownItem>
                      <DropdownItem key="broker">broker</DropdownItem>
                      <DropdownItem key="company">company</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <div className="grid grid-cols-1  justify-items-center">
                    <div className="flex justify-center items-center">
                      <Button
                        onClick={() => setAdmin(!isAdmin)}
                        color={isAdmin ? "danger" : "warning"}
                      >
                        {isAdmin ? "Delete Admin Access" : "Set Admin Access"}
                      </Button>
                      <Chip>
                        {isAdmin ? "He is Admin" : "He is Default User"}
                      </Chip>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="foreground" variant="light" onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    className="bg-[#6f4ef2] "
                    type="submit"
                    onPress={onClose}
                  >
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
 */