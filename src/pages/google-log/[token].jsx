import SelectBtn from "@/components/userTypeForm/SelectBtn";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { Button } from "@nextui-org/react";
import { signInWithGoogle } from "@/redux-store/features/authSlice";
import { updateGoogleData } from "@/utils/userAPI";
import Head from "next/head";
function index() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [useType, setUserType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [messageError, setMessageError] = useState(null);
  const selectUserType = (userType) => {
    setUserType(userType);
  };
  const router = useRouter();
  const token = router.query.token;
  const phone = router.query.phone;
  const type = router.query.type;

  useEffect(() => {
    if (type !== "normal") {
      setUserType(type);
    }

    if (phone !== "null") {
      setPhoneNumber(phone);
    }
  }, []);
  useEffect(() => {
    if (token && type !== "normal" && phone !== "null") {
      dispatch(signInWithGoogle(token));
      router.push("/");
    }
  }, [router]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (token && (type === "normal" || phone === "null")) {
      if (type === "normal") {
        if (!useType || useType.trim() === "") {
          language
            ? setMessageError("يجب عليك تحديد من انت أولاً")
            : setMessageError("You must define who you are first");
          return;
        } else {
          setMessageError(null);
        }
      }
      if (phone === "null") {
        if (!phoneNumber || phoneNumber.trim() === "") {
          language
            ? setMessageError(
                "يجب إدخال رقم هاتف لكى تستطيع التواصل وان يتم التواصل معك"
              )
            : setMessageError(
                "You must enter a phone number so that you can communicate and be contacted"
              );
          return;
        } else {
          setMessageError(null);
        }
      }
      updateGoogleData({
        token,
        data: { typeOfUser: useType, phone: phoneNumber },
      });
      dispatch(signInWithGoogle(token));
      router.push("/");
    }
  };

  return (
    <div className="w-full min-h-[93dvh]  text-center justify-center flex">
      <Head>
        <title>google log</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <form onSubmit={onSubmit} className=" p-5 flex-col  flex mt-6 md:mt-24 ">
        {type === "normal" ? (
          <div>
            <h1 className="text-2xl md:text-4xl text-center font-semibold">
              {language ? "حدد من انت ؟" : "You Are?"}
            </h1>
            <div className="flex md:flex-row flex-col gap-3 m-3 p-3 items-stretch">
              <SelectBtn
                btnUserType={"individual"}
                title={language ? "فرد" : "individual"}
                description={
                  "أنت مالك عقار وتتطلع إلى إدراجه للإيجار أو البيع."
                }
                onSelect={selectUserType}
                icon={
                  <FaRegUser className="text-4xl md:text-7xl text-darkGreen" />
                }
                useType={useType}
              />
              <SelectBtn
                btnUserType={"broker"}
                title={language ? "سمسار" : "Broker"}
                description={
                  " أنت سمسار يربط أصحاب العقارات بالمشترين والمستأجرين المحتملين"
                }
                onSelect={selectUserType}
                icon={
                  <FaRegHandshake className="text-4xl md:text-7xl text-darkGreen" />
                }
                useType={useType}
              />
              <SelectBtn
                btnUserType={"company"}
                title={language ? "مطور" : "Developer"}
                description={"أنت تمثل شركة وساطة عقارية أو منظمة تطوير."}
                onSelect={selectUserType}
                icon={
                  <BsBuildings className="text-4xl md:text-7xl text-darkGreen" />
                }
                useType={useType}
              />
            </div>
          </div>
        ) : null}
        {phone === "null" ? (
          <div className=" w-full space-y-10 my-5">
            <p className="text-2xl md:text-4xl text-center font-semibold">
              {language
                ? "ادخل رقم هاتف لكى تستطيع التواصل وان يتم التواصل معك"
                : "Enter a phone number so you can communicate and be contacted"}
            </p>
            <input
              type="text"
              name="phone"
              // autocomplete="off"
              className="text-2xl w-10/12 indent-3 h-16 md:w-4/12 shadow rounded-md shadow-gray-400 border border-gray-400 "
              placeholder={
                language ? "ادخل رقم هاتفك" : "Enter your phone number"
              }
              maxLength={11}
              minLength={10}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        ) : null}
        <p className="text-red-500 text-xl ">{messageError}</p>
        {type === "normal" && phone === "null" ? (
          <Button
            className=" w-full md:w-80 bg-lightGreen p-3 py-8 text-xl font-semibold text-white mx-auto hover:bg-lightGreenHover"
            type="submit"
          >
            {language ? "التالى" : "Next"}
          </Button>
        ) : (
          <p className="text-xl text-default-400  m-auto">
            {language ? "جارى المصادفة..." : "Authentication underway..."}
          </p>
        )}
      </form>
    </div>
  );
}
export default index;
