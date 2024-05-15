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

const LinksForm = ({ main }) => {
  const { data: userData, setUserData } = useUser();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

  const form = useForm();
  const { register, handleSubmit, formState } = form;
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
        <MobilePageTitle
          title={language ? "المعلومات الشخصية" : "Personal Info"}
        />

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
            >
              <input
                dir="ltr"
                autoComplete="off"
                type="text"
                userData
                u
                i
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
                defaultValue={userData?.instagramLink}
                {...register("instagramLink", {})}
                className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen`}
              />
            </UserSocialMediaContainer>
            <UserSocialMediaContainer
              name={"facebook icon"}
              imgLink={"/social-icons/linkedin.svg"}
            >
              <input
                dir="ltr"
                autoComplete="off"
                type="text"
                defaultValue={userData.linkedInLink}
                {...register("linkedInLink", {})}
                className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen`}
              />
            </UserSocialMediaContainer>
            <UserSocialMediaContainer
              name={"facebook icon"}
              imgLink={"/social-icons/x.svg"}
            >
              <input
                dir="ltr"
                autoComplete="off"
                type="text"
                defaultValue={userData.xLink}
                {...register("xLink", {})}
                className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen`}
              />
            </UserSocialMediaContainer>
            <UserSocialMediaContainer
              name={"facebook icon"}
              imgLink={"/social-icons/tiktok.svg"}
            >
              <input
                dir="ltr"
                autoComplete="off"
                type="text"
                defaultValue={userData.tiktokLink}
                {...register("tiktokLink", {})}
                className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen`}
              />
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

export default LinksForm;

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
