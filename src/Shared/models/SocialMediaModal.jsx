import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { LuClipboardCopy } from "react-icons/lu";
import { BiCopy } from "react-icons/bi";

export default function SocialMediaModal({ children, title, slug }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  //   const url = window.location.href;
  const copyLinkPage = () => {
    const urlToCopy = `https://lesoll.com/property-details/${slug}`;
    navigator.clipboard.writeText(urlToCopy);
  };
  const shareOnTwitter = () => {
    const navUrl =
      "https://twitter.com/intent/tweet?text=" +
      `https://lesoll.com/property-details/${slug}`;
    window.open(navUrl, "_blank");
  };
  const shareOnFacebook = () => {
    const navUrl =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      `https://lesoll.com/property-details/${slug}`;
    window.open(navUrl, "_blank");
  };
  return (
    <div dir="rtl" className="flex flex-col gap-2 ">
      <div onClick={onOpen}>{children}</div>
      <Modal
        isOpen={isOpen}
        placement={"bottom-center"}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody className="mb-5">
                <div className="flex items-center justify-center gap-8 text-4xl ">
                  <BsFacebook
                    onClick={shareOnFacebook}
                    className="text-[#0165E1] cursor-pointer"
                  />
                  <a
                    href={`whatsapp://send?text=https://lesoll.com/property-details/${slug}`}
                  >
                    <BsWhatsapp className="text-[#25D366] cursor-pointer" />
                  </a>

                  <BsTwitter
                    onClick={shareOnTwitter}
                    className="text-[#1DA1F2] cursor-pointer"
                  />
                  <BiCopy
                    onClick={() => {
                      copyLinkPage();
                      onClose();
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
