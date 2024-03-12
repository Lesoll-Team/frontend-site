const SelectCard = ({ icon, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center items-center px-10 py-5 md:px-28  md:py-8 drop-shadow-md bg-neutral rounded-lg  duration-200 hover:cursor-pointer"
    >
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
        {title}
      </h2>
      {icon}
    </div>
  );
};
export default SelectCard;
