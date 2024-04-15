import Button from "@/Shared/ui/Button";
import ReactModal from "@/Shared/ui/ReactModal";
import { useState } from "react";
import { BsArrowRepeat, BsFillPinAngleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { TiPinOutline } from "react-icons/ti";
const PaymentActions = ({ propId, getProperties }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  const [noRepost, setNoRepost] = useState(false);
  const [noPin, setNoPin] = useState(false);
  const [confirtmRepost, setConfirmRepost] = useState(false);
  const [confirmPin, setConfirmPin] = useState(false);
  const handleRepostClick = () => {
    if (userData?.repostPropertyNumber) {
      setConfirmRepost(true);
      // setNoRepost(true);
    }
  };
  return (
    <>
      <div className="flex gap-2 items-center ">
        <button className="w-full text-center border-2 py-2 rounded-md bg-lightGreen text-white border-lightGreen flex justify-center items-center gap-2">
          {language ? "تثبيت" : "Pin"}
          <TiPinOutline />
        </button>

        <button
          onClick={handleRepostClick}
          className="w-full text-center border-2 py-2 rounded-md bg bg-white text-lightGreen flex items-center gap-2 justify-center"
        >
          {language ? "إعادة نشر" : "Repost"}
          <BsArrowRepeat />
        </button>
      </div>
      <ReactModal setModalIsOpen={setNoRepost} modalIsOpen={noRepost}>
        <div className="md:w-[500px] w-[95vw]">
          <h3>sds</h3>
        </div>
      </ReactModal>
      <ReactModal
        setModalIsOpen={setConfirmRepost}
        modalIsOpen={confirtmRepost}
      >
        <div className="md:w-[500px] w-[95vw]  sm:w-[80vw] pt-3">
          <h3>
            {language
              ? "هل انت متأكد من اعادة نشر هذالعقار؟"
              : "Are you sure you want to repost this property?"}
          </h3>
          <div className="flex justify-end">
            <div className="flex items-center gap-2 ">
              <button className="py-2 px-5 rounded bg-lightGreen text-white">
                {language ? "تأكيد" : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};
export default PaymentActions;
