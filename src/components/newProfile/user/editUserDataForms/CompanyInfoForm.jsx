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
import { getUserData } from "@/redux-store/features/auth/userProfileSlice";
import { cn } from "@/utils/cn";
import LinksForm from "./LinksForm";

const CompanyInfoForm = ({ main }) => {
  const userData = useSelector((state) => state.userProfile.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const formStatus = useSelector((state) => state.editUser.status);
  const formError = useSelector((state) => state.editUser.error);
  const dispatch = useDispatch();
  const form = useForm();
  const { register, handleSubmit, formState, setValue, watch } = form;
  const { errors } = formState;

  const phoneNumberwithoutCode = (phone, code) => {
    return phone.startsWith(code) ? phone.substring(code.length) : phone;
  };

  useEffect(() => {
    if (userData) {
      const { fullname, email, code, phone } = userData;

      setValue("phone", code + phoneNumberwithoutCode(phone, code));
      setValue("code", code);
    }
  }, [userData]);

  const onSubmit = async (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("code", data.code);
    formData.append("phone", phoneNumberwithoutCode(data.phone, data.code));
    // formData.append("instagramLink", data.instagramLink);
    formData.append(
      "theCommercialRegistrationImg",
      data.theCommercialRegistrationImg[0]
    );
    formData.append("taxCardImg", data.taxCard[0]);
    formData.append("companyAddress", data.companyAddress);
    formData.append("Bio", data.bio);
    // formData.append("workingHours", data.workingHours);
    // formData.append("workingHours", data.workingHours);
    // console.log(phoneNumberwithoutCode(data.phone, data.code));
    await dispatch(
      updateUser({
        userData: formData,
        id: userData?._id,
      })
    );
    dispatch(getUserData());
    console.log(data.taxCard[0]);
  };

  if (userData) {
    const initailPhone = userData.code + userData?.phone;
    return (
      <div className={` mx-auto space-y-8 ${main && "md:block hidden"} `}>
        <MobilePageTitle
          title={language ? "المعلومات الشخصية" : "Personal Info"}
        />

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
                defaultValue={userData.fullname}
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
            <UserInputContainer
              title={language ? " البريد الالكتروني" : " Email"}
            >
              <input
                readOnly
                type="text"
                defaultValue={userData.email}
                className="p-2 placeholder:text-outLine cursor-default rounded-md border w-full focus:outline-none text-outLine caret-transparent"
              />
            </UserInputContainer>
            <UserInputContainer
              title={language ? " رقم التليفون " : " Phone number"}
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
            <UserInputContainer
              // className={"md:col-span-2"}
              title={language ? "عنوان الشركة" : "Company Address"}
            >
              <input
                autoComplete="off"
                type="text"
                // defaultValue={userData.workingHours}
                {...register("companyAddress")}
                className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserInputContainer>

            <UserInputContainer
              // className={"md:col-span-2"}
              title={language ? " صورة السجل التجاري" : " صورة السجل التجاري"}
            >
              <input
                autoComplete="off"
                type="file"
                // defaultValue={userData.workingHours}
                {...register("theCommercialRegistrationImg")}
                className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserInputContainer>
            <UserInputContainer
              title={language ? " صورة البطاقة الضريبية" : "Working Hours"}
            >
              <input
                autoComplete="off"
                type="file"
                // defaultValue={userData.workingHours}
                {...register("taxCard")}
                className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserInputContainer>

            <UserInputContainer
              className={"md:col-span-2"}
              title={language ? " مواعيد العمل" : "Working Hours"}
            >
              <input
                autoComplete="off"
                type="text"
                // defaultValue={userData.workingHours}
                {...register("workingHours")}
                className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserInputContainer>
            <UserInputContainer
              className={"md:col-span-2"}
              title={language ? " نبذة عن الشركة" : "About Company"}
            >
              <textarea
                autoComplete="off"
                type="text"
                defaultValue={userData.bio}
                {...register("bio")}
                className={`p-2 placeholder:text-outLine min-h-[150px] resize-none rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserInputContainer>
          </div>
          {/* <div className="flex flex-col gap-y-8 md:gap-y-11">
            <h3 className="text-base md:text-xl font-bold text-lightGreen">
              {language ? "مواقع التواصل" : "Social media"}
            </h3>
            <UserSocialMediaContainer
              name={"facebook icon"}
              imgLink={"/social-icons/facebook.svg"}
            >
              <input
                dir="ltr"
                autoComplete="off"
                type="text"
                defaultValue={userData.faceLink}
                {...register("faceLink", {})}
                className={`p-2 md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
                  errors.faceLink && "border-red-500 focus:border-red-500"
                }`}
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
                defaultValue={userData.instagramLink}
                {...register("instagramLink", {})}
                className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${errors}`}
              />
            </UserSocialMediaContainer>
          </div> */}
          <div className="flex justify-end">
            <Button
              disabled={formStatus === "loading"}
              type={"submit"}
              className={"w-fit min-w-[140px]"}
            >
              {language ? "حفظ" : "Save"}
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
            {language ? "المعلومات الشخصية" : "Personal Info"}
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
