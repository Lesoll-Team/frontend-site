import Link from "next/link";

const TryButtonFailed = ({ language, info }) => {
  const isFromAddProperty = info.lastLink.includes("add-property");

  return (
    <div className=" text-center gap-y-3 my-5 flex  flex-col">
      {isFromAddProperty ? (
        <Link
          className="bg-lightGreen  px-6 py-2 rounded hover:bg-lightGreenHover mx-auto text-white "
          href="/profile/my-properties?tab=draft"
        >
          {language ? "الذهاب الى المسودة" : "Go to your drafts"}
        </Link>
      ) : (
        <Link
          className="bg-lightGreen  px-6 py-2 rounded hover:bg-lightGreenHover mx-auto text-white "
          href="/prices"
        >
          {language ? "حاول مره اخري" : "Try agin"}
        </Link>
      )}
    </div>
  );
};
export default TryButtonFailed;
