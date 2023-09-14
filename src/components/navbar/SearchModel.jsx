import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import { propertyFromSearch } from "@/redux-store/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SearchModel() {
  const dispatch = useDispatch();

  const [keywords, setKeyword] = useState("");

  const InputKeywords = {
    keywords,
    saleOptions: "",
    propertyType: "",
    unitType: "",
    paymentMethod: "",
    countBathrooms: 0,
    countBedrooms: 0,
    isFurnished: null,
    finishingOptions: "",
    toPrice: 0,
    fromPrice: 0,
  };
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const page = useSelector((state) => state.Search.page);

  const handelSearchButton = () => {
    dispatch(propertyFromSearch({ InputKeywords, page }));
    onOpenChange(onOpenChange);
    router.push("/search");
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
        backdrop="opaque"
        placement="top"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: -25,
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
              <ModalHeader className="flex flex-col gap-1">Search</ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-2">
                  <Input
                    isClearable
                    placeholder="search by city..."
                    type="search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <Button
                    onClick={handelSearchButton}
                    className="w-[20p] h-[20px] bg-lightOrange py-5 text-white font-bold"
                  >
                    بحث
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
