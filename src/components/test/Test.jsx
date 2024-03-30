import NotSignUpModal from "@/Shared/contact-modals/NotSignedModal";
import ReactModal from "@/Shared/ui/ReactModal";
import { useState } from "react";

const Test = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <NotSignUpModal />
    </div>
  );
};
export default Test;
