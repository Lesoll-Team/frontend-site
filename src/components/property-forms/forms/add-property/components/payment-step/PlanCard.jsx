import React from "react";
import {
  IoIosRadioButtonOff,
  IoIosRadioButtonOn,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";
import { useSelector } from "react-redux";

const PlanCard = ({ item, setValue, clearErrors, selected }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <button
      type="button"
      onClick={() => {
        setValue("packId", item._id);
        setValue("adType", "paid");
        clearErrors("adType");
      }}
      className={`bg-white p-4 rounded-md space-y-4 border ${selected && "border-lightGreen"}`}
    >
      <div className="flex items-center justify-between gap-2 ">
        <div className="flex items-center gap-2">
          {selected ? (
            <IoIosRadioButtonOn className="text-2xl text-lightGreen" />
          ) : (
            <IoIosRadioButtonOff className="text-2xl text-outLine" />
          )}{" "}
          <p>{language ? item.PaymentAr : item.PaymentEn}</p>
        </div>
        <p>
          {item.price} {language ? "جنية" : "Egp"}
        </p>
      </div>
      <div className="space-y-2">
        {item?.service?.map((service) => {
          return (
            <div
              className="flex items-start justify-start gap-2"
              key={service._id}
            >
              <IoMdCheckmarkCircleOutline className="text-xl text-green-400" />
              <p className="text-start">
                {language ? service.nameAr : service.nameEn}
              </p>
            </div>
          );
        })}
      </div>
    </button>
  );
};

export default PlanCard;
