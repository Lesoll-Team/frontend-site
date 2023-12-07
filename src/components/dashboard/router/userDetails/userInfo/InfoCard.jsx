const InfoCard = ({ title, info }) => {
  return (
    <div className="text-center flex flex-col md:items-start border items-center justify-center p-3 border-black">
      <h3 className="sm:text-xl text-medium font-semibold" dir="rtl">
        {title}
      </h3>
      <p className="w-fit md:text-md text-xs ">{info}</p>
    </div>
  );
};
export default InfoCard;
