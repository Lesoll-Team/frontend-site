import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import the default CSS for rc-slider
import Accordion from "./Accordion";
import { useSelector } from "react-redux";

const RangePriceAccordion = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [range, setRange] = useState([0, 0]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleChange = (newRange) => {
    setRange(newRange);
  };

  const handleMinChange = (e) => {
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

  return (
    <Accordion title={language ? "السعر (ج)" : "Price (EGP)"}>
      <div className="flex px-4 py-2 flex-col items-center">
        <Slider
          range
          min={20000}
          max={6000000}
          value={range}
          onChange={handleChange}
          className="w-full max-w-xl"
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
          railStyle={{ backgroundColor: "#ddd", height: 6 }}
        />
        <div className="grid w-full py-3 grid-cols-2 gap-4 justify-between">
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
      </div>
    </Accordion>
  );
};

export default RangePriceAccordion;
