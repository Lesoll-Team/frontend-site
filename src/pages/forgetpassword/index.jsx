import Image from "next/image";
import lock from "../../../public/lock.svg";
import ResetPassword from "@/components/forgetpasseord/ResetPassword";
import Head from "next/head";

const ForgetPass = () => {
  return (
    <div className="flex  mx-auto  min-h-[100dvh] items-center justify-center password-bg ">
    <Head><title>Lesoll Setting</title></Head> 
      {/* Choices */}
      <ResetPassword />
      {/* img */}
      <div className="hidden md:flex md:flex-col md:w-1/2 bg-lightGreen min-h-[100dvh] items-center justify-center">
        <Image src={lock} alt="" />
      </div>
    </div>
  );
};

export default ForgetPass;
