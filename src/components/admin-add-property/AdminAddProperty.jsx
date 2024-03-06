import { useSelector } from "react-redux";
import useAdminAddProp from "./hooks/useAdminAddProp";
import MainInfo from "./steps/MainInfo";
import { useFieldArray } from "react-hook-form";
import Button from "@/Shared/ui/Button";

const AdminAddProperty = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const {
    clearErrors,
    control,
    errors,
    onSubmit,
    register,
    setStep,
    setValue,
    step,
    watch,
  } = useAdminAddProp();
  //   const { fields, append, remove } = useFieldArray({
  //     name: "unitTypesOtherArray",
  //     control,
  //   });
  return (
    <main className="mx-auto container py-10">
      <form onSubmit={onSubmit}>
        <MainInfo
          setValue={setValue}
          step={step}
          watch={watch}
          register={register}
          errors={errors}
          clearErrors={clearErrors}
          control={control}
        />
        <Button>Submit</Button>
      </form>
    </main>
    //
    // <form className="py-9 container mx-auto flex flex-col">
    //   <label htmlFor="">title</label>

    //   <input
    //     type="text"
    //     className="border"
    //     {...register("title")}
    //     name=""
    //     id=""
    //   />
    //   <label htmlFor="">mainImage</label>
    //   <input type="file" {...register("mainImage")} />
    //   <label htmlFor="">multi</label>

    //   <input type="file" multiple {...register("multiImage")} />
    //   <label htmlFor="">price</label>

    //   <input type="text" {...register("price")} />
    //   <label htmlFor="">area</label>

    //   <input type="text" {...register("area")} />
    //   <label htmlFor="">phone</label>

    //   <input type="text" {...register("connectPhoneNumber")} />
    //   <label htmlFor="">description</label>
    //   <input type="text" name="" id="" {...register("description")} />
    //   <label htmlFor="">about</label>
    //   <input type="text" name="" id="" {...register("about")} />

    // </form>
  );
};
export default AdminAddProperty;
