import { useSelector } from "react-redux";

const PropType = ({ type }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div
      className={`bg-white px-5 py-1 text-sm md:text-base text-baseGray   ${
        language ? "rounded-l-md" : "rounded-r-md"
      }  `}
    >
      {type}
    </div>
  );
};
export default PropType;
