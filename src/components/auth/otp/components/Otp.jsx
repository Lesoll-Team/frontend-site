import OtpInputForm from "./OtpInputForm";

const Otp = ({ userData, token }) => {
  return (
    <div className="grid lg:grid-cols-2 min-h-[94dvh]">
      {/* <div className="hidden md:flex h-100 min-h-[90dvh] bg-lightGreen items-center w-1/2 justify-start flex-col relative"> */}
      <div className="flex h-full flex-col items-center justify-center">
        <OtpInputForm userData={userData} token={token} />
      </div>
      <img
        src={"/signin.png"}
        // width={"100"}
        // height={"100"}
        // radius="none"
        // loading="lazy"
        className="object-cover lg:block hidden  h-[94dvh] w-full "
      />
    </div>
  );
};
export default Otp;