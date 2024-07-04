import ReactModal from "@/Shared/ui/ReactModal";
import { getLangBoolean } from "@/utils/getLangBoolean";

const NotSignUpModal = ({
  isOpen,
  setIsOpen,
  setRegisterIsOpen,
  setLoginIsOpen,
}) => {
  const language = getLangBoolean();

  function openRegister() {
    setIsOpen(false);
    setRegisterIsOpen(true);
  }
  function openLogin() {
    setIsOpen(false);
    setLoginIsOpen(true);
  }
  return (
    <>
      <ReactModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}>
        <div className="w-screen  px-3 sm:h-fit py-5 relative overflow-auto max-w-[90vw] md:max-w-[600px]   gap-6 md:gap-10 flex flex-col justify-center items-center">
          <h1 className="text-center">
            {language
              ? "قم بالتسجيل للحصول على أفضل تجربة!"
              : "Sign up for the best experience!"}
          </h1>
          <p className="text-center">
            {language
              ? "احصل على افضل تجربة عندما تكون مسجّلاً للتواصل المباشر مع المعلن والاستفادة من خدماتنا بالكامل , يرجى تسجيل الدخول او إنشاء حساب مجانى الأن,"
              : "Get the best experience when you are registered to communicate directly with the advertiser and benefit from our services in full, please log in or create a free account now"}
          </p>
          <div className="flex items-center gap-8 w-full md:max-w-[70%]">
            <button
              onClick={openRegister}
              className="w-full min-w-[100px] px-3 py-3 border-1 border-lightGreen bg-lightGreen text-white rounded"
            >
              {language ? "إنشاء حساب" : "Create an account"}
            </button>
            <button
              onClick={openLogin}
              className="w-full min-w-[100px]  px-3 py-3 border-1 border-lightGreen bg-white text-lightGreen rounded"
            >
              {language ? "تسجيل الدخول" : "Sign In"}
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default NotSignUpModal;
