import { useSelector } from "react-redux";
import ImageSuccess from "./success/ImageSuccess";
import PaymentDetails from "./success/PaymentDetails";
import HeadTitle from "./success/HeadTitle";
import TimeAndButton from "./success/TimeAndButton";
import ImageFailed from "./failed/ImageFailed";
import HeadTitleFailed from "./failed/HeadTitleFailed";
import HentDetailsError from "./failed/HentDetailsError";
import TryButtonFailed from "./failed/TryButtonFailed";

const MessagePay = ({ info }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className=" min-h-[75dvh]  md:container md:mx-auto mx-[20px]  my-10 ">
      {info.status == "success" ? <ImageSuccess /> : <ImageFailed />}

      <div className="bg-[#F8F8F8] p-6 w-full   md:mx-auto">
        <div className="text-center flex flex-col pt-20 items-center">
          {info.status == "success" ? (
            <HeadTitle language={language} />
          ) : (
            <HeadTitleFailed language={language} />
          )}
          {info.status == "success" ? (
            <PaymentDetails info={info} language={language} />
          ) : (
            <HentDetailsError language={language} />
          )}

          {info.status == "success" ? (
            <TimeAndButton language={language} info={info} />
          ) : (
            <TryButtonFailed info={info} language={language} />
          )}
        </div>
      </div>
    </div>
  );
};
export default MessagePay;