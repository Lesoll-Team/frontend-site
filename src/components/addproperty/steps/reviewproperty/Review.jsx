import RealtyCard from "@/components/realtyCard/RealtyCard";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
const Review = ({ setStep }) => {
  const price = useSelector((state) => state.Property.price);
  const title = useSelector((state) => state.Property.title);
  const offer = useSelector((state) => state.Property.offer);
  const rooms = useSelector((state) => state.Property.rooms);
  const bathRooms = useSelector((state) => state.Property.bathRooms);
  const area = useSelector((state) => state.Property.area);
  const description = useSelector((state) => state.Property.description);
  const steps = [
    "get started",
    "property info",
    "description",
    "price",
    "photos",
    "features",
    "seller info",
    "location",
    "appointments",
    "review",
  ];
  return (
    <div className="w-full mx-auto px-8 md:px-8 my-8">
      <h3 className="text-lg md:text-2xl text-darkGreen font-bold mb-1">
        Review
      </h3>
      {/* <p className="text-sm sm:text-lg font-medium text-lightGreen">
        Modify the information
      </p> */}
      <div className="flex gap-4 my-2 flex-col-reverse md:flex-row justify-between items-center">
        <div className="w-full md:w-[80%] space-y-2 ">
          {steps.map((step, i) => {
            return (
              <div
                key={i}
                className="w-full font-bold bg-white rounded-xl drop-shadow-lg flex justify-between p-1 px-3 text-darkGreen "
              >
                <p>{step.charAt(0).toUpperCase() + step.slice(1)}</p>
                <FiEdit
                  onClick={() => {
                    setStep(i);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="cursor-pointer font-black text-xl"
                />
              </div>
            );
          })}
        </div>

        <RealtyCard
          price={price}
          title={title}
          rooms={rooms}
          offer={offer}
          bathRooms={bathRooms}
          area={area}
          description={description}
          className="col-span-1 "
        />
      </div>
    </div>
  );
};

export default Review;
