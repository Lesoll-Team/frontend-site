import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "@/Shared/ui/Button";
import { useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import InputSkeleton from "./InputSkeleton";
import { updateUser } from "@/redux-store/features/user/editUserDataSlice";
import MobilePageTitle from "../MobilePageTitle";
import { useUser } from "@/Shared/UserContext";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

const AllDataForm = ({ main }) => {
  const { data, setUserData } = useUser();
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  const formStatus = useSelector((state) => state.editUser.status);
  const dispatch = useDispatch();
  const form = useForm();
  const { register, handleSubmit, formState, setValue, watch } = form;
  const { errors } = formState;

  const phoneNumberwithoutCode = (phone, code) => {
    return phone.startsWith(code) ? phone.substring(code.length) : phone;
  };

  useEffect(() => {
    if (data) {
      const { code, phone } = data;

      setValue("phone", code + phoneNumberwithoutCode(phone, code));
      setValue("code", code);
    }
  }, [data]);

  const onSubmit = async (userData) => {
    const formData = new FormData();
    formData.append("fullname", userData.fullname);
    formData.append("code", userData.code);
    formData.append(
      "phone",
      phoneNumberwithoutCode(userData.phone, userData.code),
    );
    formData.append("instagramLink", userData.instagramLink);
    formData.append("faceLink", userData.faceLink);
    await dispatch(
      updateUser({
        userData: formData,
        id: data?._id,
      }),
    );
    setUserData();
  };

  if (data) {
    return (
      <div className={` mx-auto space-y-8 ${main && "md:block hidden"} `}>
        <MobilePageTitle title={t("Personal_Info")} />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-10"
        >
          {/* {formStatus === "failed" && <p>{formError.message}</p>} */}
          <div className="flex flex-col  gap-y-8 md:grid lg:grid-cols-2 md:gap-x-10 lg:gap-x-14 md:gap-y-8">
            <UserInputContainer
              title={language ? "الإسم بالكامل" : "Full Name"}
            >
              <input
                autoComplete="off"
                type="text"
                // readOnly
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
                    width: "100%",
                  }}
                  buttonStyle={{
                    height: "39px",
                    backgroundColor: "white",
                  }}
                  containerStyle={{
                    borderColor: errors.phone && "red",
                  }}
                  dropdownStyle={{
                    height: "150px",
                  }}
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
          </div>
          <div className="flex flex-col gap-y-8 md:gap-y-11">
            <h3 className=" font-bold text-lightGreen">{t("Social_Media")}</h3>
            <UserSocialMediaContainer
              name={"facebook icon"}
              imgLink={"/social-icons/facebook.svg"}
            >
              <input
                dir="ltr"
                autoComplete="off"
                type="text"
                defaultValue={data.faceLink}
                {...register("faceLink", {})}
                className={`p-2 md:p-3py-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserSocialMediaContainer>
            <UserSocialMediaContainer
              name={"facebook icon"}
              imgLink={"/social-icons/instagram.svg"}
            >
              <input
                dir="ltr"
                autoComplete="off"
                type="text"
                defaultValue={data.instagramLink}
                {...register("instagramLink", {})}
                className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserSocialMediaContainer>
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

export default AllDataForm;

const UserInputContainer = ({ title, children }) => (
  <div className="flex flex-col gap-y-2">
    <p className=" text-gray-800 ">{title}</p>
    {children}
  </div>
);

const UserSocialMediaContainer = ({ imgLink, children, name }) => (
  <div className="flex items-center gap-x-8">
    <Image
      width={32}
      height={32}
      src={imgLink}
      alt={name}
      className="object-cover"
    />
    {children}
  </div>
);
