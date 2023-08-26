import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNextStep,
  setBackStep,
  postProperty,
} from "@/redux-store/features/propertySlice";
const FormControlBtns = ({ canGoNext }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.Property.step);
  const isSubmiting = useSelector((state) => state.Property.isSubmiting);
  const title = useSelector((state) => state.Property.title);
  const offer = useSelector((state) => state.Property.offer);
  const multiImage = useSelector((state) => state.Property.multiImage);
  const mainImg = useSelector((state) => state.Property.mainImg);
  const rentalPeriod = useSelector((state) => state.Property.rentalPeriod);
  const insurance = useSelector((state) => state.Property.insurance);
  const saleOption = useSelector((state) => state.Property.saleOption);
  const governrate = useSelector((state) => state.Property.governrate);
  const region = useSelector((state) => state.Property.region);
  const propType = useSelector((state) => state.Property.propType);
  const unitType = useSelector((state) => state.Property.unitType);
  const landType = useSelector((state) => state.Property.landType);
  const price = useSelector((state) => state.Property.price);
  const area = useSelector((state) => state.Property.area);
  const realEstateFinance = useSelector(
    (state) => state.Property.realEstateFinance
  );
  const downPayment = useSelector((state) => state.Property.downPayment);
  const rooms = useSelector((state) => state.Property.rooms);
  const bathRooms = useSelector((state) => state.Property.bathRooms);
  const description = useSelector((state) => state.Property.description);
  const installmentOption = useSelector(
    (state) => state.Property.installmentOption
  );
  const spaceType = useSelector((state) => state.Property.spaceType);
  const address = useSelector((state) => state.Property.address);
  const negotiable = useSelector((state) => state.Property.negotiable);
  const finishingType = useSelector((state) => state.Property.appointments);
  const isFurnished = useSelector((state) => state.Property.isFurnished);
  const isRegisterd = useSelector((state) => state.Property.isRegisterd);
  return (
    <div>
      {/* <p className="text-center">{!canGoNext && "lol"}</p> */}
      {currentStep === 0 ? (
        <div className="flex justify-center">
          <button
            disabled={!true}
            onClick={() => dispatch(setNextStep())}
            className={`bg-lightOrange text-white font-medium py-2 px-4 rounded-xl text-2xl w-[85%] md:w-96 my-5 ${
              !canGoNext && "opacity-60"
            }`}
          >
            Get Started
          </button>
        </div>
      ) : (
        <div className="flex justify-between my-1  gap-5">
          <button
            onClick={() => dispatch(setBackStep())}
            className="bg-lightOrange rounded-xl focus:outline-lightOrangeHover py-2 px-4 text-white font-medium w-[100px] sm:w-[140px] md:w-[160px]"
          >
            Back
          </button>
          {currentStep === 9 ? (
            <button
              onClick={() => {
                const propertInfo = {
                  title: title,
                  offer: offer,
                  multiImage: multiImage,
                  mainImg: mainImg,
                  rentalPeriod: rentalPeriod,
                  insurance: insurance,
                  saleOption: saleOption,
                  governrate: governrate,
                  region: region,
                  propType: propType,
                  unitType: unitType,
                  landType: landType,
                  price: price,
                  area: area,
                  realEstateFinance: realEstateFinance,
                  downPayment: downPayment,
                  rooms: rooms,
                  bathRooms: bathRooms,
                  description: description,
                  installmentOption: installmentOption,
                  spaceType: spaceType,
                  address: address,
                  negotiable: negotiable,
                  finishingType: finishingType,
                  isFurnished: isFurnished,
                  isRegisterd: isRegisterd,
                };
                dispatch(postProperty(propertInfo)).unwrap();
                console.log("click");
              }}
              className="bg-lightGreen rounded-xl py-2 px-4 text-white font-medium w-[100px] sm:w-[140px] md:w-[160px]"
            >
              {isSubmiting ? "....Submiting" : "Submit"}
            </button>
          ) : (
            <button
              disabled={false}
              onClick={() => dispatch(setNextStep())}
              className={`bg-lightOrange rounded-xl py-2  text-white font-medium w-[100px] sm:w-[140px] md:w-[160px] focus:outline-lightOrangeHover ${
                !canGoNext && "opacity-60"
              }`}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FormControlBtns;
