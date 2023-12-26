const InfoCard = ({ title, info }) => {
  return (
    <div className="text-center flex flex-col   h-full  px-5 gap-1 items-center bg-white justify-center py-2 border-lightGreen rounded-md b">
      <h3 className="sm:text-xl text-medium text-slate-500 " dir="rtl">
        {title}
      </h3>
      <p className="w-fit md:text-md lg:text-lg font-semibold text-lightGreen text-xs text break-all	">
        {info}
      </p>
    </div>
  );
};
export default InfoCard;
