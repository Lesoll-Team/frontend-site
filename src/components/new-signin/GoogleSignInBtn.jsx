import { signWithGoogle } from "@/utils/userAPI";
import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";

const GoogleSignInBtn = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const handleGoogleAuth = async () => {
    // e.preventDefault();

    await signWithGoogle();
  };
  return (
    <button
      type="button"
      onClick={handleGoogleAuth}
      className="w-full py-3 text-lg mt-3 flex items-center justify-center bg-lightNeutral duration-100 gap-1  rounded-md "
    >
      <FcGoogle className="text-2xl mx-3" />
      <span>{language ? "تسجيل الدخول بجوجل" : "Log In With Google"}</span>
    </button>
  );
};
export default GoogleSignInBtn;
