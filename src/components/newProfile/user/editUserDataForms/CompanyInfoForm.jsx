import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
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
import { cn } from "@/utils/cn";
import CommercialImgInput from "./CommercialImgInput";
import { useUser } from "@/Shared/UserContext";
import { editUserData } from "../../apis/profileApis";
import ReactModal from "@/Shared/ui/ReactModal";
import OptModal from "@/Shared/otp/OtpModel";
import Image from "next/image";

const CompanyInfoForm = ({ main }) => {
  const { data: userData, setUserData } = useUser();
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState("idle");
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [phoneToVerify, setPhoneToVerify] = useState();
  const [otpVerifyIsOpen, setOtpVerifyIsOpen] = useState(false);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const form = useForm();
  const { register, handleSubmit, formState, setValue, watch } = form;
  const { errors } = formState;

  const taxImgRef = useRef(null);
  useEffect(() => {
    if (userData) {
      const { code, phone, Bio } = userData;
      setValue("phone", code + phoneNumberwithoutCode(phone, code));
      setValue("code", code);
      setValue("Bio", Bio);
    }
  }, [userData]);

  const phoneNumberwithoutCode = (phone, code) => {
    return phone.startsWith(code) ? phone.substring(code.length) : phone;
  };

  const handleSubmitingForm = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("code", data.code);
    formData.append("phone", phoneNumberwithoutCode(data.phone, data.code));

    if (data.theCommercialRegistrationImg) {
      formData.append(
        "theCommercialRegistrationImg",
        data.theCommercialRegistrationImg,
      );
    }
    if (data.taxCard) {
      formData.append("taxCardImg", data.taxCard[0]);
    }
    formData.append("companyAddress", data.companyAddress);
    formData.append("workingHours", data.workingHours);
    formData.append("Bio", data.Bio);

    editUserData({
      data: formData,
      userId: userData._id,
      setFormStatus,
      setServerError,
    });
  };
  const onSubmit = async (data) => {
    if (phoneNumberwithoutCode(data.phone, data.code) === userData?.phone) {
      handleSubmitingForm(data);
    } else {
      setPhoneToVerify(phoneNumberwithoutCode(data.phone, data.code));
      setOtpVerifyIsOpen(true);
    }
  };
  const triggerSubmit = () => {
    handleSubmit(handleSubmitingForm)();
  };
  useEffect(() => {
    if (formStatus === "success") {
      setFormStatus("idle");
      setSuccessModalIsOpen(true);
      setUserData();
    }
  }, [formStatus]);

  if (userData) {
    return (
      <div className={`mx-auto space-y-8 ${main && "md:block hidden"}`}>
        <MobilePageTitle
          title={language ? "المعلومات الشخصية" : "Personal Info"}
        />
        <CompanyPrograssBar />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-10"
        >
          <div className="flex flex-col gap-y-8 md:grid lg:grid-cols-2 md:gap-x-10 lg:gap-x-14 md:gap-y-8">
            <UserInputContainer
              title={language ? "الإسم بالكامل" : "Full Name"}
            >
              <input
                autoComplete="off"
                type="text"
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
            <UserInputContainer
              title={language ? "عنوان الشركة" : "Company Address"}
            >
              <input
                autoComplete="off"
                type="text"
                defaultValue={userData.workingHours}
                {...register("companyAddress")}
                className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
              />
            </UserInputContainer>
            <CommercialImgInput setValue={setValue} watch={watch} />
            <UserInputContainer
              title={language ? " صورة البطاقة الضريبية" : "Working Hours"}
            >
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
              title={language ? " مواعيد العمل" : "Working Hours"}
            >
              <input
                autoComplete="off"
                type="text"
                defaultValue={userData.workingHours}
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
                defaultValue={userData.Bio}
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
              {language ? "حفظ" : "Save"}
            </Button>
          </div>
        </form>
        <LinksForm />
        <ReactModal
          modalIsOpen={successModalIsOpen}
          setModalIsOpen={setSuccessModalIsOpen}
        >
          <div className="min-h-[250px] md:min-w-[500px] min-w-[90vw] flex flex-col items-center justify-center gap-5">
            <Image width={100} height={100} src={"/done-icon.png"} alt="done" />
            <h3>{language ? "تم التعديل بنجاح" : "Edited Successfully!"}</h3>
          </div>
        </ReactModal>
        {otpVerifyIsOpen && (
          <OptModal
            phoneNumber={phoneToVerify}
            isOpen={otpVerifyIsOpen}
            setIsOpen={setOtpVerifyIsOpen}
            onSuccess={triggerSubmit}
          />
        )}
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
