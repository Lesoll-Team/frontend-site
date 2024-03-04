import { useSelector } from "react-redux";

const arr = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const UsersTable = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-8">
      <h3 className="text-xl text-lightGreen font-bold h-16">
        {language ? "المستخدمين" : "Users"}
      </h3>
      <div>
        <div></div>
        {arr.map((item, index) => {
          const isEven = (index + 1) % 2 === 0;
          return (
            <div
              className={`w-full h-5 ${isEven ? "bg-white" : "bg-gray-200"}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default UsersTable;
