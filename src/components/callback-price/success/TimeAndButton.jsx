import Link from "next/link";

const TimeAndButton = ({ language, isTime }) => {
  return (
    <div className=" text-center gap-y-3 my-5 flex  flex-col">
      <Link
        className="bg-lightGreen  px-6 py-2 rounded hover:bg-lightGreenHover mx-auto text-white "
        href="/profile/my-subscriptions"
      >
        {language ? "عرض جميع باقاتي" : "View my subscriptions"}
      </Link>
      <p className="xs-text">{`سيتم توجيهك الي الصفحة الشخصية خلال ${isTime} ثانية`}</p>
    </div>
  );
};
export default TimeAndButton;
