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
import ConfirmPinHome from "./modals/ConfirmPinHome";
const PaymentActions = ({ propId, getProperties, disabled }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data: userData } = useUser();
  const [noPackage, setNoPackage] = useState(false);
  const [reachedLimit, setReachedLimit] = useState(false);
  const [confirtmRepost, setConfirmRepost] = useState(false);
  const [confirtmPin, setConfirmPin] = useState(false);
  const [confirtmPinHome, setConfirmPinHome] = useState(false);
  const hasRepost = userData?.propertyFeature?.includes("Repost");
  const hasPinHome = userData?.propertyFeature?.includes("pinPropertyHomePage");
  console.log(userData?.propertyFeature);
  console.log(hasPinHome);

  const handleRepostClick = () => {
    if (!userData?.packageSubscribe) {
      setNoPackage(true);
    } else if (hasRepost) {
      if (userData?.packagePropertyNumber == 0) {
        setReachedLimit(true);
      } else {
        setConfirmRepost(true);
      }
    }
  };
  const handlePinHome = () => {
    if (!userData?.packageSubscribe) {
      setNoPackage(true);
    } else if (hasPinHome) {
      if (userData?.packagePropertyNumber == 0) {
        setReachedLimit(true);
      } else {
        setConfirmPinHome(true);
      }
    }
  };
  const handlePinClick = () => {
    if (!userData?.packageSubscribe) {
      setNoPackage(true);
    } else if (userData?.packagePropertyNumber == 0) {
      setReachedLimit(true);
    } else {
      setConfirmPin(true);
    }
  };
  return (
    <div className="space-y-2">
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
      {hasPinHome && (
        <div className="flex w-full">
          <button
            disabled={disabled}
            onClick={handlePinHome}
            className="w-full text-center border-2 py-2 rounded-md bg bg-white text-lightGreen flex items-center gap-2 justify-center"
          >
            {language ? "تثبيت فى الصفحة الرئيسية" : "Pin to Home Page "}
          </button>
        </div>
      )}
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
      <ConfirmPinHome
        getProperties={getProperties}
        setIsOpen={setConfirmPinHome}
        open={confirtmPinHome}
        propId={propId}
      />
    </div>
  );
};
export default PaymentActions;
