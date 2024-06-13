import Head from "next/head";
import ForgetPasswrodForm from "./ForgetPasswrodForm";

const ForgetPassword = () => {
  return (
    <main className="grid lg:grid-cols-2 min-h-[90dvh] lg:min-h-[94dvh]">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="flex h-full flex-col items-center justify-center">
        <ForgetPasswrodForm />
      </div>
      <img
        src={"/signin.png"}
        className="object-cover lg:block hidden  h-[94dvh] w-full "
        alt="signin password"
      />
    </main>
  );
};

export default ForgetPassword;
