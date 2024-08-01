import { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "./Accordion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";

const CarBrandAccordion = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/cars")
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the brands data!", error);
      });
  }, []);

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <Accordion title={language ? "الماركة" : "Brands"}>
      <div className="max-h-[290px]  overflow-y-auto">
        {brands.map((brand) => (
          <div key={brand.id}>
            <button
              className="flex items-center justify-between cursor-pointer p-3 hover:bg-gray-100"
              onClick={() => handleBrandSelect(brand)}
            >
              <span>
                {brand.make}- ({brand.features.length})
              </span>
              <span className="transform transition-transform">
                {selectedBrand && selectedBrand.id === brand.id ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </button>
            {selectedBrand && selectedBrand.id === brand.id && (
              <div className="pl-5">
                {brand.features.map((model, index) => (
                  <label
                    key={index}
                    className="p-3 cursor-pointer hover:bg-gray-100 flex items-center"
                  >
                    <input type="checkbox" className="mr-2" />
                    <span>{model}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Accordion>
  );
};

export default CarBrandAccordion;
