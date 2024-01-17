import Image from "next/image";
import lock from "../../../public/lock.svg";
import Head from "next/head";
import ForgetPassword from "@/components/forgetpasseord/ForgetPassword";

const ForgetPass = () => {
  return (
    <div className="flex  mx-auto  min-h-[100dvh] items-center justify-center password-bg ">
      <Head>
        <title>Forget Password</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <ForgetPassword />
      <div className="hidden md:flex md:flex-col md:w-1/2 bg-lightGreen min-h-[100dvh] items-center justify-center">
        <Image src={lock} alt="" />
      </div>
    </div>
  );
};

export default ForgetPass;
