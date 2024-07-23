import AddPropSectionContainer from "../components/AddPropSectionContainer";
import Rent from "./Rent";
import Sale from "./sale/Sale";
import AdminCashAndInstallment from "./sale/AdminCashAndInstallment";
import { useUser } from "@/Shared/UserContext";
import Installment from "./sale/Installment";
const AddPropertyPrice = ({
  errors,
  register,
  setValue,
  watch,
  clearErrors,
  control,
}) => {
  const { data } = useUser();

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
      case "For Sale":
        return (
          <Sale
            control={control}
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
      default:
        return <Sale />;
    }
  };
  const renderCashAndInstallment = () => {
    if (data.email === "info@lesoll.com" && data.isAdmin) {
      return (
        <AddPropSectionContainer>
          <AdminCashAndInstallment
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
            control={control}
          />
        </AddPropSectionContainer>
      );
    } else {
      return (
        <AddPropSectionContainer>
          <Installment
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
            control={control}
            showCashPayment
          />
        </AddPropSectionContainer>
      );
    }
  };

  return (
    <>
      <AddPropSectionContainer>{renderPrice()}</AddPropSectionContainer>
      {watch("saleOption.value")?.length > 1 && renderCashAndInstallment()}
    </>
  );
};
export default AddPropertyPrice;
