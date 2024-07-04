import { useWindowWidth } from "@/Hooks/useWindowWidth";
import Button from "@/Shared/ui/Button";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { getOtpCode, sendOtp } from "../api/otpApis";
import { useRouter } from "next/router";
import { Ring } from "@uiball/loaders";
import Cookies from "js-cookie";
import { useUser } from "@/Shared/UserContext";
import { useTranslation } from "next-i18next";

const OtpInputForm = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(30); // Initial countdown value
  const { windowWidth } = useWindowWidth();
  const token = router.query.token;
  const phone = router.query.phone;
  const { setUserData } = useUser();
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
    await getOtpCode(phone, token);
    setCanResend(false);
    setCountdown(30);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendOtp({ setFormStatus, otp, setServerError, token });
  };

  useEffect(() => {
    const getOtp = async () => {
      await getOtpCode(phone, token);
    };
    if (token && phone) {
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
      const redirectBackTo = router?.query?.redirectBackTo;
      Cookies.set("userToken", token);

      if (redirectBackTo) {
        setUserData();

        router.replace(`${redirectBackTo}`);
      } else {
        setUserData();

        router.replace("/");
      }
    }
  }, [formStatus]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center flex-col space-y-8 my-10 md:px-0 px-5"
    >
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-4xl ">{t("Enter_OTP")}</h1>
        <p className="max-w-[400px] text-center">{t("Please_Check_OTP")}</p>
      </div>
      <img src="/otp.svg" className="w-[40%] md:w-[30%]" />
      {error && (
        <div className="w-[55%] bg-red-600 text-white py-1 text-center rounded">
          {t("OTP_Wrong")}
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
      <div className="flex gap-2 bg-lightNeutral p-3 text-center md:text-base text-sm ">
        {canResend ? (
          <button
            onClick={resendOtp}
            type="button"
            className="text-linkColor underline"
          >
            {t("Resend_OTP")}
          </button>
        ) : (
          <>
            <span>{t("Resend_OTP_After_Time")}</span>
            <span>00:{countdown < 10 ? `0${countdown}` : countdown}</span>{" "}
          </>
        )}
        {/* Display countdown */}
      </div>

      <Button disabled={otp.length < 4 || formStatus === "loading"}>
        {formStatus === "loading" ? <Ring size={28} color="#fff" /> : t("Send")}
      </Button>
    </form>
  );
};
export default OtpInputForm;
