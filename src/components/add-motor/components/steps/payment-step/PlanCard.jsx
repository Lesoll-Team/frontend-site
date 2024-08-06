import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import React from "react";
import {
  IoIosRadioButtonOff,
  IoIosRadioButtonOn,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";
import { useSelector } from "react-redux";

const PlanCard = ({ item }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { setValue, watch, clearErrors } = useAddMotorContext();
  const selected = item._id === watch("packId");
  const onSelect = () => {
    setValue("packId", item._id);
    setValue("adType", "paid");
    setValue("toPin", "pinPaid");
    clearErrors("adType");
  };
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`bg-white w-full p-4 rounded-md space-y-4 border ${selected && "border-lightGreen"}`}
    >
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-start gap-2 ">
          <div className="w-6">
            {selected ? (
              <IoIosRadioButtonOn className="text-2xl text-lightGreen" />
            ) : (
              <IoIosRadioButtonOff className="text-2xl text-outLine" />
            )}{" "}
          </div>
          <p className="text-start">
            {language ? item.PaymentAr : item.PaymentEn}
          </p>
        </div>
        <p
          className={`${language ? "mr-8" : "ml-8"} text-lightGreen font-bold`}
        >
          {item.price} {language ? "جنية" : "Egp"}
        </p>
      </div>
      <hr />
      <div className="space-y-2">
        {item?.newService?.map((service) => {
          return (
            <div
              className="flex items-start justify-start gap-2"
              key={service._id}
            >
              <div className="w-6">
                <IoMdCheckmarkCircleOutline className="text-xl text-green-400" />
              </div>
              <p className="text-start">{language ? service.ar : service.en}</p>
            </div>
          );
        })}
      </div>
    </button>
  );
};

export default PlanCard;
