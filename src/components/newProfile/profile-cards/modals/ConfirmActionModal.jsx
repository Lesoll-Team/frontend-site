import ReactModal from "@/Shared/ui/ReactModal";
import Link from "next/link";
import { useSelector } from "react-redux";

const NoPackageModal = ({ open, setIsOpen }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <ReactModal setModalIsOpen={setIsOpen} modalIsOpen={open}>
      <div className="px-2 md:px-5 py-5 md:w-[600px] w-[85vw] sm:w-[80vw] flex flex-col gap-6 md:gap-8 justify-center items-center">
        <h3 className="text-center">
          {language
            ? "احصل على هذه الميزة بالاشتراك في أحد باقاتنا المدفوعة الآن!"
            : "Get this feature by subscribing to one of our paid packages now!"}
        </h3>
        <p className="text-center font-noto">
          {language
            ? "استمتع بميزاتنا الحصرية واحصل على أقصى استفادة من تجربتك! اشترك الآن للاستمتاع بكل ما نقدمه وتحقيق أهدافك بكفاءة أكبر"
            : "Enjoy our exclusive features and get the most out of your experience! Sign up now to enjoy everything we have to offer and achieve your goals more efficiently"}
        </p>
        <Link
          className="py-3 px-12 bg-lightGreen rounded-md text-white"
          href={"/"}
        >
          {language ? "اشترك الان" : "Subscribe now"}
        </Link>
      </div>
    </ReactModal>
  );
};
export default NoPackageModal;
