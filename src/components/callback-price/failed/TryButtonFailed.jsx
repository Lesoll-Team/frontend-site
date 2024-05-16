import Link from "next/link";

const TryButtonFailed = ({ language }) => {
  return (
    <div className=" text-center gap-y-3 my-5 flex  flex-col">
      <Link
        className="bg-lightGreen  px-6 py-2 rounded hover:bg-lightGreenHover mx-auto text-white "
        href="/prices"
      >
        {language ? "حاول مره اخري" : "Try agin"}
      </Link>
    </div>
  );
};
export default TryButtonFailed;
