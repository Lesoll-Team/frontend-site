import { useUser } from "@/Shared/UserContext";
import PropertyImages from "../imgs/PropertyImages";
import SubscribedOptions from "./SubscribedOptions";

// import PropertyImages from "/"
const ImagesStep = ({ errors, register, setValue, watch, clearErrors }) => {
  const { data: userData } = useUser();
  const userHavePackage =
    userData?.packageSubscribe && userData?.pinPropertyNumber;
  return (
    <div>
      <PropertyImages
        clearErrors={clearErrors}
        watch={watch}
        setValue={setValue}
        errors={errors}
        register={register}
      />
      {userHavePackage && (
        <SubscribedOptions
          clearErrors={clearErrors}
          watch={watch}
          setValue={setValue}
          errors={errors}
          register={register}
        />
      )}
    </div>
  );
};

export default ImagesStep;
