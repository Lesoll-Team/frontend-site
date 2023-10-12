import { sendUserMassage } from "@/redux-store/features/contactSlice";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { AiFillCheckCircle, AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../redux-store/features/contactSlice";
import { useRouter } from "next/router";
export default function Contact() {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const dispatch = useDispatch();
  const isSending = useSelector((state) => state.Contact.sending);
  const errorMassage = useSelector((state) => state.Contact.errorMassage);
  const confirmMassage = useSelector((state) => state.Contact.massage);
  // dispatch(sendUserMassage)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [massage, setMassage] = useState("");
  const router = useRouter();
  const handleConfirmMassage = async (e) => {
    e.preventDefault();
    const userMassage = { fullName, email, phone, subject, massage };
    dispatch(sendUserMassage(userMassage));
    setFullName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMassage("");
  };

  const handleNewMassage = () => {
    dispatch(deleteMessage());
  };

  useEffect(() => {
    const handleRouteChange = () => {
      dispatch(deleteMessage());
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // Cleanup the event listener when the component is unmounted
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, dispatch]);

  return (
    <Fragment>
      {confirmMassage ? (
        <div className="w-full h-[80dvh] flex justify-center items-center">
          <div className="flex flex-col justify-center h-[60%] items-center bg-white drop-shadow-xl rounded-lg  border w-[90%] md:w-[60%] space-y-8 ">
            <div className="space-y-3 flex flex-col justify-center items-center">
              <AiFillCheckCircle className="text-green-500 text-8xl  animate-appearance-in" />
              <h3 className="text-2xl font-semibold text-darkGreen text-center">
                {language
                  ? "تمت ارسال الرسالة بنجاح سيتم التواصل معك قريبا"
                  : "The message is Sended successfully lesoll support team will contact you soon"}
              </h3>
            </div>

            <div
              dir="ltr"
              className="flex items-center  w-full gap-10 justify-center"
            >
              <Link
                className="text-xl  text-lightGreen  items-end ji flex justify-center border-lightGreen  font-medium py-1 rounded-lg  text-center hover:underline"
                href={"/"}
                title={language ? "العودة الى الرئيسية" : "Back to home"}
              >
                <AiOutlineArrowLeft />
                {language ? "العودة الى الرئيسية" : "Back to home"}
              </Link>
              <Link
                className="text-xl  text-lightGreen  items-end ji flex justify-center border-lightGreen  font-medium py-1 rounded-lg  text-center hover:underline"
                href={"/contact"}
                onClick={handleNewMassage}
                title={language ? "إرسال رد أخر" : "Send another reply"}
              >
                {language ? "إرسال رد أخر" : "Send another reply"}
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="md:container mt-14 mb-14 mx-auto md:flex ">
          <div className="md:w-7/12 ">
            <h2 className="text-6xl mb-5 text-lightGreen">
              <b>{language ? "التواصل" : "Contact Us"}</b>
            </h2>
            <h6 className="text-lightGreen mb-5 ml-4">
              <b>{language ? "معلومات التواصل" : " Contact information"} </b>
            </h6>
            <form
              onSubmit={handleConfirmMassage}
              className=" flex flex-col justify-end items-start  gap-2"
            >
              <center className="flex flex-col gap-3 w-full">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={language ? "الاسم بالكامل " : "full name"}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className=" placeholder:text-gray-500 focus:outline-none  w-[48%] focus:border-lightGreen border-2 rounded-xl px-4 py-2"
                  />
                  <input
                    type="email"
                    placeholder={language ? "البريد الإلكترونى" : "Email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="placeholder:text-gray-500 focus:outline-none   w-[48%] focus:border-lightGreen border-2 rounded-xl px-4 py-2"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder={language ? "الهاتف" : "Phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="placeholder:text-gray-500 focus:outline-none   w-[48%] focus:border-lightGreen  border-2 rounded-xl px-4 py-2"
                  />
                  <input
                    type="text"
                    placeholder={language ? "الموضوع بشأن" : "Subject"}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="placeholder:text-gray-500 focus:outline-none  
                                 focus:border-lightGreen  border-2 rounded-xl px-4 py-2 w-[48%]"
                  />
                </div>
              </center>
              {/* <input type='' placeholder='Massage'/> */}
              <center className=" w-full">
                <textarea
                  placeholder={language ? "الرسالة" : "Massage"}
                  value={massage}
                  onChange={(e) => setMassage(e.target.value)}
                  className="placeholder:text-gray-500  focus:outline-none max-h-56 h-36  focus:border-lightGreen w-[97%] ml-2 border-2 rounded-2xl px-4 py-2"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSending}
                  className="rounded-3xl w-10/12  bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
                >
                  {isSending
                    ? language
                      ? "يتم الإرسال ..."
                      : "submitting In..."
                    : language
                    ? "ارسال"
                    : "submit"}
                </button>
                {errorMassage && <div>{errorMassage}</div>}
                {confirmMassage && <div>{confirmMassage}</div>}
              </center>
            </form>
          </div>
          <div className="w-5/12  p-2 md:flex hidden">
            <Image
              src="icons/contactImg.svg"
              width="500"
              height="500"
              alt="contact image"
              // loading="lazy"
              priority={true}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
}
