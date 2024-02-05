import useAddProperty from "@/Hooks/addProperty/useAddProperty";
import Button from "@/Shared/ui/Button";
import { DevTool } from "@hookform/devtools";
import AddPropMainInfo from "./mainInfo/AddPropMainInfo";

const AddProperty = () => {
  const {
    onSubmit,
    errors,
    register,
    setValue,
    watch,
    control,
    step,
    setStep,
    clearErrors,
  } = useAddProperty();

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="min-h-[88dvh]  py-10 container mx-auto space-y-8 "
    >
      <h1 className="text-3xl font-bold">ادخل بيانات العقار المطلوب</h1>
      <AddPropMainInfo
        errors={errors}
        clearErrors={clearErrors}
        register={register}
        setValue={setValue}
        watch={watch}
      />
      <Button type={"submit"} className={"w-fit h-auto py-2"}>
        submit
      </Button>
      {/* <DevTool control={control} /> */}
    </form>
  );
};
export default AddProperty;
