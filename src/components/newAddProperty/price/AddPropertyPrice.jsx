// import { useSelector } from "react-redux";
import AddPropSectionContainer from "../AddPropSectionContainer";
import Rent from "./Rent";
import Sale from "./sale/Sale";
import CashAndInstallment from "./sale/CashAndInstallment";
// import PhoneNumber from "../PhoneNumber";

const AddPropertyPrice = ({
  errors,
  register,
  setValue,
  watch,
  clearErrors,
  control,
  fields,
  append,
  remove,
}) => {
  // const language = useSelector((state) => state.GlobalState.languageIs);
  // const userInfo = useSelector((state) => state.userProfile.userData);

  const renderPrice = () => {
    switch (watch("offer")) {
      case "For Rent":
        return (
          <Rent
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
        break;
      case "For Sale":
        return (
          <Sale
            fields={fields}
            append={append}
            remove={remove}
            control={control}
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
        break;
      default:
        return <Sale />;
        break;
    }
  };

  return (
    <>
      <AddPropSectionContainer>{renderPrice()}</AddPropSectionContainer>
      {watch("saleOption.value")?.length > 1 && (
        <AddPropSectionContainer>
          <CashAndInstallment
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
            control={control}
          />
        </AddPropSectionContainer>
      )}

      {/* <PhoneNumber
        clearErrors={clearErrors}
        errors={errors}
        register={register}
        watch={watch}
        setValue={setValue}
      /> */}
    </>
  );
};
export default AddPropertyPrice;
