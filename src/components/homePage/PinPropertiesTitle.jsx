import { useSelector } from "react-redux";

const PinPropertiesTitle = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <h2 className=" text-grayText2">
      {language ? "أفضل الإعلانات" : "Best Properties"}
    </h2>
  );
};
export default PinPropertiesTitle;
