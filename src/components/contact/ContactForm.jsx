import {
  postConatctMessage,
  resetData,
} from "@/redux-store/features/contactSlice";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const ContactForm = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const language = useSelector((state) => state.GlobalState.languageIs);
  const status = useSelector((state) => state.Contact.status);
  const [sended, setSended] = useState(false);

  const messageSendedpop = () => {
    setSended(true);
    dispatch(resetData());
    setTimeout(() => {
      setSended(false);
    }, 3000);
  };
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch(postConatctMessage(data));
  };
  useEffect(() => {
    if (status === "succeeded") {
      reset();
      messageSendedpop();
    }
  }, [status]);
  return (
    <>
      {sended && (
        <div className="fixed z-[50] right-4 top-28 bg-white p-7 rounded-sm py-3 border drop-shadow-sm fade-in-right flex items-center gap-3">
          <FaCheckCircle className="text-green-500 text-xl" />{" "}
          <p>{language ? "تم الإرسال" : "sended"}</p>
        </div>
      )}
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="p-7 bg-lightNeutral rounded-lg space-y-4    mx-auto lg:max-w-[550px] relative"
      >
        <h2 className="text-2xl text-center ">
          {language ? "تواصل معنا" : "Contact Us"}
        </h2>

        <div className="space-y-2">
          <label htmlFor="fullName">{language ? "الاسم" : "Name"}</label>
          <input
            name="fullName"
            id="fullName"
            {...register("fullName", {
              required: {
                value: true,
                message: language ? "ادخل اسمك " : " Please enter your name",
              },
            })}
            type="text"
            className={` w-full h-10  p-2 border-2 focus:outline-none  focus:border-darkGreen rounded-md ${
              errors.fullName && "border-red-500 focus:border-red-500"
            }`}
          />
          {/* { fullName, email, phone, subject, message }; */}
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email">
            {language ? "بريدك الإلكترونى" : "Your email"}
          </label>
          <input
            name="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: language
                  ? "ادخل بريدك الإلكترونى "
                  : " Please enter your email",
              },
              pattern: {
                value:
                  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
                message: language
                  ? "يرجى إدخال بريد إلكتروني صحيح"
                  : "Please enter a valid email",
              },
            })}
            type="text"
            className={` w-full h-10  p-2 border-2 focus:outline-none focus:border-darkGreen rounded-md ${
              errors.email && "border-red-500 focus:border-red-500"
            }`}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone">{language ? "الهاتف" : "phone"}</label>
          <input
            name="phone"
            id="phone"
            {...register("phone", {
              required: {
                value: true,
                message: language
                  ? "ادخل رقم الهاتف "
                  : " Please enter your phone number",
              },
            })}
            type="text"
            className={` w-full h-10  p-2 border-2 focus:outline-none focus:border-darkGreen rounded-md ${
              errors.phone && "border-red-500 focus:border-red-500"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone">{language ? "الموضوع بشأن" : "Subject"}</label>
          <input
            name="subject"
            id="subject"
            {...register("subject", {
              required: {
                value: true,
                message: language
                  ? "ادخل الموضوع "
                  : " Please enter your subject ",
              },
            })}
            type="text"
            className={` w-full h-10  p-2 border-2 focus:outline-none focus:border-darkGreen rounded-md ${
              errors.subject && "border-red-500 focus:border-red-500"
            }`}
          />
          {errors.subject && (
            <p className="text-red-500">{errors.subject.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone">
            {language ? "رسالتك " : "Your messeage"}
          </label>
          <textarea
            name="message"
            id="message"
            {...register("message", {
              required: {
                value: true,
                message: language
                  ? "ادخل رسالتك "
                  : " Please enter your message ",
              },
            })}
            type="text"
            className={` w-full h-[100px] resize-none p-2 border-2 focus:outline-none focus:border-darkGreen rounded-md ${
              errors.message && "border-red-500 focus:border-red-500"
            }`}
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-lightGreen h-10 w-full text-white flex items-center justify-center rounded-lg"
        >
          {status === "loading" ? "Loading" : language ? "إرسال" : "Send"}
          {/* {language ? "إرسال" : "Send"} */}
        </button>
      </form>
    </>
  );
};
export default ContactForm;
