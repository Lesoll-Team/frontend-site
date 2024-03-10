const SelectBtn = ({
  icon,
  title,
  description,
  onSelect,
  useType,
  btnUserType,
}) => {
  return (
    <button
      onClick={() => onSelect(btnUserType)}
      type="button"
      className={`w-full border-4 flex  md:flex-col items-center  gap-4 p-5 rounded-md duration-150 ${
        useType === btnUserType && " border-darkGreen bg-white drop-shadow-xl"
      }`}
    >
      {icon}
      <div className="text-start md:text-center space-y-2">
        <h3 className="md:text-3xl text-2xl font-semibold">{title}</h3>
        <p className="md:text-xl text-sm">{description}</p>
      </div>
    </button>
  );
};
export default SelectBtn;
