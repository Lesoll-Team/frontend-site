import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import the default CSS for rc-slider
import Accordion from "./Accordion";
import { useSelector } from "react-redux";
import { useState } from "react";

const KMRangeAccordion = () => {
  const maxKM = 500000;
  const minKM = 10;
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [range, setRange] = useState([0, 0]); // Set initial values within the range

  const handleChange = (newRange) => {
    setRange(newRange);
  };

  return (
    <Accordion title={language ? "الكيلومترات" : "Kilometers"}>
      <div className="flex flex-col items-center px-8 py-2">
        <div className="relative w-full max-w-xl">
          <Slider
            range
            min={minKM}
            max={maxKM}
            value={range}
            onChange={handleChange}
            className="w-full"
            trackStyle={[{ backgroundColor: "#666666", height: 6 }]} // Customize the track color and height
            handleStyle={[
              {
                borderColor: "#E9E9E9",
                backgroundColor: "white",
                opacity: 1,
                borderWidth: 2,
                width: 20,
                height: 20,
                marginTop: -7, // Adjust to vertically center the handle
              },
              {
                borderColor: "#E9E9E9",
                backgroundColor: "white",
                opacity: 1,
                borderWidth: 2,
                width: 20,
                height: 20,
                marginTop: -7, // Adjust to vertically center the handle
              },
            ]}
            railStyle={{ backgroundColor: "#ddd", height: 6 }} // Customize rail color and height
          />
          <div className="flex justify-between w-full max-w-xl mt-2 text-sm text-gray-700">
            <div
              style={{
                position: "absolute",
                left: `${(range[0] / maxKM) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              <span>{range[0]}k كم</span>
            </div>
            <div
              style={{
                position: "absolute",
                left: `${(range[1] / maxKM) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              <span>{range[1]}k كم</span>
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default KMRangeAccordion;

/**
 *
 *   const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
 *   const handleMinChange = (e) => {
    const value = Number(e.target.value);
    setMinPrice(value);
    // if (value >= 20000 && value <= range[1]) {
    setRange([value, range[1]]);
    // }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
    // if (value <= 6000000 && value >= range[0]) {
    setRange([range[0], value]);
    // }
  };
 *
 *
 *
 *
 *         <div className="grid w-full py-3 grid-cols-2 gap-4 justify-between">
          <div className="flex   items-center gap-1">
            <span>{language ? "من:" : "From:"} </span>
            <input
              type="text"
              value={minPrice || range[0]}
              onChange={handleMinChange}
              className="w-[100px] border p-0.5"
            />
          </div>
          <div className="flex   items-center gap-1">
            <span>{language ? "الي:" : "To:"}</span>
            <input
              type="text"
              value={maxPrice || range[1]}
              onChange={handleMaxChange}
              className="w-[100px] border p-0.5"
            />
          </div>
        </div>
 */
