import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "@/Shared/ui/Button";

export default function SearchModel() {
  let languageIs = useSelector((state) => state.GlobalState.languageIs);

  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handelSearchButton = (e) => {
    e.preventDefault();

    router.push(
      `/properties/residential/search?page=1${
        searchKeyword && `&keyword=${searchKeyword}`
      }`
    );
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="text-lightGreen text-xl 2xl:text-2xl hidden md:block"
      >
        <AiOutlineSearch />
      </button>
      <Modal
        size="5xl"
        backdrop="opaque"
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
        <ModalContent className="">
          {() => (
            <>
              <ModalHeader className="flex flex-col  ">
                {languageIs ? "بحث" : "Search"}
              </ModalHeader>
              <ModalBody className={``} dir={languageIs && "rtl"}>
                <form
                  onSubmit={handelSearchButton}
                  className="flex   gap-x-10 items-center"
                >
                  <Button type="submit" className="max-w-[150px] ">
                    {languageIs ? "بحث" : "Search"}
                  </Button>
                  <div className="flex h-[34] md:h-[3.313rem] w-full p-1 border-gray1 border-1 items-center rounded-[6px] bg-white ">
                    <input
                      name="keywords"
                      className=" w-full h-full focus:outline-none indent-5"
                      type="text"
                      onChange={(e) =>
                        setSearchKeyword(
                          e.target.value.trim().split(" ").join("_")
                        )
                      }
                      placeholder={
                        languageIs ? "كلمات مميزة " : "spacial keywords"
                      }
                    />
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
