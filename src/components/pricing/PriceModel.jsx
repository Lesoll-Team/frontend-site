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
      <div className="w-screen  px-3 sm:h-fit py-2 pt-5 md:pt-2 relative overflow-auto  sm:w-[80vw] md:w-[500px] space-y-4">
        <div className="flex justify-between items-center px-1">
          <h2>{language ? "الدفع من خلال" : "Payment method"}</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaXmark />
          </button>
        </div>

        <div className=" flex flex-col gap-3   h-full justify-center items-center">
          <div className="flex gap-5 w-full  justify-center">
            <button
              onClick={() => setButtonTarget("card")}
              className={`${buttonTarget == "card" && "border-2 border-[#309DA0] "} bg-[#F2F8F9] flex flex-col justify-center items-center  rounded-[6px] w-6/12 h-52`}
            >
              <div className="flex w-full gap-2  h-20 justify-center  items-center">
                <Image
                  loading="lazy"
                  src={"/price/meeza-logo.png"}
                  alt="meeza logo"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                />
                <Image
                  loading="lazy"
                  src={"/price/visa-logo.png"}
                  alt="visa logo"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                />

                <Image
                  loading="lazy"
                  src={"/price/MasterCard_Logo.png"}
                  alt="master logo"
                  width={50}
                  height={50}
                  className="w-[50px] h-[30px]"
                />
              </div>
              <span className="font-bold text-darkGray md:text-2xl w-full  h-16 items-center justify-center lg-text flex ">
                {language ? "حساب بنكي" : "Bank account"}
              </span>
            </button>
            <button
              onClick={() => setButtonTarget("wallet")}
              className={`${buttonTarget == "wallet" && "border-2 border-[#309DA0] "} bg-[#F2F8F9] flex flex-col justify-center items-center  rounded-[6px] w-6/12 h-52`}
            >
              <div className="flex w-full gap-2 h-20 justify-center  ">
                <Image
                  loading="lazy"
                  src={"/price/wallet-logo.svg"}
                  alt="vodafone logo"
                  width={100}
                  height={100}
                  className="w-[75px] h-[75px]"
                />
              </div>
              <span className="font-bold text-darkGray md:text-2xl w-full items-center justify-center    h-16 lg-text flex ">
                {language ? "محفظة الكترونية" : "Electronic wallet"}
              </span>
            </button>
          </div>

          <button
            onClick={handlePaymentSelection}
            className=" bg-lightGreen text-white font-semibold w-6/12 h-[48px] rounded-[6px]"
          >
            التالي
          </button>
        </div>
      </div>
    </ReactModal>
  );
};
export default PriceModel;
