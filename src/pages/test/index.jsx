
import Image from "next/image";
import house from "../../../public/page3.svg";

import SignInForm from "@/components/signin/SignInForm";
const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      {/* form div*/}
      <div className="flex flex-col space-y-3 md:w-1/2 justify-center items-center min-h-[100dvh] border-3  px-1 ">
        <SignInForm userType="user" />
      </div>
      {/* img */}
      <div className="hidden md:flex h-100 min-h-[100dvh] bg-lightGreen items-center w-1/2 justify-end">
        <Image src={house} alt="home" className="w-4/5" 
            loading="lazy"/>
      </div>
      {/* suggest */}
    </div>
  );
};
export default SignUp;
