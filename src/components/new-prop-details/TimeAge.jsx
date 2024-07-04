import { BiTime } from "react-icons/bi";
import { memo } from "react";
import { formatDate } from "@/utils/FormateData";
import { getLangBoolean } from "@/utils/getLangBoolean";
const TimeAge = ({ createdAt }) => {
  const language = getLangBoolean();
  const { formattedDate } = formatDate(createdAt);
  return (
    <div
      className={`bg-white p-2 absolute z-10 bottom-2 left-2 md:bottom-5 rounded w-fit flex items-center gap-1 lg-text  text-lightGreen font-bold ${language ? "md:right-2  " : "md:left-2 "}`}
    >
      <BiTime className="text-xl" />
      {formattedDate}
    </div>
  );
};
export default memo(TimeAge);
