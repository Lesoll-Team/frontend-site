import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

import {  useSelector } from "react-redux";
import { SearchDropdown } from "@/Shared/search/SearchDropdown";

export default function SearchModel() {

  let languageIs = useSelector((state) => state.GlobalState.languageIs);

  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [locationName, setLocationName] = useState("");
    const [locationValue, setLocationValue] = useState("");
    const [isTyping, setTyping] = useState(false);


  const handelSearchButton = (e) => {
    e.preventDefault();
    const InputKeywords = {
      cdb: locationValue || locationName.trim().split(" ").join("_"),
    };
    onOpenChange(onOpenChange);
    if (InputKeywords == "" || InputKeywords == " ") {
      router.push(`/searching/offer=all`);
    } else router.push(`/searching/cdb=${InputKeywords.cdb}`);
  };

  return (
    <div>
      <Button
        className="bg-inherit"
        disableRipple="false"
        size="sm"
        onPress={onOpen}
      >
        <FaSearch className="text-lg  text-lightOrange" />
      </Button>
      <Modal
        size="5xl"
        backdrop=""
        placement="top"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 20,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {languageIs ? "بحث" : "Search"}
              </ModalHeader>
              <ModalBody
                className={`  ${isTyping ?  "pb-72 h-[300px]":""}`}
              >
                <form
                  onSubmit={handelSearchButton}
                  className="flex items-center gap-2"
                >
                  <div className="w-full">
                    <SearchDropdown
                      setLocationName={setLocationName}
                      setLocationValue={setLocationValue}
                      setTyping={setTyping}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-[20p] h-[20px] bg-lightOrange py-5 text-white font-bold"
                  >
                    {languageIs ? "بحث" : "Search"}
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
