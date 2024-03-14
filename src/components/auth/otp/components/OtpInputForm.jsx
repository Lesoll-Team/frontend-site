import { useWindowWidth } from "@/Hooks/useWindowWidth";
import Button from "@/Shared/ui/Button";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useSelector } from "react-redux";
import { getOtpCode, sendOtp } from "../api/otpApis";
import { useRouter } from "next/router";
import { Ring } from "@uiball/loaders";

const OtpInputForm = ({ userData }) => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const { windowWidth } = useWindowWidth();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const token = router.query.token;
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendOtp({ setFormStatus, otp, setServerError, token });
  };
  console.log(serverError);
  console.log(userData);
  useEffect(() => {
    const getOtp = async () => {
      await getOtpCode(userData.phone, token);
    };
    if (token) {
      getOtp();
    }
  }, [router]);
  useEffect(() => {
    if (serverError?.code === 400) {
      setError(true);
      setServerError(null);
      setTimeout(() => {
        setError(false);
      }, 3500);
    }
  }, [serverError]);
  useEffect(() => {
    if (formStatus === "success") {
      localStorage.setItem("userToken", JSON.stringify(token));
      router.push("/");
    }
  }, [formStatus]);
  console.log(formStatus);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center flex-col space-y-8 my-10"
    >
      <h1 className="text-2xl md:text-4xl ">
        {language ? "ادخل كود تفعيل الحساب" : "Enter your OTP"}
      </h1>
      <img src="/otp.svg" className="w-[40%] md:w-[30%]" />
      {error && (
        <div className="w-[55%] bg-red-600 text-white py-1 text-center rounded">
          {language ? "الكود غير صحيح" : "The OTP is wrong"}
        </div>
      )}
      <div className=" flex items-center : gap-2" dir="ltr">
        <OTPInput
          inputType="number"
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span className="mx-2"></span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            border: "1px solid #A3A1A1",
            width: windowWidth > 500 ? "60px" : "40px",
            height: windowWidth > 500 ? "60px" : "40px",
            outline: "none",
            borderRadius: "4px",
          }}
        />
      </div>
      <Button
        // className={otp.length < 4 && "opacity-50"}
        disabled={otp.length < 4}
      >
        {formStatus === "loading" ? (
          <Ring size={28} color="#fff" />
        ) : language ? (
          "ارسال"
        ) : (
          "Send"
        )}
      </Button>
    </form>
  );
};
export default OtpInputForm;
