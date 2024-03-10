import Image from "next/image";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="grid lg:grid-cols-2 min-h-[100dvh]">
      {/* <div className="hidden md:flex h-100 min-h-[90dvh] bg-lightGreen items-center w-1/2 justify-start flex-col relative"> */}
      <div className="2xl:-mt-20 flex h-full flex-col items-center justify-center ">
        <RegisterForm />
      </div>
      <Image
        src={"/signin.png"}
        width={2000}
        height={2000}
        radius="none"
        alt="sign up In image"
        // loading="lazy"
        className="object-cover lg:block hidden  min-h-[99vh] w-full  "
      />
    </div>
  );
};
export default Register;
