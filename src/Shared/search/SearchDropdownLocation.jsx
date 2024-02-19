import { useCallback, useEffect, useRef, useState } from "react";
import { getGovernorate } from "@/utils/searchAPI";
import { useSelector } from "react-redux";

export function SearchDropdownLocation({
  setLocationGovernorate,
  setLocationRegion,
}) {
  const [governorates, setGovernorates] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mapLocation, setMapLocation] = useState(new Map());
  const [govFromReg, setGovFromReg] = useState(0);
  const [govNum, setGovNum] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // To keep track of the currently highlighted option
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (highlightedIndex !== -1 && dropdownRef.current) {
      const highlightedOption = dropdownRef.current.children[highlightedIndex];
      if (highlightedOption) {
        highlightedOption.scrollIntoView({
          behavior: "instant", //smooth instant auto
          block: "nearest", //start end center nearest
          //   inline: "nearest", //start end center nearest
        });
      }
    }
  }, [highlightedIndex]);
  let languageIs = useSelector((state) => state.GlobalState.languageIs);
  const fetchGovernoratesData = useCallback(async () => {
    try {
      const fetchedGovernorates = await getGovernorate();
      const mapLocation = new Map();
      fetchedGovernorates.result.forEach((item) => {
        mapLocation.set(item.numberGov, {
          name_ar: item.name_ar,
          name_en: item.name_en,
          value_ar: item.value_ar,
          value_en: item.value_en,
          // _id: index,
        });
      });
      console.log(fetchedGovernorates);
      console.log(mapLocation);
      setGovernorates(fetchedGovernorates.result);
      setMapLocation(mapLocation);
    } catch (error) {
      console.error("Error fetching governorates:", error);
    }
  }, []);

  useEffect(() => {
    fetchGovernoratesData();
  }, []);

  useEffect(() => {
    setFilteredOptions(governorates);
  }, [governorates]);

  const handleSearch = useCallback(
    (e) => {
      fetchGovernoratesData();
      const term = e.target.value;
      setSearchTerm(term);
    },
    [fetchGovernoratesData]
  );

  useEffect(() => {
    // if(selectedValues.length<=2)
    const filtered = governorates.filter(
      (governorate) =>
        governorate.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        governorate.name_ar.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredOptions(
      govNum > 0
        ? filtered.filter((gov) => gov.numberReg_governorate_number === govNum)
        : filtered
    );
  }, [searchTerm, govNum, governorates]);

  const handleSelectByLanguage = (governorate) => {
    const selectedOption = languageIs
      ? governorate.name_ar
      : governorate.name_en;
    const selectedValue = languageIs
      ? governorate.value_ar
      : governorate.value_en;

    handleSelect({
      selectedOption,
      selectedValue,
      selectedEnValue: governorate.value_en,
      numberGovFromReg:
        govFromReg === 0
          ? governorate.numberReg_governorate_number || 0
          : govFromReg,
      numberGov: govNum === 0 ? governorate.numberGov || 0 : govNum,
    });
  };
  const handleSelect = ({
    selectedOption,
    selectedEnValue,
    numberGovFromReg,
    numberGov,
    selectedValue,
  }) => {
    setSearchTerm("");
    setSelectedValues((prevValues) => {
      if (numberGovFromReg == 0) {
        return [...prevValues, selectedOption];
      } else {
        setGovNum(numberGovFromReg);
        return [
          languageIs
            ? mapLocation.get(numberGovFromReg).name_ar
            : mapLocation.get(numberGovFromReg).name_en,
          selectedOption,
        ];
      }
    });
    setFilteredOptions(governorates);
    setGovFromReg(numberGovFromReg);
    setGovNum(numberGov);

    setLocationGovernorate(
      mapLocation.get(numberGovFromReg)?.name_en || selectedEnValue
    );
    setLocationRegion(
      mapLocation.get(numberGovFromReg)?.name_en && selectedEnValue
    );
  };

  const handleClearCared = useCallback(
    (index, value) => {
      const updatedValues = [...selectedValues];
      if (index === 0 && selectedValues[index] === value) {
        updatedValues.splice(0, 2);
        setSelectedValues(updatedValues);
        setGovFromReg(0);
        setGovNum(0);
        setLocationGovernorate("");
        setLocationRegion("");
      } else if (index === 1 && selectedValues[index] === value) {
        setGovFromReg(0);
        setLocationRegion("");
      }
      updatedValues.splice(index, 1);
      setSelectedValues(updatedValues);
    },
    [selectedValues]
  );
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter" && highlightedIndex !== -1) {
      e.preventDefault();
      const selectedOption = filteredOptions[highlightedIndex];
      handleSelect({
        selectedOption: languageIs
          ? selectedOption.name_ar
          : selectedOption.name_en,
        selectedValue: selectedOption.value_en,
        selectedEnValue: selectedOption.value_en,
        numberGovFromReg:
          govFromReg == 0
            ? selectedOption.numberReg_governorate_number || 0
            : govFromReg,
        numberGov: govNum == 0 ? selectedOption.numberGov || 0 : govNum,
      });
      setHighlightedIndex(-1);
    }
  };

  return (
    <div
      dir={languageIs ? "rtl" : "ltr"}
      className="relative w-full focus:outline-none "
    >
      <div className="flex items-center gap-x-1 md:gap-x-3 ">
        {selectedValues.length > 0 && (
          <div
            className="flex items-center
     gap-x-1 md:gap-x-3
    px-1 md:px-3 md:py-1 
   bg-lightGreen rounded-sm md:rounded-md "
            key={selectedValues[selectedValues.length - 1]}
          >
            <span
              className=" 
    text-[10px]  md-text-[13px] lg:text-[16px]
    whitespace-nowrap text-white "
            >
              {selectedValues[selectedValues.length - 1]}
            </span>
            <button
              onClick={() =>
                handleClearCared(
                  selectedValues.length - 1,
                  selectedValues[selectedValues.length - 1]
                )
              }
              className="text-gray2  items-center flex text-lg md:text-xl lg:text-2xl font-semibold"
            >
              &times;
            </button>
          </div>
        )}

        <div className="w-full ">
          <input
            type="text"
            placeholder={languageIs ? "بحث بالمنطقة..." : "Search by region..."}
            value={searchTerm}
            disabled={selectedValues.length >= 3}
            onChange={handleSearch}
            autoComplete="off"
            onKeyDown={handleKeyDown} // Listen for arrow key presses
            className="w-full font-inter text-[13px] md:text-[18px]  text-black h-[30px] md:h-[40px] xl:h-[50px] 2xl:h-[60px]  
            active:outline-none hover:outline-none focus:outline-none indent-3"
          />
        </div>
      </div>
      {searchTerm !== "" && (
        <div
          className={`absolute z-10 left-0 right-0 max-h-[250px] overflow-y-auto text-black bg-white border rounded-md shadow-md`}
        >
          <div ref={dropdownRef}>
            {filteredOptions.map((governorate, index) => (
              <div
                key={index}
                // role="listbox"
                onClick={() => handleSelectByLanguage(governorate)}
                className={`${
                  index === highlightedIndex ? "bg-gray-200" : "bg-white"
                }  px-4 py-2 cursor-pointer hover:bg-gray-100 
           text-[12px] md:text-[14px] gl-text-[17px] xl:text-[20px] w-full 2xl:text-[24px]`}
              >
                {languageIs ? governorate.name_ar : governorate.name_en}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// onClick={languageIs? () =>handleSelect({
//           selectedOption: governorate.name_ar,
//           selectedValue: governorate.value_ar,
//           selectedEnValue: governorate.value_en,
//           numberGovFromReg:
//             govFromReg == 0
//               ? governorate.numberReg_governorate_number || 0
//               : govFromReg,
//           numberGov:
//             govNum == 0 ? governorate.numberGov || 0 : govNum,
//         })
//     : () =>
//         handleSelect({
//           selectedOption: governorate.name_en,
//           selectedValue: governorate.value_en,
//           selectedEnValue: governorate.value_en,
//           numberGovFromReg:
//             govFromReg == 0
//               ? governorate.numberReg_governorate_number || 0
//               : govFromReg,
//           numberGov:
//             govNum == 0 ? governorate.numberGov || 0 : govNum,
//         })
// }

/* {selectedValues.map((value, index) => (
          <div
            className="flex items-center
             gap-x-1 md:gap-x-3
            px-1 md:px-3 md:py-1 
           bg-lightGreen rounded-sm md:rounded-md "
            key={value}
            // key={selectedValues[1] || selectedValues[0]}
            //selectedValues.slice(-1)
          >
            <span
              className=" 
            text-[10px]  md-text-[13px] lg:text-[16px]
            whitespace-nowrap text-white "
            >
              {value}
            </span>
            <button
              onClick={() => handleClearCared(index, value)}
              className="text-gray2  items-center flex text-lg md:text-xl lg:text-2xl font-semibold"
            >
              &times;
            </button>
          </div>
        ))} */
