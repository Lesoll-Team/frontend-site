import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "@/Shared/ui/Button";
import InputSkeleton from "./InputSkeleton";
import CompanyPrograssBar from "../CompanyPrograssBar";
import MobilePageTitle from "../MobilePageTitle";
import LinksForm from "./LinksForm";
import { updateUser } from "@/redux-store/features/user/editUserDataSlice";
import { cn } from "@/utils/cn";
import CommercialImgInput from "./CommercialImgInput";
import { useUser } from "@/Shared/UserContext";
import { useTranslation } from "next-i18next";
import { getLangBoolean } from "@/utils/getLangBoolean";

const CompanyInfoForm = ({ main }) => {
  const { data, setUserData } = useUser();

  const dispatch = useDispatch();
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  const formStatus = useSelector((state) => state.editUser.status);

  const form = useForm();
  const { register, handleSubmit, formState, setValue, watch } = form;
  const { errors } = formState;

  const taxImgRef = useRef(null);
  useEffect(() => {
    if (data) {
      const { code, phone, Bio } = data;
      setValue("phone", code + phoneNumberwithoutCode(phone, code));
      setValue("code", code);
      setValue("Bio", Bio);
    }
  }, [data]);

  const phoneNumberwithoutCode = (phone, code) => {
    return phone.startsWith(code) ? phone.substring(code.length) : phone;
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("code", data.code);
    formData.append("phone", phoneNumberwithoutCode(data.phone, data.code));

    if (data.theCommercialRegistrationImg) {
      formData.append(
        "theCommercialRegistrationImg",
        data.theCommercialRegistrationImg[0],
      );
    }
    if (data.taxCard) {
      formData.append("taxCardImg", data.taxCard[0]);
    }

    formData.append("companyAddress", data.companyAddress);
    formData.append("workingHours", data.workingHours);
    formData.append("Bio", data.Bio);

    dispatch(
      updateUser({
        userData: formData,
        id: data?._id,
      }),
    );
    setUserData();
  };

  if (data) {
    return (
      <div className={`mx-auto space-y-8 ${main && "md:block hidden"}`}>
        <MobilePageTitle title={t("Personal_Info")} />
        <CompanyPrograssBar />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-10"
        >
          <div className="flex flex-col gap-y-8 md:grid lg:grid-cols-2 md:gap-x-10 lg:gap-x-14 md:gap-y-8">
            <UserInputContainer title={t("Full_Name")}>
              <input
                autoComplete="off"
                type="text"
                defaultValue={data.fullname}
                {...register("fullname", {
                  required: {
                    value: true,
                    message: language ? "الإسم مطلوب" : "Full Name is required",
                  },
                })}
                className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
                  errors?.fullname && "focus:border-red-500 border-red-500"
                }`}
              />
              {errors?.fullname && (
                <p className="text-sm text-red-500">
                  {errors.fullname.message}
                </p>
              )}
            </UserInputContainer>
            <UserInputContainer title={t("Email")}>
              <input
                readOnly
                type="text"
                defaultValue={data.email}
                className="p-2 placeholder:text-outLine cursor-default rounded-md border w-full focus:outline-none text-outLine caret-transparent"
              />
            </UserInputContainer>
            <UserInputContainer title={t("Phone_Number")}>
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
                  })}
                  hidden
                  className="hidden"
                  type="text"
                />
              </div>
            </UserInputContainer>
            <UserInputContainer title={t("Company_Address")}>
              <input
                autoComplete="off"
                type="text"
                defaultValue={data.workingHours}
                {...register("companyAddress")}
                className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserInputContainer>

            <CommercialImgInput setValue={setValue} watch={watch} />
            <UserInputContainer title={t("Tax_Card_Image")}>
              <input
                ref={taxImgRef}
                autoComplete="off"
                type="file"
                {...register("taxCard")}
                className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserInputContainer>
            <UserInputContainer
              className={"md:col-span-2"}
              title={t("Working_Hours")}
            >
              <input
                autoComplete="off"
                type="text"
                defaultValue={data.workingHours}
                {...register("workingHours")}
                className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserInputContainer>
            <UserInputContainer
              className={"md:col-span-2"}
              title={t("About_Company")}
            >
              <textarea
                autoComplete="off"
                type="text"
                defaultValue={data.Bio}
                {...register("Bio")}
                className={`p-2 placeholder:text-outLine min-h-[150px] resize-none rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserInputContainer>
          </div>
          <div className="flex justify-end">
            <Button
              disabled={formStatus === "loading"}
              type={"submit"}
              className={"w-fit min-w-[140px]"}
            >
              {t("Save")}
            </Button>
          </div>
        </form>
        <LinksForm />
      </div>
    );
  } else {
    return (
      <div className="container mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-baseGray">
            {t("Personal_Info")}
          </h3>
          <Link href={"/profile"}>
            <FaArrowLeftLong className="text-baseGray text-2xl" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-8">
            <InputSkeleton />
            <InputSkeleton />
            <InputSkeleton />
            <InputSkeleton />
            <InputSkeleton />
          </div>
        </div>
      </div>
    );
  }
};

export default CompanyInfoForm;

const UserInputContainer = ({ title, children, className }) => (
  <div className={cn("flex flex-col gap-y-2", className)}>
    <label className={"text-base md:text-xl text-outLine"}>{title}</label>
    {children}
  </div>
);
