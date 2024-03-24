import Button from "@/Shared/ui/Button";
import DropDown from "@/Shared/ui/DropDown";
import Error from "@/Shared/ui/Error";
import { getAllProjects } from "@/components/dashboard/router/all-projects/redux/allProjectsSlice";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postProjectContact } from "./api/projectContactFormApi";
import Image from "next/image";
import { Ring } from "@uiball/loaders";

const ProjectContactForm = ({ className, projectData }) => {
  const [formStatus, setFormStatus] = useState("idle");
  const [formError, setFormError] = useState("idle");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const projects = useSelector((state) => state.getProjects.projects.data);
  const dispatch = useDispatch();
  const projectList =
    projects &&
    projects?.result?.map((item) => {
      return {
        value: item._id,
        name: { ar: item.titleAr, en: item.titleEn },
      };
    });
  const form = useForm();
  const { register, formState, handleSubmit, watch, setValue, reset } = form;
  const { errors } = formState;
  const onSubmit = async (data) => {
    const dataToSend = {
      fullName: data.fullName,
      subject: data.subject.name.ar,
      message: data.message,
      phone: data.phone,
    };
    await postProjectContact({
      setFormError: setFormError,
      setFormStatus: setFormStatus,
      data: dataToSend,
    });
  };

  useEffect(() => {
    if (!projects) {
      dispatch(getAllProjects());
    }
  }, []);
  useEffect(() => {
    if (projects && projectList) {
      const crruntProject = projectList.find(
        (item) => item.name.ar === projectData.titleAr
      );
      setValue("subject", crruntProject);
    }
  }, [projects]);
  useEffect(() => {
    if (formStatus === "success") {
      setValue("fullName", "");
      setValue("message", "");
      setValue("phone", "");
      setTimeout(() => {
        setFormStatus("idle");
      }, 3500);
    }
  }, [formStatus]);

  return (
    <div
      className={cn(
        "bg-lightNeutral gap-4 md:gap-7 flex flex-col items-center md:justify-center  p-3 md:px-7  md:py-10  rounded-lg ",
        className
      )}
    >
      <h2 className="text-center">
        {language ? "تحتاج مساعدة عقارية؟" : "Need real estate advice?"}
      </h2>
      <p className="text-center lg-text">
        {language
          ? "ادخل بيناتك وسيتصل بيك خبير فى العقارات فى اقرب وقت"
          : "Enter your details and a real estate expert will contact you as soon as possible"}
      </p>
      <form
        noValidate
        className="w-full flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder={language ? "الإسم" : "Name"}
          {...register("fullName", {
            required: {
              value: true,
              message: language ? "ادخل اسمك " : " Please enter your name",
            },
          })}
          className={`w-full py-2 px-5 border  rounded-md focus:outline-none focus:border-lightGreen ${errors.fullName && "border-red-500  focus:border-red-500 "}`}
        />
        <div className="">
          {projectList && (
            <DropDown
              selected={watch("subject")}
              options={projectList}
              setValue={(e) => {
                setValue("subject", e);
              }}
            />
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder={language ? "الهاتف" : "Phone number"}
            {...register("phone", {
              required: {
                value: true,
                message: language
                  ? "ادخل رقم الهاتف "
                  : " Please enter your phone number",
              },
              validate: {
                mustBeNumber: (value) => {
                  return (
                    !isNaN(value) ||
                    (language ? " يجب ان يكون رقم" : " must be a number")
                  );
                },
              },
            })}
            className={`w-full py-2 px-5 border  rounded-md focus:outline-none focus:border-lightGreen ${errors.phone && "border-red-500  focus:border-red-500 "}`}
          />
          {errors.phone && <Error>{errors.phone.message}</Error>}
        </div>
        <div>
          <textarea
            type="text"
            placeholder={language ? "رسالتك" : "Message"}
            {...register("message", {
              required: {
                value: true,
                message: language
                  ? "ادخل رسالتك "
                  : " Please enter your message ",
              },
            })}
            className={`w-full py-2 px-5 border  rounded-md resize-none min-h-[100px] focus:outline-none focus:border-lightGreen ${errors.message && "border-red-500  focus:border-red-500 "}`}
          />
          {errors.message && <Error>{errors.message.message}</Error>}
        </div>

        <Button type={"submit"}>
          {formStatus === "loading" ? (
            <Ring size={28} color="#fff" />
          ) : language ? (
            "ارسال"
          ) : (
            "Send"
          )}
        </Button>
      </form>
      {formStatus === "success" && (
        <div className="text-green-500 w-full bg-white py-2 flex justify-center items-center gap-2 fade-in">
          <Image width={24} height={24} src={"/done-icon.png"} />
          <p>{language ? "تم الارسال بنجاح" : "Sended successfully"}</p>
        </div>
      )}
    </div>
  );
};
export default ProjectContactForm;
