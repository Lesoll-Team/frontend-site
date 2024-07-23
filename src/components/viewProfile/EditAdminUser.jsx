import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { editUserData } from "../newProfile/apis/profileApis";
import { useEffect, useState } from "react";
import Button from "@/Shared/ui/Button";
import { useRouter } from "next/router";

const EditAdminUser = ({ setEditUser, userData }) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const router = useRouter();
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userId = userData?._id;
  const onSubmit = (data) => {
    editUserData({
      setFormStatus,
      setServerError,
      data,
      userId,
    });
  };
  useEffect(() => {
    if (formStatus === "success") {
      setEditUser(false);
      router.push(`/view-profile/${userData.username}`);
    }
  }, [formStatus]);
  return (
    <div>
      <h3>{language ? "تعديل المستخدم" : "Edit user"}</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <p>{language ? "الوصف" : "Bio"}</p>
          <textarea
            defaultValue={userData?.Bio}
            {...register("Bio")}
            className="w-full border focus:outline-none focus:border-lightGreen px-3 py-2 h-[200px] resize-none"
          />
        </div>
        <div className="space-y-2">
          <p>{language ? "ساعات العمل" : "WorkingHours"}</p>

          <input
            defaultValue={userData?.workingHours}
            {...register("workingHours")}
            className="w-full border focus:outline-none focus:border-lightGreen px-3 py-2"
          />
        </div>
        <div className="space-y-2">
          <p>{language ? " عنوان الشركة" : "company address"}</p>

          <input
            defaultValue={userData?.companyAddress}
            {...register("companyAddress")}
            className="w-full border focus:outline-none focus:border-lightGreen px-3 py-2"
          />
        </div>
        <div className="space-y-2">
          <p>facebook</p>

          <input
            dir="ltr"
            autoComplete="off"
            defaultValue={userData?.faceLink}
            type="text"
            {...register("faceLink", {
              pattern: {
                value: /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9(\.\?)?]/,
                message: language
                  ? "رابط الفيسبوك غير صحيح"
                  : "Invalid Facebook URL",
              },
            })}
            className={`p-2 md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
              errors.faceLink && "border-red-500 focus:border-red-500"
            }`}
          />
        </div>
        <div className="space-y-2">
          <p>instagram</p>
          <input
            dir="ltr"
            autoComplete="off"
            type="text"
            defaultValue={userData?.instagramLink}
            {...register("instagramLink", {
              pattern: {
                value: /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9(\.\?)?]/,
                message: language
                  ? "رابط الانستجرام غير صحيح"
                  : "Invalid Instagram URL",
              },
            })}
            className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
              errors.instagramLink && "border-red-500 focus:border-red-500"
            }`}
          />
        </div>{" "}
        <div className="space-y-2">
          <p>linkedin</p>
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
        </div>{" "}
        <div className="space-y-2">
          <p>Twitter</p>
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
        </div>{" "}
        <div className="space-y-2">
          <p>tiktok</p>
          <input
            dir="ltr"
            autoComplete="off"
            type="text"
            defaultValue={userData?.tiktokLink}
            {...register("tiktokLink", {
              pattern: {
                value: /^https?:\/\/(www\.)?tiktok\.com\/@[a-zA-Z0-9(\.\?)?]/,
                message: language
                  ? "رابط تيك توك غير صحيح"
                  : "Invalid TikTok URL",
              },
            })}
            className={`p-2  md:p-3 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
              errors.tiktokLink && "border-red-500 focus:border-red-500"
            }`}
          />
        </div>{" "}
        <Button disabled={formStatus == "loadinng"}>
          {language ? "تعديل" : "Edit"}
        </Button>
      </form>
    </div>
  );
};

export default EditAdminUser;
