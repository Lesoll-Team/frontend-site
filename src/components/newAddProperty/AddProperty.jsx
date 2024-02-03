import useAddProperty from "@/Hooks/addProperty/useAddProperty";
import Button from "@/Shared/ui/Button";
import Input from "@/Shared/Input";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import AddPropMainInfo from "./mainInfo/AddPropMainInfo";

const AddProperty = () => {
  // const form = useForm();
  const { onSubmit, errors, register, setValue, watch, control } =
    useAddProperty();
  const step = useSelector((state) => state.addProperty.step);
  const error = useSelector((state) => state.addProperty.error);
  // console.log(error);
  useEffect(() => {
    // console.log(
    //   Array.from(watch("mainImage")).map((img) => URL.createObjectURL(img))
    // );
  }, [watch("mainImage")]);
  console.log(isNaN("7676"));
  return (
    <form
      onSubmit={onSubmit}
      className="min-h-[88dvh]  py-10 container mx-auto space-y-8 "
    >
      <h1 className="text-3xl font-bold">ادخل بيانات العقار المطلوب</h1>
      {/* <input
        type="text"
        multiple
        {...register("title", {
          required: {
            value: true,
            message: "please enter title",
          },
          validate: {
            // mustBeNumber: (value) => {
            //   return !isNaN(value) || "must be a number";
            // },
            max: (value) => {
              return value.length < 100 || "max is 100";
            },
          },
        })}
        className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
          errors.title && "border-red-500 focus:border-red-500"
        }`}
        // className={"border-none"}
      /> */}
      <AddPropMainInfo
        errors={errors}
        register={register}
        setValue={setValue}
        watch={watch}
      />
      <Button type={"submit"} className={"w-fit h-auto py-2"}>
        submit
      </Button>
      <DevTool control={control} />
      {/* {watch("mainImage")} */}
      {/* {Array.from(watch("mainImage")).map((img, index) => (
        <img key={index} src={URL.createObjectURL(img)} />
      ))} */}
    </form>
  );
};
export default AddProperty;
