import { useWindowWidth } from "@/Hooks/useWindowWidth";
import Button from "@/Shared/ui/Button";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useSelector } from "react-redux";

const OtpInputForm = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const { windowWidth } = useWindowWidth();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
        {language ? "ارسال" : "Send"}
      </Button>
    </form>
  );
};
export default OtpInputForm;
