import { setLang } from "@/redux-store/features/globalState";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
const ChangeLang = ({ bigScreen }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();
  const router = useRouter();
  const changeLang = () => {
    if (language) {
      dispatch(setLang(false));
      router.push(router.pathname, router.asPath, { locale: "en" });
      // router.reload(router.pathname, router.asPath, { locale: "en" });
    } else {
      dispatch(setLang(true));
      router.push(router.pathname, router.asPath, { locale: "ar" });
      // router.reload(router.pathname, router.asPath, { locale: "ar" });
    }
  };
  return (
    <button
      onClick={changeLang}
      className={` text-darkGray lg:text-base lg:font-semibold font-noto w-fit ${
        bigScreen && "hidden lg:block "
      } `}
    >
      {language ? "English" : "عربى"}
    </button>
  );
};
export default ChangeLang;
