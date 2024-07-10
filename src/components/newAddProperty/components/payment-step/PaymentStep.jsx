import { useSelector } from "react-redux";
import AddPropSectionContainer from "../AddPropSectionContainer";
import { useEffect, useState } from "react";
import { getPackagesInAddProperty } from "../../apis/addEditPropertyApis";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Error from "@/Shared/ui/Error";
import PaymentMethod from "./PaymentMethod";
import { useUser } from "@/Shared/UserContext";
import PlanCard from "./PlanCard";
import PlanCardSkeleton from "./PlanCardSkeleton";
import SubscribedOptions from "../SubscribedOptions";

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
        <div className="gap-y-4 w-full flex flex-col">
          <SubscribedOptions
            clearErrors={clearErrors}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
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
