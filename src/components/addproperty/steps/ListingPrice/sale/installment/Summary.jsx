import { useSelector } from "react-redux";
const Summary = () => {
  const price = useSelector((state) => state.Property.price);
  const n = "";

  return (
    <div className="w-full ">
      <h3 className="text-xl font-extrabold text-darkGreen mb-2">Summary</h3>
      <div className="space-y-1 bg-white border-[3px] border-darkGreen rounded-xl drop-shadow-lg p-2 md:px-4">
        <div>
          <h4 className="text-darkGreen font-semibold text-lg">Price</h4>
          <div className="w-full font-semibold  md:text-lg flex items-center justify-between gap-6 focus:outline-none bg-darkGreen text-white  border-lightGreen rounded-xl p-4 drop-shadow-xl  whitespace-nowrap">
            <p>{!price ? "0" : parseInt(price).toLocaleString()}</p>
            <p>EGP</p>
          </div>
        </div>
        <div>
          <h4 className="text-darkGreen font-semibold text-lg">Down payment</h4>
          <div className="w-full font-semibold  md:text-lg flex items-center justify-between gap-6 focus:outline-none bg-darkGreen text-white  border-lightGreen rounded-xl p-4 drop-shadow-xl  whitespace-nowrap">
            <p>{0}</p>
            <p>EGP</p>
          </div>
        </div>
        <div>
          <h4 className="text-darkGreen font-semibold text-lg">
            Installment amount
          </h4>
          <div className="w-full font-semibold  md:text-lg flex items-center justify-between gap-6 focus:outline-none bg-darkGreen text-white  border-lightGreen rounded-xl p-4 drop-shadow-xl  whitespace-nowrap">
            <p>{n.toLocaleString() || 0}</p>
            <p>EGP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
