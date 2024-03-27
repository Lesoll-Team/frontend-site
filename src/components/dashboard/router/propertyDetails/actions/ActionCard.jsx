const ActionCard = ({ icon, title, num }) => {
  return (
    <div className="bg-gray-100 p-3 text-center rounded-md">
      <h4 className="text-sm sm:text-lg font-semibold flex items-center justify-center gap-1 ">
        {title}
        {icon}
      </h4>
      <p>{num}</p>
    </div>
  );
};
export default ActionCard;
