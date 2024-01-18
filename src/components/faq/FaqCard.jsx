import { useSelector } from "react-redux";
import { RiArrowDownSLine } from "react-icons/ri";
const FaqCard = ({ faq, selected, setSelected }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const open = selected === faq._id;
  return (
    <div className="border-b-2 py-4 px-3 space-y-3">
      <button
        onClick={() => {
          if (selected === faq._id) {
            setSelected("");
          } else {
            setSelected(faq._id);
          }
        }}
        className="w-full flex items-center justify-between "
      >
        <span className="text-base md:text-lg text-start">
          {language ? faq.question.ar : faq.question.en}
        </span>

        <RiArrowDownSLine
          className={`text-2xl duration-100 ${open && "rotate-180"}`}
        />
      </button>
      <div
        className={` overflow-hidden  space-y-3 ${open ? "h-[100%]" : "h-0"}`}
      >
        {faq.answers.map((answer) => {
          return (
            <p className="text-darkGray md:text-base text-sm ">
              {language ? answer.ar : answer.en}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default FaqCard;
