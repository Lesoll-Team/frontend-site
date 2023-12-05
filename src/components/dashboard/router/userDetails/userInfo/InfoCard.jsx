const InfoCard = ({ title, info }) => {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold" dir="rtl">
        {title}
      </h3>
      <p>{info}</p>
    </div>
  );
};
export default InfoCard;
