import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "@/Shared/ui/Button";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import MobilePageTitle from "../MobilePageTitle";
import { useUser } from "@/Shared/UserContext";
import ReactModal from "@/Shared/ui/ReactModal";
import { editUserData } from "../../apis/profileApis";
import OptModal from "@/Shared/otp/OtpModel";
import EditFormSkeleton from "./EditFormSkeleton";
import Error from "@/Shared/ui/Error";
import VerifyAcc from "../VerifyAcc";

const AllDataForm = ({ main }) => {
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [phoneToVerify, setPhoneToVerify] = useState();
  const [otpVerifyIsOpen, setOtpVerifyIsOpen] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const form = useForm();
  const { register, handleSubmit, formState, setValue, watch } = form;
  const { errors } = formState;
  const { data: userData, setUserData } = useUser();
  const phoneNumberwithoutCode = (phone, code) => {
    return phone.startsWith(code) ? phone.substring(code.length) : phone;
  };
  useEffect(() => {
    if (userData) {
      const { code, phone } = userData;

      setValue("phone", code + phoneNumberwithoutCode(phone, code));
      setValue("code", code);
    }
  }, [userData]);

  const handleSubmitingForm = async (data) => {
    editUserData({
      data: { ...data, phone: phoneNumberwithoutCode(data.phone, data.code) },
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
  console.log(userData);
  if (userData) {
    return (
      <div className={` mx-auto space-y-8 ${main && "md:block hidden"} `}>
        <MobilePageTitle
          title={language ? "المعلومات الشخصية" : "Personal Info"}
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-10"
        >
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
              {!userData?.Verified && (
                <button onClick={() => setShowVerifyModal(true)} type="button">
                  verify
                </button>
              )}
            </UserInputContainer>
          </div>

          <div className="flex flex-col gap-y-8 md:gap-y-11">
            <h3 className=" font-bold text-lightGreen">
              {language ? "مواقع التواصل" : "Social media"}
            </h3>
            <UserSocialMediaContainer
              name={"facebook icon"}
              imgLink={"/social-icons/facebook.svg"}
            >
              <div className="flex flex-col w-full gap-2">
                <input
                  dir="ltr"
                  autoComplete="off"
                  type="text"
                  defaultValue={userData.faceLink}
                  {...register("faceLink", {
                    pattern: {
                      value:
                        /\b(?:https?:\/\/)?(?:www\.)?facebook\.com\/[a-zA-Z0-9\.]+\/?/,
                      message: language
                        ? "ادخل رابط فيسبوك صحيح"
                        : "Please enter a valid Facebook link",
                    },
                  })}
                  className={`p-2 md:p-3py-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
                />
                {errors.faceLink && <Error>{errors.faceLink.message}</Error>}
              </div>
            </UserSocialMediaContainer>
            <UserSocialMediaContainer
              name={"facebook icon"}
              imgLink={"/social-icons/instagram.svg"}
            >
              <div className="flex-flex-col w-full gap-2">
                <input
                  dir="ltr"
                  autoComplete="off"
                  type="text"
                  defaultValue={userData.instagramLink}
                  {...register("instagramLink", {
                    pattern: {
                      value:
                        /\b(?:https?:\/\/)?(?:www\.)?instagram\.com\/[a-zA-Z0-9_\.]+\/?/,
                      message: language
                        ? "ادخل رابط انستجرام صحيح"
                        : "Please enter a valid Instagram link",
                    },
                  })}
                  className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen `}
                />
                {errors.instagramLink && (
                  <Error>{errors.instagramLink.message}</Error>
                )}
              </div>
            </UserSocialMediaContainer>
          </div>
          <div className="flex justify-end">
            <Button
              disabled={formStatus === "loading"}
              type={"submit"}
              className={"w-fit min-w-[140px]"}
            >
              {language ? "تعديل" : "Edit"}
            </Button>
          </div>
        </form>
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
        {showVerifyModal && (
          <VerifyAcc
            isOpen={showVerifyModal}
            onSuccess={setUserData}
            setIsOpen={setShowVerifyModal}
          />
        )}
      </div>
    );
  } else {
    return <EditFormSkeleton />;
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
