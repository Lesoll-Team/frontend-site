import { useState } from "react";
import { useSelector } from "react-redux";
const Summary = () => {
  // const price = useSelector((state) => state.Property.price);
  const price = useSelector((state) => state.Property.price);
  const downPayment = useSelector((state) => state.Property.downPayment);
  const installmentPeriod = useSelector(
    (state) => state.Property.installmentOption.period
  );
  const installmentPlan = useSelector(
    (state) => state.Property.installmentOption.type
  );
  const [installmentAmount, setInstallmentAmount] = useState(null);
  return (
    <div className="w-full space-y-2 ">
      <h3 className="text-xl text-darkGreen font-bold">Summary</h3>
      <div className=" space-y-3">
        {/* <div>
          <div className="text-lightOrange font-bold  space-x-2 whitespace-nowrap">
          <h4 className="text-white font-semibold text-lg">Price</h4>
            <span>{!price ? "0" : parseInt(price).toLocaleString()}</span>
            <span>EGP</span>
          </div>
        </div> */}

        <div className="w-full font-semibold  md:text-lg flex items-center justify-between gap-6 focus:outline-none bg-darkGreen text-white  border-lightGreen rounded-xl p-3 px-4 drop-shadow-xl  whitespace-nowrap">
          <div className="flex space-x-1">
            <h4 className="text-white font-semibold text-lg">Price:</h4>
            <p>{!price ? "0" : parseInt(price).toLocaleString()}</p>
          </div>
          <p>EGP</p>
        </div>
        <div className="w-full font-semibold  md:text-lg flex items-center justify-between gap-6 focus:outline-none bg-darkGreen text-white  border-lightGreen rounded-xl p-3 px-4 drop-shadow-xl  whitespace-nowrap">
          <div className="flex space-x-1">
            <h4 className="text-white font-semibold text-lg">Down payment:</h4>
            <p>{0}</p>
          </div>
          <p>EGP</p>
        </div>
        <div className="w-full font-semibold  md:text-lg  items-center justify-between gap-6 focus:outline-none bg-darkGreen text-white  border-lightGreen rounded-xl p-3 px-4 drop-shadow-xl  whitespace-nowrap">
          <div className="flex space-x-1 justify-between lg:flex-row flex-col ">
            <h4 className="text-white font-semibold text-lg">
              Installment amount :
            </h4>

            <div className="flex justify-between w-full gap-3">
              <p>
                {price && installmentPeriod && downPayment
                  ? parseFloat((price - downPayment) / installmentPeriod)
                      .toFixed(1)
                      .toLocaleString()
                  : 0}
              </p>
              <p>/{installmentPlan}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
