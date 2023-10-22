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
// import {
//   propertyFromSearch,
//   setInputKeywords,
// } from "@/redux-store/features/searchSlice";
// import { useDispatch, useSelector } from "react-redux";

export default function SearchModel() {
  // const dispatch = useDispatch();

  const [keywords, setKeyword] = useState(" ");

  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const page = useSelector((state) => state.Search.page);

  const handelSearchButton = (e) => {
    e.preventDefault();
    // const InputKeywords = {
    //   keywords,
    // };
    // dispatch(propertyFromSearch({ InputKeywords, page: 1 }));
    // dispatch(setInputKeywords(InputKeywords));

    onOpenChange(onOpenChange);
    // if (keywords==="") {
    // router.push(`/searching/offer=r`);
      
    // }
    router.push(`/searching/keywords=${keywords}`);
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
              <ModalHeader className="flex flex-col gap-1">Search</ModalHeader>
              <ModalBody>
                <form onSubmit={handelSearchButton} className="flex items-center gap-2">
                  <Input
                    isClearable
                    placeholder="search by city..."
                    type="search"
                    name="search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <Button
                    // onClick={handelSearchButton}
                    type="submit"
                    className="w-[20p] h-[20px] bg-lightOrange py-5 text-white font-bold"
                  >
                    بحث
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
