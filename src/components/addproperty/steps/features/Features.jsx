import React, { useEffect, useState } from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

import axios from "axios";
import { useSelector } from "react-redux";

const Features = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [selected, setSelected] = useState([]);

  const [features, setFeatures] = useState([]);
  const getFeatures = () => {
    axios
      .get(
        "http://ec2-184-73-152-95.compute-1.amazonaws.com:9000/api/admin/service/getall"
      )
      .then((res) => {
        setFeatures(res.data.service);
      });
  };
  useEffect(() => {
    getFeatures();
    // console.log(features);
  }, []);
  //   console.log(features);

  //   console.log(propertyDetils);
  return (
    <div className="space-y-7">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "Features" : "مميزات"}
      </h3>
      <CheckboxGroup
        defaultValue={propertyDetils.service}
        color="default"
        value={propertyDetils.service}
        onValueChange={(e) => setData({ ...propertyDetils, service: e })} // Change "features" to "service"
        className="flex"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-between items-center gap-10">
          {features.map((feature) => {
            return (
              <Checkbox
                size="md"
                radius="full"
                className="rounded-full"
                key={feature._id}
                value={feature._id}
              >
                <p className="text-darkGray font-semibold">
                  {language ? feature.name.en : feature.name.ar}
                </p>
              </Checkbox>
            );
          })}
        </div>
      </CheckboxGroup>
    </div>
  );
};

export default Features;
