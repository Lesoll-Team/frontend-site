import { getLangBoolean } from "@/utils/getLangBoolean";

const PropType = ({ type }) => {
  const language = getLangBoolean();

  return (
    <div
      className={`bg-white px-5 py-1 lg-text text-baseGray   ${
        language ? "rounded-l-md" : "rounded-r-md"
      }  `}
    >
      {type}
    </div>
  );
};
export default PropType;
