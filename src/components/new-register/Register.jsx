import { Image } from "@nextui-org/react";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="grid lg:grid-cols-2 min-h-[94dvh]">
      {/* <div className="hidden md:flex h-100 min-h-[90dvh] bg-lightGreen items-center w-1/2 justify-start flex-col relative"> */}
      <div className="flex h-full flex-col items-center justify-center">
        <RegisterForm />
      </div>
      <Image
        src={"/signin.png"}
        width={"100"}
        height={"100"}
        radius="none"
        // loading="lazy"
        className="object-cover lg:block hidden  h-[94dvh] w-full "
      />
    </div>
  );
};
export default Register;
