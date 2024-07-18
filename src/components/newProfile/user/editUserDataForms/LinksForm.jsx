import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "@/Shared/ui/Button";

import "react-phone-input-2/lib/style.css";
import InputSkeleton from "./InputSkeleton";
import { updateUser } from "@/redux-store/features/user/editUserDataSlice";
import MobilePageTitle from "../MobilePageTitle";
import { useUser } from "@/Shared/UserContext";
import { useEffect, useState } from "react";
import { editUserData } from "../../apis/profileApis";
import ReactModal from "@/Shared/ui/ReactModal";
import { Ring } from "@uiball/loaders";
import Error from "@/Shared/ui/Error";

const LinksForm = ({ main }) => {
  const { data: userData, setUserData } = useUser();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

  const form = useForm();
  const { register, handleSubmit, formState, setValue } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    handleSubmitingForm(data);
  };
  const handleSubmitingForm = async (data) => {
    editUserData({
      data,
      userId: userData._id,
      setFormStatus,
      setServerError,
    });
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
      <div className={` mx-auto space-y-8 ${main && "md:block hidden"} `}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-y-10"
        >
          <div className="flex flex-col gap-y-8 md:gap-y-11 w-full">
            <h3 className="text-base md:text-xl font-bold text-lightGreen">
              {language ? "مواقع التواصل" : "Social media"}
            </h3>
            <UserSocialMediaContainer
              name={"facebook icon"}
              imgLink={"/social-icons/facebook.svg"}
              error={errors?.faceLink?.message}
            >
              <input
                dir="ltr"
                autoComplete="off"
                defaultValue={userData?.faceLink}
                type="text"
                {...register("faceLink", {
                  pattern: {
                    value:
                      /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9(\.\?)?]/,
                    message: language
                      ? "رابط الفيسبوك غير صحيح"
                      : "Invalid Facebook URL",
                  },
                })}
                className={`p-2 md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
                  errors.faceLink && "border-red-500 focus:border-red-500"
                }`}
              />
            </UserSocialMediaContainer>
            <UserSocialMediaContainer
              name={"instagram icon"}
              imgLink={"/social-icons/instagram.svg"}
              error={errors?.instagramLink?.message}
            >
              <input
                dir="ltr"
                autoComplete="off"
                type="text"
                defaultValue={userData?.instagramLink}
                {...register("instagramLink", {
                  pattern: {
                    value:
                      /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9(\.\?)?]/,
                    message: language
                      ? "رابط الانستجرام غير صحيح"
                      : "Invalid Instagram URL",
                  },
                })}
                className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
                  errors.instagramLink && "border-red-500 focus:border-red-500"
                }`}
              />
            </UserSocialMediaContainer>

            <UserSocialMediaContainer
              name={"linkedin icon"}
              imgLink={"/social-icons/linkedin.svg"}
              error={errors?.linkedInLink?.message}
            >
              <input
                dir="ltr"
                autoComplete="off"
                type="text"
                defaultValue={userData?.linkedInLink}
                {...register("linkedInLink", {
                  pattern: {
                    value:
                      /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9(\.\?)?]/,
                    message: language
                      ? "رابط لينكداين غير صحيح"
                      : "Invalid LinkedIn URL",
                  },
                })}
                className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
                  errors.linkedInLink && "border-red-500 focus:border-red-500"
                }`}
              />
            </UserSocialMediaContainer>

            <UserSocialMediaContainer
              name={"x icon"}
              imgLink={"/social-icons/x.svg"}
              error={errors?.xLink?.message}
            >
              <input
                dir="ltr"
                autoComplete="off"
                type="text"
                defaultValue={userData?.xLink}
                {...register("xLink", {
                  pattern: {
                    value:
                      /^https?:\/\/(www\.)?(x\.com|twitter\.com)\/[a-zA-Z0-9(\.\?)?]/,
                    message: language
                      ? "رابط X أو تويتر غير صحيح"
                      : "Invalid X or Twitter URL",
                  },
                })}
                className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
                  errors.xLink && "border-red-500 focus:border-red-500"
                }`}
              />
            </UserSocialMediaContainer>
            <UserSocialMediaContainer
              name={"tiktok icon"}
              imgLink={"/social-icons/tiktok.svg"}
              error={errors?.tiktokLink?.message}
            >
              <input
                dir="ltr"
                autoComplete="off"
                type="text"
                defaultValue={userData?.tiktokLink}
                {...register("tiktokLink", {
                  pattern: {
                    value:
                      /^https?:\/\/(www\.)?tiktok\.com\/@[a-zA-Z0-9(\.\?)?]/,
                    message: language
                      ? "رابط تيك توك غير صحيح"
                      : "Invalid TikTok URL",
                  },
                })}
                className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
                  errors.tiktokLink && "border-red-500 focus:border-red-500"
                }`}
              />
            </UserSocialMediaContainer>
          </div>
          <div className="flex justify-end">
            <Button
              disabled={formStatus === "loading"}
              type={"submit"}
              className={"w-fit min-w-[140px]"}
            >
              {formStatus === "loading" ? (
                <Ring size={20} color="#fff" />
              ) : language ? (
                "تعديل"
              ) : (
                "Edit"
              )}
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
      </div>
    );
  } else {
    return (
      <div className="container mx-auto space-y-8">
        <div className="flex flex-col gap-y-8">
          <InputSkeleton />
          <InputSkeleton />
          <InputSkeleton />
          <InputSkeleton />
          <InputSkeleton />
        </div>
      </div>
    );
  }
};

export default LinksForm;

const UserSocialMediaContainer = ({ imgLink, children, name, error }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-x-6">
      <Image
        width={32}
        height={32}
        src={imgLink}
        alt={name}
        className="object-cover"
      />
      {children}
    </div>
    <div className="mx-14">{error && <Error>{error}</Error>}</div>
  </div>
);
