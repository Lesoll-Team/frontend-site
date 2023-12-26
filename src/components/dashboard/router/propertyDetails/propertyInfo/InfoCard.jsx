const InfoCard = ({ info, icon, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 rounded-md p-3 bg-white drop-shadow-md border">
      <div className="font-bold text-darkGreen text-base xl:text-xl flex items-center gap-1">
        {icon}
        <p>{title}</p>
      </div>
      <p className="sm:text-lg text-center">{info}</p>
    </div>
  );
};
export default InfoCard;
