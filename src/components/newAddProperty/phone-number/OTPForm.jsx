import { useWindowWidth } from "@/Hooks/useWindowWidth";
import Button from "@/Shared/ui/Button";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useSelector } from "react-redux";
import { Ring } from "@uiball/loaders";

import ReactModal from "@/Shared/ui/ReactModal";
import { getOtp, verifyPhoneNumber } from "../apis/otpApis";

const OTPModalAddProp = ({ onSuccess, phoneNumber, isOpen, setIsOpen }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(30); // Initial countdown value
  const { windowWidth } = useWindowWidth();
  const language = useSelector((state) => state.GlobalState.languageIs);

  // Countdown timer effect
  useEffect(() => {
    let timer;
    if (!canResend) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(timer);
            setCanResend(true);
            return 0; // Reset countdown value
          }
          return prevCountdown - 1;
        });
      }, 1000); // Run every second
    }
    return () => clearInterval(timer);
  }, [canResend]);
  const resendOtp = async () => {
    await getOtp({ phoneNumber });
    setCanResend(false);
    setCountdown(30);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await verifyPhoneNumber({ setFormStatus, otp, setServerError });
  };

  useEffect(() => {
    if (isOpen && phoneNumber) getOtp({ phoneNumber });
  }, [phoneNumber, isOpen]);

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
      onSuccess();
      setIsOpen(false);
    }
  }, [formStatus]);

  return (
    <ReactModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}>
      <div className="flex items-center justify-center flex-col space-y-8 my-10 md:px-0 px-5">
        <div className="text-center space-y-4">
          {" "}
          <h1 className="text-2xl md:text-4xl ">
            {language ? "ادخل كود التأكيد " : "Enter your OTP"}
          </h1>
          <p className="max-w-[400px] text-center">
            {language
              ? "تم ارسال كود  التأكيد (OTP) إلى هاتفك المحمول يرجى التحقق من الرسائل الواردة"
              : "The confirmation code (OTP) has been sent to your mobile phone. Please check the incoming messages."}
          </p>
        </div>
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
            numInputs={6}
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
        <div className="flex gap-2 bg-lightNeutral p-3 text-center md:text-base text-sm ">
          {canResend ? (
            <button
              onClick={resendOtp}
              type="button"
              className="text-linkColor underline"
            >
              {language ? "إعادة إرسال كود التأكيد" : "Resend OTP"}
            </button>
          ) : (
            <>
              <span>
                {language
                  ? "يمكنك إرسال كود التأكيد مرة أخرى بعد"
                  : "You can send the account activation code again after"}
              </span>
              <span>00:{countdown < 10 ? `0${countdown}` : countdown}</span>{" "}
            </>
          )}
          {/* Display countdown */}
        </div>

        <Button
          type={"button"}
          onClick={handleSubmit}
          disabled={otp.length < 6 || formStatus === "loading"}
        >
          {formStatus === "loading" ? (
            <Ring size={28} color="#fff" />
          ) : language ? (
            "ارسال"
          ) : (
            "Send"
          )}
        </Button>
      </div>
    </ReactModal>
  );
};
export default OTPModalAddProp;
