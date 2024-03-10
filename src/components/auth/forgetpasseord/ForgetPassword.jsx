import ForgetPasswrodForm from "./ForgetPasswrodForm";

const ForgetPassword = () => {
  return (
    <main className="grid lg:grid-cols-2 min-h-[90dvh] lg:min-h-[94dvh]">
      {/* <div className="hidden md:flex h-100 min-h-[90dvh] bg-lightGreen items-center w-1/2 justify-start flex-col relative"> */}
      <div className="flex h-full flex-col items-center justify-center">
        <ForgetPasswrodForm />
      </div>
      <img
        src={"/signin.png"}
        className="object-cover lg:block hidden  h-[94dvh] w-full "
      />
    </main>
  );
};

export default ForgetPassword;
