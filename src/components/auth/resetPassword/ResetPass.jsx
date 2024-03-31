import Image from "next/image";
import ResetPassForm from "./ResetPassForm";
const ResetPass = () => {
  return (
    <div className="grid lg:grid-cols-2 min-h-[94dvh]">
      {/* <div className="hidden md:flex h-100 min-h-[90dvh] bg-lightGreen items-center w-1/2 justify-start flex-col relative"> */}
      <div className="flex h-full flex-col items-center justify-center">
        <ResetPassForm />
      </div>
      <Image
        src={"/signin.png"}
        width={2000}
        height={2000}
        radius="none"
        alt="sign in In image"
        className="object-cover lg:block hidden  h-[94dvh] w-full "
      />
    </div>
  );
};
export default ResetPass;
