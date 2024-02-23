import { useSelector } from "react-redux";
// import { Link } from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "@/Shared/ui/Button";
import { useEffect } from "react";
import InputSkeleton from "./InputSkeleton";
const regexLink = /^(ftp|http|https):\/\/[^ "]+$/;
const AllDataForm = () => {
  const userData = useSelector((state) => state.userProfile.userData);

  const language = useSelector((state) => state.GlobalState.languageIs);
  const form = useForm({
    defaultValues: {
      fullname: userData?.fullname,
    },
  });
  const { register, handleSubmit, formState, setValue } = form;
  const { errors } = formState;
  useEffect(() => {
    if (userData) {
      setValue("fullname", userData?.fullname);
      setValue("email", userData?.email);
    }
  }, [userData]);
  if (userData) {
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-8">
            <UserInputContainer
              title={language ? "الإسم بالكامل" : "Full Name"}
            >
              <input
                autoComplete="off"
                type="text"
                readOnly
                defaultValue={userData?.fullname}
                {...register("fullname", {})}
                className="p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen"
              />
            </UserInputContainer>
            <UserInputContainer
              title={language ? " البريد الالكتروني" : " Email"}
            >
              <input
                // disabled
                // autoComplete="off"
                readOnly
                type="text"
                defaultValue={userData?.email}
                className="p-2 placeholder:text-outLine cursor-default rounded-md border w-full focus:outline-none text-outLine caret-transparent"
              />
            </UserInputContainer>
            <UserInputContainer
              title={language ? " رقم التليفون " : " Phone number"}
            >
              <input
                autoComplete="off"
                type="text"
                {...register("phone", {})}
                className="p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen"
              />
            </UserInputContainer>
          </div>
          <div className="flex flex-col gap-y-8">
            <h3 className="text-base font-bold text-lightGreen">
              {language ? "مواقع التواصل" : "Social media"}
            </h3>
            <UserSocialMediaContainer
              name={"facebook icon"}
              imgLink={"/social-icons/facebook.svg"}
            >
              <input
                autoComplete="off"
                type="text"
                {...register("fullname", {})}
                className="p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen"
              />
            </UserSocialMediaContainer>
            <UserSocialMediaContainer
              name={"facebook icon"}
              imgLink={"/social-icons/instagram.svg"}
            >
              <input
                autoComplete="off"
                type="text"
                {...register("fullname", {})}
                className="p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen"
              />
            </UserSocialMediaContainer>
          </div>
          <div className="flex justify-end">
            <Button className={"w-fit min-w-[140px]"}>
              {language ? "حفظ" : "Save"}
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
export default AllDataForm;

const UserInputContainer = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h4 className="text-base text-outLine">{title}</h4>
      {children}
    </div>
  );
};
const UserSocialMediaContainer = ({ imgLink, children, name }) => {
  return (
    <div className="flex items-center   gap-x-8">
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
};
