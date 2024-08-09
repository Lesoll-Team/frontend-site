import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import Error from "@/Shared/ui/Error";
import Image from "next/image";
import React from "react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { useSelector } from "react-redux";

const PaymentMethod = () => {
  const { setValue, watch, clearErrors, loading, register, errors } =
    useAddMotorContext();
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-4 w-full">
      <p className="font-bold">{language ? "طريقة الدفع" : "payment Method"}</p>{" "}
      <button
        disabled={loading}
        type="button"
        onClick={() => {
          setValue("paymentMethod", "card");
          clearErrors("paymentMethod");
        }}
        // key={item._id}
        className={`bg-white w-full p-4 rounded-md border flex items-center disabled:opacity-70 justify-between gap-2 ${watch("paymentMethod") === "card" && "border-lightGreen"}`}
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
          <p
            className={` font-bold ${watch("paymentMethod") === "card" && "text-lightGreen"}`}
          >
            {language ? "بطاقة ائتمانية" : "Credit card"}
          </p>
        </div>
        {watch("paymentMethod") === "card" ? (
          <IoIosRadioButtonOn className="text-2xl text-lightGreen" />
        ) : (
          <IoIosRadioButtonOff className="text-2xl text-outLine" />
        )}
      </button>
      <button
        disabled={loading}
        type="button"
        onClick={() => {
          setValue("paymentMethod", "wallet");
          clearErrors("paymentMethod");
        }}
        // key={item._id}
        className={`bg-white p-4 rounded-md w-full border flex items-center disabled:opacity-70 justify-between gap-2 ${watch("paymentMethod") === "wallet" && "border-lightGreen"}`}
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
          <p
            className={` font-bold ${watch("paymentMethod") === "wallet" && "text-lightGreen"}`}
          >
            {language ? " محفظة إلكترونية" : "Electronic wallet"}
          </p>
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
    </div>
  );
};

export default PaymentMethod;
