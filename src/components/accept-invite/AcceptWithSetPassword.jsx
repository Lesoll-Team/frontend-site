import Button from "@/Shared/ui/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const AcceptWithSetPassword = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center justify-center gap-10"
      >
        <div className=" px-10 md:px-0 w-full md:w-[60%] max-w-[500px] space-y-4">
          <h3 className="text-3xl text-start">
            {language ? "تعيين كلمة السر" : "Set Password"}
          </h3>
          <div className="space-y-2">
            <label className="text-baseGray text-xl font-inter">
              {language ? " كلمة المرور" : "Password"}
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: language
                    ? "ادخل رقم السر "
                    : " Please enter your password",
                },
              })}
              type="text"
              className={` w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-lg`}
            />
          </div>
          <div className="space-y-2 mb-20">
            <label className="text-baseGray text-xl font-inter">
              {language ? "تأكيد كلمة المرور" : "Confirm Password"}
            </label>
            <input
              {...register("password2", {
                required: {
                  value: true,
                  message: language
                    ? "ادخل رقم السر "
                    : " Please enter your password",
                },
              })}
              type="text"
              className={` w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-lg`}
            />
          </div>
          <Button type={"submit"}>{language ? "تأكيد" : "Confirm"}</Button>
        </div>
      </form>
      <Image
        src={"/signin.png"}
        width={692}
        height={864}
        className="h-full hidden xl:block"
      />
    </div>
  );
};
export default AcceptWithSetPassword;
