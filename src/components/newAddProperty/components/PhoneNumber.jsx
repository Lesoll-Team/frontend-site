import "react-phone-input-2/lib/style.css";
import { useMemo } from "react";
import { useUser } from "@/Shared/UserContext";
import NoPhoneNumber from "../phone-number/NoPhoneNumber";
import ChangePhoneNumber from "../phone-number/ChangePhoneNumber";
const PhoneNumber = ({ errors, register, setValue, watch, isNeed }) => {
  const { data } = useUser();

  const userWithNoPhone = useMemo(() => {
    return !Boolean(data?.phone);
  }, [data]);

  return userWithNoPhone ? (
    <NoPhoneNumber errors={errors} register={register} setValue={setValue} />
  ) : (
    <ChangePhoneNumber
      errors={errors}
      watch={watch}
      register={register}
      setValue={setValue}
      isNeed={isNeed}
    />
  );
};
export default PhoneNumber;
