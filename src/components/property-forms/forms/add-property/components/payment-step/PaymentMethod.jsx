import Image from "next/image";
import { useSelector } from "react-redux";
import AddPropSectionContainer from "../AddPropSectionContainer";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Error from "@/Shared/ui/Error";

const PaymentMethod = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <AddPropSectionContainer
      className={`flex flex-col ${errors?.paymentMethod && "border border-red-500"}`}
    >
      <h3>{language ? "طريقة الدفع" : "Payment method"}</h3>
      <button
        type="button"
        onClick={() => {
          setValue("paymentMethod", "card");
          clearErrors("paymentMethod");
        }}
        // key={item._id}
        className={`bg-white p-4 rounded-md border flex items-center justify-between gap-2 ${watch("paymentMethod") === "card" && "border-lightGreen"}`}
      >
        <div className="flex items-center gap-2">
          <Image
            loading="lazy"
            src={"/price/credit-card.svg"}
            alt="credit card logo"
            width={32}
            height={32}
            className="w-[32px] h-[32px]"
          />{" "}
          <p>{language ? "بطاقة ائتمانية" : "Credit card"}</p>
        </div>
        {watch("paymentMethod") === "card" ? (
          <IoIosRadioButtonOn className="text-2xl text-lightGreen" />
        ) : (
          <IoIosRadioButtonOff className="text-2xl text-outLine" />
        )}
      </button>
      <button
        type="button"
        onClick={() => {
          setValue("paymentMethod", "wallet");
          clearErrors("paymentMethod");
        }}
        // key={item._id}
        className={`bg-white p-4 rounded-md border flex items-center justify-between gap-2 ${watch("paymentMethod") === "wallet" && "border-lightGreen"}`}
      >
        <div className="flex items-center gap-2">
          <Image
            loading="lazy"
            src={"/price/wallet-logo.svg"}
            alt="credit card logo"
            width={32}
            height={32}
            className="w-[32px] h-[32px]"
          />{" "}
          <p>{language ? " محفظة إلكترونية" : "Electronic wallet"}</p>
        </div>
        {watch("paymentMethod") === "wallet" ? (
          <IoIosRadioButtonOn className="text-2xl text-lightGreen" />
        ) : (
          <IoIosRadioButtonOff className="text-2xl text-outLine" />
        )}
      </button>
      <input
        hidden
        {...register("paymentMethod", {
          required: {
            value: true,
            message: language
              ? "أختر طريقة الدفع"
              : " Please select payment method",
          },
        })}
      />
      {errors?.paymentMethod && <Error>{errors?.paymentMethod.message}</Error>}
    </AddPropSectionContainer>
  );
};
export default PaymentMethod;
