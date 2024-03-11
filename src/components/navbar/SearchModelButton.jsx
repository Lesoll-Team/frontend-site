import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

export default function SearchModelButton({ setOpen, isOpen }) {
  return (
    <button
      onClick={() => setOpen(!isOpen)}
      className="text-lightGreen text-xl 2xl:text-2xl "
    >
      <AiOutlineSearch />
    </button>
  );
}
/**
 *   <Modal
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
 */
