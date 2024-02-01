import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import {
  shareFacebookBtn,
  shareOtherBtn,
  shareTwitterBtn,
  shareWhatsappBtn,
} from "@/utils/propertyAPI";

export default function SocialMediaModal({ children, title, slug, id }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  //   const url = window.location.href;
  const copyLinkPage = () => {
    const urlToCopy = `https://lesoll.com/property-details/${slug}`;
    navigator.clipboard.writeText(urlToCopy);
  };
  const shareOnTwitter = () => {
    shareTwitterBtn(id);
    const navUrl =
      "https://twitter.com/intent/tweet?text=" +
      `https://lesoll.com/property-details/${slug}`;
    window.open(navUrl, "_blank");
  };
  const shareOnFacebook = () => {
    shareFacebookBtn(id);
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
                    onClick={() => {
                      shareWhatsappBtn(id);
                    }}
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
                      shareOtherBtn(id);
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
