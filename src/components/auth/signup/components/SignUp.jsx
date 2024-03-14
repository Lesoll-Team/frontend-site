import Image from "next/image";
import SignUpForm from "./form/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex ">
      <div className="w-full flex items-start pt-8 md:pt-24 2xl:pt-32 justify-center">
        <SignUpForm />
      </div>
      <Image
        src={"/signin.png"}
        width={555}
        height={924}
        className="h-full object-cover w-full xl:block hidden"
      />
    </div>
  );
};

export default SignUp;
