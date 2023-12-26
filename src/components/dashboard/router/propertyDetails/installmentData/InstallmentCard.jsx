const InstallmentCard = ({ title, info }) => {
  return (
    <div className="bg-gray-100 p-3 rounded-md flex items-center justify-center gap-1 flex-col text-center">
      <p className="text-xl font-semibold text-lightGreen">{title}</p>
      <p className="font-medium">{info.toLocaleString()}</p>
    </div>
  );
};
export default InstallmentCard;
