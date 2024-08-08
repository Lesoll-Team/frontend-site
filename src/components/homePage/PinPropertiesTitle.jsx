import { useSelector } from "react-redux";

const PinPropertiesTitle = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <h2 className=" text-grayText2 my-8">
      {language ? " الإعلانات المميزة" : "Featured Properties"}
    </h2>
  );
};
export default PinPropertiesTitle;
