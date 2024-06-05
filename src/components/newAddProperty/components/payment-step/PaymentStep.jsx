import { useSelector } from "react-redux";
import AddPropSectionContainer from "../AddPropSectionContainer";
import { useEffect, useState } from "react";
import { getPackagesInAddProperty } from "../../apis/addEditPropertyApis";
import {
  IoIosRadioButtonOff,
  IoIosRadioButtonOn,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";
import Error from "@/Shared/ui/Error";
import { buyPackageActionWithCard } from "@/utils/PricingAPI";
import { useRouter } from "next/router";
import PaymentMethod from "./PaymentMethod";
import { useUser } from "@/Shared/UserContext";
import PlanCard from "./PlanCard";
import PlanCardSkeleton from "./PlanCardSkeleton";

const PaymentStep = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [packages, setPackages] = useState();
  const [apiStatus, setApiStatus] = useState();
  const [serverError, setServerError] = useState();
  useEffect(() => {
    if (!packages) {
      getPackagesInAddProperty({ setPackages, setApiStatus, setServerError });
    }
  }, []);
  const { data: userData } = useUser();
  return (
    <div className="space-y-6">
      <AddPropSectionContainer
        className={`flex flex-col ${errors?.adType && "border border-red-500"} `}
      >
        <h2>{language ? "أختر نوع الإعلان" : "Choose ad type"}</h2>
        <div className="gap-y-4 w-full flex flex-col">
          <button
            type="button"
            onClick={() => {
              setValue("packId", "");
              setValue("adType", "free");
              clearErrors("adType");
            }}
            disabled={userData.propertyPackageNumber == 0}
            // key={item._id}
            className={`bg-white p-4 rounded-md border flex-wrap disabled:opacity-60 flex gap-2 justify-between ${watch("adType") === "free" && "border-lightGreen"}`}
          >
            <div className="flex items-center gap-2">
              {watch("adType") === "free" ? (
                <IoIosRadioButtonOn className="text-2xl text-lightGreen" />
              ) : (
                <IoIosRadioButtonOff className="text-2xl text-outLine" />
              )}{" "}
              <p>{language ? "مجانى" : "Free"}</p>
            </div>
            <p>
              {language ? "متبقى لديك" : "You have"}{" "}
              {userData.propertyPackageNumber}{" "}
              {language ? "إعلانات مجانية" : "free ad left"}
            </p>
          </button>
          <h3>{language ? "الباقات" : "Packages"}</h3>{" "}
          {packages ? (
            packages?.map((item) => {
              const selected = watch("packId") === item._id;
              return (
                <PlanCard
                  clearErrors={clearErrors}
                  selected={selected}
                  item={item}
                  setValue={setValue}
                  key={item._id}
                />
              );
            })
          ) : (
            <>
              <PlanCardSkeleton />
              <PlanCardSkeleton />
              <PlanCardSkeleton />
            </>
          )}
          <input
            hidden
            {...register("adType", {
              required: {
                value: true,
                message: language
                  ? "أختر نوع الإعلان"
                  : " Please select the ad type",
              },
            })}
          />
          {errors?.adType && <Error>{errors?.adType.message}</Error>}
        </div>
      </AddPropSectionContainer>
      {watch("adType") === "paid" && (
        <PaymentMethod
          clearErrors={clearErrors}
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
        />
      )}
    </div>
  );
};

export default PaymentStep;
