import { useSelector } from "react-redux";
import Link from "next/link";

const SignInToPost = ({ needs }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const PropertyTitle = language
    ? "قم بتسجيل الدخول لإضافة عقارك!"
    : "Log in to add your property!";
  const needsTitle = language
    ? "قم بتسجيل الدخول لإضافة طلبك! "
    : "Log in to add your need";

  const propertyDescription = language
    ? "لإضافة عقارك. يرجى تسجيل الدخول إذا كنت تمتلك حسابًا، أو إنشاء حساب مجاني إذا لم تكن لديك حساب بعد. شكرًا لتفهمك وتعاونك!"
    : "To add your property, please log in if you already have an account, or create a free account if you don't have one yet. Thank you for your understanding and cooperation!";
  const needDescription = language
    ? "لإضافة طلبك. يرجى تسجيل الدخول إذا كنت تمتلك حسابًا، أو إنشاء حساب مجاني إذا لم تكن لديك حساب بعد. شكرًا لتفهمك وتعاونك!"
    : "To add your need, please log in if you already have an account, or create a free account if you don't have one yet. Thank you for your understanding and cooperation!";
  return (
    <div className="h-[90dvh] grid place-content-center">
      <div className=" px-7 sm:h-fit py-12 relative overflow-auto w-[90vw] md:w-[700px] space-y-8 border rounded-md">
        <h2 className="text-center">{needs ? needsTitle : PropertyTitle}</h2>
        <p>{needs ? needDescription : propertyDescription}</p>
        <div className="flex items-center gap-3 sm:w-[80%] justify-center mx-auto">
          <Link
            href={"/signup"}
            className="py-3 border border-lightGreen text-white bg-lightGreen w-full rounded-md text-center"
          >
            {language ? "إنشاء حساب" : "Sign Up"}
          </Link>
          <Link
            href={"/signin"}
            className="py-3 border border-lightGreen text-lightGreen  w-full rounded-md text-center"
          >
            {language ? "تسجيل الدخول" : "Sign In"}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignInToPost;