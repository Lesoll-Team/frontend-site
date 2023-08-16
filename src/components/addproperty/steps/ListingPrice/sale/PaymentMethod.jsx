import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const PaymentMethod = (props) => {
  const setPaymentMethod = props.setPaymentMethod;
  const paymentMethod = props.paymentMethod;
  const [paymentMethodMenu, setPaymentMethodMenu] = useState("");

  const handlePaymentMethod = () => {
    setPaymentMethodMenu(!paymentMethodMenu);
  };

  const paymentMethodButtonRef = useRef(null); // Ref for the payment method button

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        paymentMethodButtonRef.current &&
        !paymentMethodButtonRef.current.contains(event.target)
      ) {
        setPaymentMethodMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className={`relative w-full`}>
      <h3 className="text-xl text-darkGreen font-semibold mb-2">
        Payment Method
      </h3>
      <button
        ref={paymentMethodButtonRef}
        onClick={handlePaymentMethod}
        className="w-full font-semibold text-darkGreen md:text-lg flex items-center justify-between gap-6 focus:outline-none bg-white  border-lightGreen rounded-xl p-4 drop-shadow-xl  whitespace-nowrap"
      >
        {paymentMethod || "Payment Method"}
        <AiFillCaretDown className="text-darkGreen" />
      </button>
      {paymentMethodMenu && (
        <div
          className={`absolute z-10 w-full  mt-1 bg-white duration-200 drop-shadow-2xl border rounded-xl `}
        >
          <p
            onClick={() => setPaymentMethod("Cash")}
            className="text-lg font-semibold text-darkGreen py-2 px-3  duration-200  "
          >
            Cash
          </p>
          <p
            onClick={() => setPaymentMethod("Installment")}
            className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
          >
            Installment
          </p>
          <p
            onClick={() => setPaymentMethod("Cash & Installment")}
            className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
          >
            Cash & Installment
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
