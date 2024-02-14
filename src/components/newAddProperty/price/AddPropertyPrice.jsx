import { useSelector } from "react-redux";
import AddPropSectionContainer from "../AddPropSectionContainer";
import Rent from "./Rent";
import Sale from "./Sale";

const AddPropertyPrice = ({
  errors,
  register,
  setValue,
  watch,
  clearErrors,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userInfo = useSelector((state) => state.userProfile.userData);
  console.log(userInfo);

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
      <AddPropSectionContainer className={"flex flex-cols"}>
        <div className="p-5 bg-white w-full rounded space-y-4">
          <h3 className="text-sm md:text-xl font-cairo">
            {language
              ? "سيتم استخدام رقم الهاتف الخاص بك للتواصل عبر واتساب او التليفون"
              : "Your phone number will be used to communicate via WhatsApp or phone"}
          </h3>
          <div className="flex justify-between md:flex-row flex-col">
            <p className="flex items-center gap-5">
              <span>{language ? "رقم التواصل :" : "Contact Number :"}</span>
              <span>{userInfo?.code + userInfo?.phone}</span>
            </p>
            <button
              type="button"
              className="underline text-blue-600 font-bold w-fit"
            >
              تغير رقم التواصل
            </button>
          </div>
        </div>
      </AddPropSectionContainer>
    </>
  );
};
export default AddPropertyPrice;
