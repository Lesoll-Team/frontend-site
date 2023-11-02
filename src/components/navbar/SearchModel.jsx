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
import {  useSelector } from "react-redux";

export default function SearchModel() {
  // const dispatch = useDispatch();

  const [keywords, setKeyword] = useState("");
  let languageIs = useSelector((state) => state.GlobalState.languageIs);

  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const page = useSelector((state) => state.Search.page);
  let [locationKeyword, setLocationKeyword] = useState("");
  const handelSearchButton = (e) => {
    e.preventDefault();
    const InputKeywords = {cdb:locationKeyword,keywords};
    const filteredKeywords = Object.fromEntries(
      Object.entries(InputKeywords).filter(
        ([_, value]) => value != null && value !== "" && value !== 0
      )
    );
    const queryString = Object.keys(filteredKeywords)
      .map((key) => `${key}=${encodeURIComponent(filteredKeywords[key])}`)
      .join("&");

    onOpenChange(onOpenChange);
    // console.log(queryString);
    if (queryString=="") {
      router.push(`/searching/offer=all`);
    }else router.push(`/searching/${queryString}`);
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
                <form
                  onSubmit={handelSearchButton}
                  className="flex items-center gap-2"
                >
                  <div className="w-full   grid lg:grid-cols-3 grid-cols-1 gap-y-3 gap-x-2">
                    <Input
                      // id="search"
                      dir={languageIs ? "rtl" : "ltr"}
                      className="border-2 lg:col-span-2 col-span-1 border-default-100 rounded-large  shadow-sm"
                      size="md"
                      name="Search"
                      isClearable
                      placeholder={
                        languageIs
                          ? " كلمات بحث مثلا: شاطئ ،للايجار اليومى ,ارض ... "
                          : "Search by Keywords: e.g. beach, for daily rent, land..."
                      }
                      value={keywords}
                      onValueChange={setKeyword}
                    />
                    <Input
                      // id="search"
                      dir={languageIs ? "rtl" : "ltr"}
                      className=" border-2 col-span-1 border-default-100   rounded-large shadow-sm  "
                      size="md"
                      name="Search"
                      isClearable
                      placeholder={
                        languageIs
                          ? "  المدينة أو البلدة أو الحي : الجيزة , مدينة نصر ,القاهرة , المعادى ... "
                          : "Search by City, town, or neighborhood: Giza, Nasr City, Cairo, Maadi..."
                      }
                      value={locationKeyword}
                      onValueChange={setLocationKeyword}
                    />
                  </div>
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
