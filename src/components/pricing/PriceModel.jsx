import { useSelector } from "react-redux";
import { FaXmark } from "react-icons/fa6";
import ReactModal from "@/Shared/ui/ReactModal";
import Image from "next/image";
import { useState } from "react";
import {
  buyPackageActionWithCard,
  buyPackageActionWithWallet,
} from "@/utils/PricingAPI";
import { useRouter } from "next/router";
const PriceModel = ({ isOpen, setIsOpen, id }) => {
  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [buttonTarget, setButtonTarget] = useState("");
  const handlePaymentSelection = () => {
    if (buttonTarget === "card") {
      buyPackageActionWithCard({ id }).then((data) => {
        router.push(data.link);
        setIsOpen(false);
      });
    } else if (buttonTarget === "wallet") {
      buyPackageActionWithWallet({ id }).then((data) => {
        router.push(data.link);
        setIsOpen(false);
      });
    }
  };
  return (
    <ReactModal
      modalIsOpen={isOpen}
      setModalIsOpen={setIsOpen}
      closeBtn={false}
    >
      <div className="w-[70vw] md:w-[500px] sm:h-fit  px-3 py-2 pt-5 md:pt-2 relative overflow-auto  space-y-4">
        <div className="flex justify-between items-center px-1">
          <h2>{language ? "الدفع من خلال" : "Payment method"}</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaXmark />
          </button>
        </div>

        <div className=" flex flex-col gap-3   h-full justify-center items-center">
          <div className="flex md:flex-row flex-col md:gap-5 gap-3 w-full  justify-center md:items-center">
            <button
              onClick={() => setButtonTarget("card")}
              className={`${buttonTarget == "card" && "border-3 border-[#309DA0] animate-appearance-in"} bg-[#F2F8F9] flex flex-row md:flex-col md:space-y-2 justify-center items-center p-3 md:p-0 rounded-[6px] md:w-6/12 w-full md:h-[120px] `}
            >
              <Image
                loading="lazy"
                src={"/price/credit-card.svg"}
                alt="credit card logo"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
              <span
                className={`${buttonTarget == "card" ? " text-[#309DA0] " : "text-darkGray"} font-bold   w-full   items-center justify-center text-[17px] md:text-[19px] flex`}
              >
                {language ? "بطاقة ائتمانية" : "Credit card"}
              </span>
            </button>
            <button
              onClick={() => setButtonTarget("wallet")}
              className={`${buttonTarget == "wallet" && "border-3 border-[#309DA0] animate-appearance-in"} bg-[#F2F8F9] flex flex-row md:flex-col md:space-y-2 justify-center items-center p-3 md:p-0 rounded-[6px] md:w-6/12 w-full md:h-[120px]`}
            >
              <Image
                loading="lazy"
                src={"/price/wallet-logo.svg"}
                alt="wallet logo"
                width={32}
                height={32}
                className="w-[32px] h-[32px] "
              />
              <span
                className={`${buttonTarget == "wallet" ? " text-[#309DA0] " : "text-darkGray"} font-bold   w-full   items-center justify-center text-[17px] md:text-[19px] flex`}
              >
                {language ? "محفظة الكترونية" : "Electronic wallet"}
              </span>
            </button>
          </div>

          <button
            onClick={handlePaymentSelection}
            className=" bg-lightGreen text-white font-semibold w-6/12 md:h-[48px] h-[40px] mt-3 rounded-[6px]"
          >
            التالي
          </button>
        </div>
      </div>
    </ReactModal>
  );
};
export default PriceModel;
