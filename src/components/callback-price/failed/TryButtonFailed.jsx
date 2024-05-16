import Link from "next/link";

const TryButtonFailed = ({ language, isTime }) => {
  return (
    <div className=" text-center gap-y-3 my-5 flex  flex-col">
      <Link
        className="bg-lightGreen  px-6 py-2 rounded hover:bg-lightGreenHover mx-auto text-white "
        href="/prices"
      >
        {language ? "حاول مره اخري" : "Try agin"}
      </Link>
      <p className="xs-text">
        {" "}
        {language
          ? `سيتم توجيهك الي الصفحة الرئيسية خلال ${isTime} ثانية`
          : `You will be redirected to the homepage in ${isTime} seconds`}
      </p>
    </div>
  );
};
export default TryButtonFailed;
