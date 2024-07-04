import { editUserData } from "@/components/newProfile/apis/profileApis";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "../ui/Button";
import { useRouter } from "next/router";
import { useUser } from "../UserContext";
import { getLangBoolean } from "@/utils/getLangBoolean";
const AddPhoneModalForm = ({ setIsOpen }) => {
  const language = getLangBoolean();
  const { data, setUserData } = useUser();

  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState("idle");
  const form = useForm();
  const router = useRouter();
  const { register, handleSubmit, formState, setValue, watch } = form;
  const { errors } = formState;
  const phoneNumberwithoutCode = (phone, code) => {
    return phone.startsWith(code) ? phone.substring(code.length) : phone;
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("code", data.code);
    formData.append("phone", phoneNumberwithoutCode(data.phone, data.code));
    await editUserData({
      data: formData,
      userId: data?._id,
      setFormStatus,
      setServerError,
    });
  };

  useEffect(() => {
    if (formStatus === "success") {
      const redirectBackTo = router.asPath;
      setIsOpen(false);
      if (!data?.verifiedPhone) {
        const userToken = Cookies.get("userToken");

        router.push(
          `/verify-otp/${userToken}?refirectBackTo=${redirectBackTo}`,
        );
      }
      setUserData();
    }
  }, [formStatus]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-3 md:px-0  w-full  mx-auto space-y-6 pb-4   md:my-0 overflow-auto"
    >
      <div dir="ltr">
        <PhoneInput
          inputStyle={{
            paddingTop: "10px",
            paddingBottom: "10px",
            height: "40px",
            fontSize: "16px",
            color: "#1b6e6d",
            borderRadius: "8px",
            border: "1px",
            width: "100%",
          }}
          buttonStyle={{ height: "40px", backgroundColor: "white" }}
          dropdownStyle={{ height: "150px" }}
          autocompleteSearch={true}
          countryCodeEditable={false}
          enableSearch={true}
          country={"eg"}
          excludeCountries={["IL"]}
          value={watch("phone")}
          onChange={(e, info) => {
            setValue("phone", e);
            setValue("code", info.dialCode);
          }}
        />
        {errors.phone && (
          <p dir={language ? "rtl" : "ltr"} className="text-red-500">
            {errors.phone.message}
          </p>
        )}
        <input
          {...register("phone", {
            required: {
              value: true,
              message: language
                ? "ادخل رقم الهاتف"
                : " Please enter your Phone number",
            },
            validate: {
              min: (value) => {
                return (
                  value.length > 11 ||
                  (language
                    ? "من فضلك ادخل رقم صحيح"
                    : "description must be at least 20 characters long")
                );
              },
            },
          })}
          hidden
          className="hidden"
          type="text"
        />
      </div>
      <Button
        disabled={formStatus === "loading"}
        type={"submit"}
        className={"w-full min-w-[140px]"}
      >
        {language ? "حفظ" : "Save"}
      </Button>
    </form>
  );
};
export default AddPhoneModalForm;
