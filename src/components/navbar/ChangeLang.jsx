import { setLang } from "@/redux-store/features/globalState";
import { useDispatch, useSelector } from "react-redux";

const ChangeLang = ({ bigScreen }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();
  const changeLang = () => {
    if (language) {
      dispatch(setLang(false));
    } else {
      dispatch(setLang(true));
    }
  };
  return (
    <button
      onClick={changeLang}
      className={` text-darkGray lg:text-base lg:font-semibold font-inter w-fit ${
        bigScreen && "hidden lg:block "
      } `}
    >
      {language ? "English" : "عربى"}
    </button>
  );
};
export default ChangeLang;
