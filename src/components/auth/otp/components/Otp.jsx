import Head from "next/head";
import OtpInputForm from "./OtpInputForm";

const Otp = () => {
  return (
    <div className="grid lg:grid-cols-2 min-h-[94dvh]">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="flex h-full flex-col items-center justify-center">
        <OtpInputForm />
      </div>
      <img
        src={"/signin.png"}
        alt="otp signin"
        className="object-cover lg:block hidden  h-[94dvh] w-full "
      />
    </div>
  );
};
export default Otp;
