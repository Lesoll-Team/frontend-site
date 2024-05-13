// import Button from "@/Shared/ui/Button";
import Error from "@/Shared/ui/Error";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Ring } from "@uiball/loaders";
import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { addCompound } from "./api/addCompoundApi";
import { getCompounds } from "@/redux-store/features/property/compoundSlice";
const AddCompoundForm = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const dispatch = useDispatch();
  const form = useForm();
  const { register, formState, handleSubmit, reset } = form;
  const { errors } = formState;
  const language = useSelector((state) => state.GlobalState.languageIs);
  const onSubmit = async (data) => {
    await addCompound({ setFormStatus, data, setServerError });
  };
  useEffect(() => {
    if (formStatus === "success") {
      reset();
      dispatch(getCompounds());
    }
  }, [formStatus]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-between md:flex-row flex-col"
    >
      <div className="flex gap-3">
        <div className="space-y-2">
          <input
            placeholder={language ? "الاسم بالعربى" : "Name in arabic"}
            className="border-b border-gray-700 max-w-[400px] p-2 focus:outline-none  "
            type="text"
            {...register("CompoundsAR", {
              required: {
                value: true,
                message: language ? "مطلوب" : "required",
              },
            })}
          />
          {errors?.CompoundsAR && <Error>{errors?.CompoundsAR?.message}</Error>}
        </div>
        <div className="space-y-2">
          <input
            placeholder={language ? "الاسم بالانجليزية" : "Name in english "}
            className="border-b border-gray-700 max-w-[400px] p-2 focus:outline-none  "
            type="text"
            {...register("CompoundsEN", {
              required: {
                value: true,
                message: language ? "مطلوب" : "required",
              },
            })}
          />
          {errors?.CompoundsEN && <Error>{errors?.CompoundsEN?.message}</Error>}
        </div>
      </div>
      <button
        disabled={formStatus === "loading"}
        className="w-fit px-3 py-1.5 border bg-white md:hover:drop-shadow duration-150"
      >
        {formStatus === "loading" ? (
          <Ring size={28} color="#000" />
        ) : language ? (
          <span className="flex gap-2 items-center">
            إضافة
            <MdAdd />
          </span>
        ) : (
          <span className="flex gap-2 items-center">
            Add
            <MdAdd />
          </span>
        )}
      </button>
    </form>
  );
};
export default AddCompoundForm;
