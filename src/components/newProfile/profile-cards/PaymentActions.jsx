import { useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { useSelector } from "react-redux";
import { TiPinOutline } from "react-icons/ti";
import NoPackageModal from "./modals/NoPackageModal";
import FeatureLimitModal from "./modals/FeatureLimitModal";
import ConfirmPin from "./modals/ConfirmPin";
import ConfirmRepost from "./modals/ConfirmRepost";
import { useUser } from "@/Shared/UserContext";
import ConfirmWhereToPin from "./modals/confirm-pin/ConfirmWhereToPin";
import usePackageData from "../utils/usePackageData";
const PaymentActions = ({ data, propId, getProperties, disabled }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data: userData } = useUser();
  const [noPackage, setNoPackage] = useState(false);
  const [reachedLimit, setReachedLimit] = useState(false);
  const [confirmRepost, setConfirmRepost] = useState(false);
  const [confirmPin, setConfirmPin] = useState(false);
  const [confirmWhereToPin, setConfirmWhereToPin] = useState(false);
  const {
    haveRepost,
    pinText,
    disablePin,
    disableRepost,
    openWherePinModal,
    repostText,
  } = usePackageData(data);

  const handleRepostClick = () => {
    if (!userData?.packageSubscribe) {
      setNoPackage(true);
    } else if (haveRepost) {
      if (userData?.packagePropertyNumber == 0) {
        setReachedLimit(true);
      } else {
        setConfirmRepost(true);
      }
    }
  };

  const handlePinClick = () => {
    if (!userData?.packageSubscribe) {
      setNoPackage(true);
    } else if (userData?.packagePropertyNumber == 0) {
      setReachedLimit(true);
    } else {
      if (openWherePinModal) {
        setConfirmWhereToPin(true);
      } else {
        setConfirmPin(true);
      }
    }
  };

  return (
    <div className="space-y-2">
      <div className={`flex flex-col gap-2 items-center  `}>
        <button
          disabled={disablePin}
          onClick={handlePinClick}
          className="w-full text-center disabled:opacity-60 border-2 py-2 rounded-md bg-lightGreen text-white border-lightGreen flex justify-center items-center gap-2"
        >
          {pinText}
          <TiPinOutline />
        </button>
        {haveRepost && (
          <button
            disabled={disableRepost}
            onClick={handleRepostClick}
            className="w-full text-center border-2 disabled:opacity-60 py-2 rounded-md bg bg-white text-lightGreen flex items-center gap-2 justify-center"
          >
            {repostText}
            <BsArrowRepeat />
          </button>
        )}
      </div>

      <NoPackageModal setIsOpen={setNoPackage} open={noPackage} />
      {/* no pin or repost  */}
      <FeatureLimitModal open={reachedLimit} setIsOpen={setReachedLimit} />
      {/* confirm modal pin */}
      <ConfirmPin
        getProperties={getProperties}
        setIsOpen={setConfirmPin}
        open={confirmPin}
        propId={propId}
      />
      {/* confirm modal repost */}
      <ConfirmRepost
        getProperties={getProperties}
        setIsOpen={setConfirmRepost}
        open={confirmRepost}
        propId={propId}
      />
      <ConfirmWhereToPin
        OnSuccess={getProperties}
        setIsOpen={setConfirmWhereToPin}
        isOpen={confirmWhereToPin}
        propId={propId}
        isPinHome={data?.makePinHome}
        isPinSearch={data?.makePin}
        // isRepost={data?.makerepost}
      />
    </div>
  );
};
export default PaymentActions;
