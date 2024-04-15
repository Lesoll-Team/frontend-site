import ReactModal from "@/Shared/ui/ReactModal";
import { useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { useSelector } from "react-redux";
import { TiPinOutline } from "react-icons/ti";
import NoPackageModal from "./modals/NoPackageModal";
import FeatureLimitModal from "./modals/FeatureLimitModal";
const PaymentActions = ({ propId, getProperties }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  console.log(userData);
  const [noPackage, setNoPackage] = useState(false);
  const [reachedLimit, setReachedLimit] = useState(false);
  const [confirtmRepost, setConfirmRepost] = useState(false);

  const handleRepostClick = () => {
    if (!userData?.packageSubscribe) {
      setNoPackage(true);
      // setNoRepost(true);
    } else if (userData?.repostPropertyNumber == 0) {
      setReachedLimit(true);
    }
  };
  const handlePinClick = () => {
    if (!userData?.packageSubscribe) {
      setNoPackage(true);
    } else if (userData?.pinPropertyNumber == 0) {
      setReachedLimit(true);
    }
  };
  return (
    <>
      <div className="flex gap-2 items-center ">
        <button
          onClick={handlePinClick}
          className="w-full text-center border-2 py-2 rounded-md bg-lightGreen text-white border-lightGreen flex justify-center items-center gap-2"
        >
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
      {/* confirm modal repost */}
    </>
  );
};
export default PaymentActions;
