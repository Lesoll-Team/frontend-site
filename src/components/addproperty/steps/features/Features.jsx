import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import axios from "axios";
import FormControlBtns from "../../FormControlBtns";
// import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setService } from "@/redux-store/features/propertySlice";
const Features = () => {
  const [selected, setSelected] = useState([]);
  const [features, setFeatures] = useState([]);
  // const [showFeature, setShowFeature] = useState(false);
  const service = useSelector((state) => state.Property.service);
  const dispatch = useDispatch();
  const getFeatures = () => {
    axios
      .get(
        "http://ec2-184-73-152-95.compute-1.amazonaws.com:9000/api/admin/service/getall"
      )
      .then((res) => {
        setFeatures(res.data.service);
      });
  };
  console.log(selected);
  console.log(service);
  useEffect(() => {
    getFeatures();
    console.log(features);
  }, []);
  // const handleFeatureSelect = () => {
  //   setShowFeature(!showFeature);
  // };
  return (
    <div className="w-full min-h-[450px] mx-auto px-6 md:px-8 my-5 space-y- flex flex-col justify-between">
      <div>
        <h3 className="text-2xl text-darkGreen font-bold ">Features</h3>
        <div className="py-5">
          {/* {features.map((feature) => {
            return (
              <div key={feature._id} className="flex items-center gap-2">
                <div
                  onClick={handleFeatureSelect}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 border-2 border-darkGreen rounded-full  relative">
                    {showFeature && (
                      <GiCheckMark className="text-lightOrange font-bold  text-3xl  absolute -left-1 rotate-6 -top-[12px]" />
                    )}
                  </div>
                  <p className="text-lg">{feature.name.en}</p>
                </div>
              </div>
            );
          })} */}
          <CheckboxGroup
            defaultValue={service}
            color="default"
            value={service}
            onValueChange={(e) => dispatch(setService(e))}
            className="flex"
          >
            <div className="grid grid-cols-1 mdgrid-cols-2 md:grid-cols-3 justify-items-between items-center gap-10">
              {features.map((feature) => {
                return (
                  <Checkbox key={feature._id} value={feature._id}>
                    <p className="text-darkGreen font-semibold">
                      {feature.name.ar}
                    </p>
                  </Checkbox>
                );
              })}
            </div>
          </CheckboxGroup>
        </div>
      </div>
      <div className="-mb-6 ">
        <FormControlBtns canGoNext={true} />
      </div>
    </div>
  );
};

export default Features;
