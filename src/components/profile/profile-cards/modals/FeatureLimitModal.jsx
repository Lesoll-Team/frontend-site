import ReactModal from "@/Shared/ui/ReactModal";
import Link from "next/link";
import { useSelector } from "react-redux";

const FeatureLimitModal = ({ open, setIsOpen }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <ReactModal setModalIsOpen={setIsOpen} modalIsOpen={open}>
      <div className="px-2 md:px-5 py-5 md:w-[600px] w-[85vw] sm:w-[80vw] flex flex-col gap-6 md:gap-8 justify-center items-center">
        <h3 className="text-center">
          {language
            ? "تم استنفاذ عدد مرات الاستخدام المسموح بها لهذه الميزة"
            : "The number of uses allowed for this feature has been exhausted"}
        </h3>
        <p className="text-center font-noto">
          {language
            ? "قم بتجديد باقتك أو إضافة باقة جديدة للحصول على إمكانية الوصول إليها مرة أخرى والاستمرار في الاستفادة منها."
            : "Renew your package or add a new package to get access to it again and continue to benefit from it"}
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
export default FeatureLimitModal;
