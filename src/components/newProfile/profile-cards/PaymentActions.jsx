import ReactModal from "@/Shared/ui/ReactModal";
import { useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { useSelector } from "react-redux";
import { TiPinOutline } from "react-icons/ti";
import NoPackageModal from "./modals/NoPackageModal";
import FeatureLimitModal from "./modals/FeatureLimitModal";
import ConfirmPin from "./modals/ConfirmPin";
import ConfirmRepost from "./modals/ConfirmRepost";
import { useUser } from "@/Shared/UserContext";
const PaymentActions = ({ propId, getProperties, disabled }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data: userData } = useUser();
  const [noPackage, setNoPackage] = useState(false);
  const [reachedLimit, setReachedLimit] = useState(false);
  const [confirtmRepost, setConfirmRepost] = useState(false);
  const [confirtmPin, setConfirmPin] = useState(false);
  const hasRepost = userData?.propertyFeature?.includes("Repost");

  const handleRepostClick = () => {
    if (!userData?.packageSubscribe) {
      setNoPackage(true);
      // setNoRepost(true);
    } else if (userData?.repostPropertyNumber == 0) {
      setReachedLimit(true);
    } else {
      setConfirmRepost(true);
    }
  };
  const handlePinClick = () => {
    if (!userData?.packageSubscribe) {
      setNoPackage(true);
    } else if (userData?.pinPropertyNumber == 0) {
      setReachedLimit(true);
    } else {
      setConfirmPin(true);
    }
  };
  return (
    <>
      <div className={`flex gap-2 items-center  ${disabled && "opacity-60"}`}>
        <button
          disabled={disabled}
          onClick={handlePinClick}
          className="w-full text-center border-2 py-2 rounded-md bg-lightGreen text-white border-lightGreen flex justify-center items-center gap-2"
        >
          {language ? "تثبيت" : "Pin"}
          <TiPinOutline />
        </button>
        {hasRepost && (
          <button
            disabled={disabled}
            onClick={handleRepostClick}
            className="w-full text-center border-2 py-2 rounded-md bg bg-white text-lightGreen flex items-center gap-2 justify-center"
          >
            {language ? "إعادة نشر" : "Repost"}
            <BsArrowRepeat />
          </button>
        )}
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
      <ConfirmPin
        getProperties={getProperties}
        setIsOpen={setConfirmPin}
        open={confirtmPin}
        propId={propId}
      />
      {/* confirm modal repost */}
      <ConfirmRepost
        getProperties={getProperties}
        setIsOpen={setConfirmRepost}
        open={confirtmRepost}
        propId={propId}
      />
    </>
  );
};
export default PaymentActions;
