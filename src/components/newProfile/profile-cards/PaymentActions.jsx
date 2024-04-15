import ReactModal from "@/Shared/ui/ReactModal";
import { useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { useSelector } from "react-redux";
import { TiPinOutline } from "react-icons/ti";
import NoPackageModal from "./modals/NoPackageModal";
import { FeatureGroup } from "react-leaflet";
import FeatureLimitModal from "./modals/FeatureLimitModal";
const PaymentActions = ({ propId, getProperties }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  console.log(userData);
  const [noPackage, setNoPackage] = useState(false);
  const [reachedLimit, setReachedLimit] = useState(false);
  const [confirtmRepost, setConfirmRepost] = useState(false);
  const [confirmPin, setConfirmPin] = useState(false);
  // const handleRepostClick = () => {
  //   if (!userData?.packageSubscribe) {
  //     // setConfirmRepost(true);

  //     setNoPackage(true);
  //     // setNoRepost(true);
  //   } else if (userData?.repostPropertyNumber == 0) {
  //     setReachedLimit(true);
  //   }
  // };
  // const handlePinClick = () => {
  //   if (!userData?.packageSubscribe) {
  //     setNoPackage(true);
  //   } else if (userData?.pinPropertyNumber == 0) {
  //     setReachedLimit(true);
  //   }
  // };
  return (
    <>
      <div className="flex gap-2 items-center ">
        <button
          // onClick={handlePinClick}
          className="w-full text-center border-2 py-2 rounded-md bg-lightGreen text-white border-lightGreen flex justify-center items-center gap-2"
        >
          {language ? "تثبيت" : "Pin"}
          <TiPinOutline />
        </button>

        <button
          // onClick={handleRepostClick}
          className="w-full text-center border-2 py-2 rounded-md bg bg-white text-lightGreen flex items-center gap-2 justify-center"
        >
          {language ? "إعادة نشر" : "Repost"}
          <BsArrowRepeat />
        </button>
      </div>
      {/* no package */}
      {/* <ReactModal setModalIsOpen={setNoRepost} modalIsOpen={noRepost}>
        <div className="md:w-[500px] w-[95vw]">
          <h3>sds</h3>
        </div>
      </ReactModal> */}
      <NoPackageModal setIsOpen={setNoPackage} open={noPackage} />
      {/* no pin or repost  */}
      <FeatureLimitModal open={reachedLimit} setIsOpen={setReachedLimit} />
      {/* confirm modal pin */}
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
      {/* confirm modal repost */}
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
