import { useUser } from "@/Shared/UserContext";
import { signWithGoogle } from "@/utils/userAPI";
import { useTranslation } from "next-i18next";
import { FcGoogle } from "react-icons/fc";

const GoogleSignInBtn = () => {
  const { t } = useTranslation("common");
  const { setUserData } = useUser();
  const handleGoogleAuth = async () => {
    await signWithGoogle();
    setUserData();
  };
  return (
    <button
      type="button"
      onClick={handleGoogleAuth}
      className="w-full py-2 text-lg mt-3 flex items-center justify-center bg-lightNeutral duration-100 gap-1  rounded-md "
    >
      <FcGoogle className="text-2xl mx-3" />
      <span>{t("Sign_In_Google")}</span>
    </button>
  );
};
export default GoogleSignInBtn;
