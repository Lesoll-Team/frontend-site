import Button from "@/Shared/ui/Button";
import { useForm } from "react-hook-form";
import { IoIosRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { useSelector } from "react-redux";
import { deleteProperty } from "../apis/profileApis";
import { useEffect, useState } from "react";

const DeleteBtn = ({ propId, getProperties, setDeleteIsOpen }) => {
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState("idle");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const form = useForm({
    defaultValues: {
      message: "تم البيع / التأجير من خلال ليسول",
      tap: "lesoll",
    },
  });
  const { setValue, watch, reset, register, handleSubmit, formState } = form;
  // useForm();

  const onSubmit = async (data) => {
    await deleteProperty({
      setFormStatus,
      setServerError,
      message: data.message,
      propdId: propId,
    });
  };
  useEffect(() => {
    if (formStatus === "success") {
      getProperties();
      setDeleteIsOpen(false);
    }
  }, [formStatus]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-3 p-3 w-[90vw] md:w-[50vw]"
    >
      <h3 className="text-2xl fomt-semiBold">
        {language
          ? " ما سبب رغبتك في حذف هذا العقار؟"
          : "What is the reason you want to delete this property?"}
      </h3>
      <button
        onClick={() => {
          setValue("tap", "lesoll");
          setValue("message", "تم البيع / التأجير من خلال ليسول");
        }}
        type="button"
        className="flex gap-2 items-center text-lg font-normal"
      >
        <RadioBtn active={watch("tap") === "lesoll"} />

        {language ? "تم البيع / التأجير من خلال ليسول" : ""}
      </button>
      <button
        onClick={() => {
          setValue("tap", "non-lesoll");
          setValue("message", "تم البيع / التأجير من خلال وسيط اخر");
        }}
        type="button"
        className="flex gap-2 items-center text-lg font-normal"
      >
        <RadioBtn active={watch("tap") === "non-lesoll"} />
        {language ? "تم البيع / التأجير من خلال وسيط اخر" : ""}
      </button>
      <button
        onClick={() => {
          setValue("tap", "other");
          setValue("message", "");
        }}
        type="button"
        className="flex gap-2 items-center text-lg font-normal"
      >
        <RadioBtn active={watch("tap") === "other"} />

        {language ? "اخرى" : ""}
      </button>
      {watch("tap") === "other" && (
        <textarea
          {...register("message")}
          className={`resize-none w-full p-2 border-[2px] md:border-[3px] rounded-md focus:ring-0 focus:border-lightGreen focus:outline-none animate-appearance-in `}
          placeholder={language ? "سبب أخر" : "Other reason"}
          name=""
          id=""
          cols="30"
          rows="5"
        />
      )}
      <Button className={"bg-red-500 border-none"}>
        {language ? "حذف" : "Delete"}
      </Button>
    </form>
  );
};
export default DeleteBtn;

const RadioBtn = ({ active }) => {
  return active ? (
    <IoIosRadioButtonOn className="text-lightGreen" />
  ) : (
    <IoMdRadioButtonOff className="text-lightGreen" />
  );
};
