import { useCallback, useEffect, useRef, useState } from "react";
import { getGovernorate } from "@/utils/searchAPI";
import { useDispatch, useSelector } from "react-redux";
import { updateAllStates } from "@/redux-store/features/category/categorySlice";

export function SearchDropdownLocation({
  setLocationGovernorate,
  setLocationRegion,
  defaultGovernorate,
  defaultRegion,
}) {
  const dispatch = useDispatch();
  const [governorates, setGovernorates] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mapLocation, setMapLocation] = useState(new Map());
  const [govFromReg, setGovFromReg] = useState(0);
  const [govNum, setGovNum] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // To keep track of the currently highlighted option
  const dropdownRef = useRef(null);
  const [clearDefault, setClearDefault] = useState(true);
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
        });
      });

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
      // fetchGovernoratesData();
      const term = e.target.value;
      setSearchTerm(term);
      setClearDefault(false);
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

    dispatch(
      updateAllStates({
        locationGovernorate:
          mapLocation.get(numberGovFromReg)?.name_en || selectedEnValue,
        locationRegion:
          mapLocation.get(numberGovFromReg)?.name_en && selectedEnValue,
      })
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
        dispatch(
          updateAllStates({
            locationGovernorate: null,
            locationRegion: null,
          })
        );
      } else if (index === 1 && selectedValues[index] === value) {
        setGovFromReg(0);
        setLocationRegion("");
        dispatch(
          updateAllStates({
            // locationGovernorate: null,
            locationRegion: null,
          })
        );
      }
      updatedValues.splice(index, 1);
      setSelectedValues(updatedValues);
    },
    [selectedValues]
  );

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prevIndex) =>
          prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
        break;

      case "Enter":
        e.preventDefault();
        if (highlightedIndex !== -1) {
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
        break;
    }
  };

  return (
    <div
      dir={languageIs ? "rtl" : "ltr"}
      className="relative w-full focus:outline-none h-full
      "
      aria-labelledby="result search"
    >
      <div
        aria-label="Search Results"
        className="flex items-center h-full rounded-[1vw] bg-white px-2 gap-x-1 md:gap-x-3 "
      >
        {selectedValues.length > 0 ? (
          <div
            className="flex items-center
     gap-x-1 md:gap-x-3
    px-1 md:px-3 md:py-1 
   bg-lightGreen rounded-sm md:rounded-md "
            key={selectedValues[selectedValues.length - 1]}
            aria-labelledby="input selectedValues search"
          >
            <span
              className=" 
    sm-text
    whitespace-nowrap text-white "
            >
              {selectedValues[selectedValues.length - 1]}
            </span>
            <button
              aria-label="delete selected"
              onClick={() =>
                handleClearCared(
                  selectedValues.length - 1,
                  selectedValues[selectedValues.length - 1]
                )
              }
              className="text-gray2  items-center flex sm-text font-semibold"
            >
              &times;
            </button>
          </div>
        ) : null}

        {defaultGovernorate && clearDefault ? (
          <div
            className="flex items-center
     gap-x-1 md:gap-x-3
    px-1 md:px-3 md:py-1 
   bg-lightGreen rounded-sm md:rounded-md "
            aria-labelledby="out search"
          >
            <span
              className=" 
    sm-text
    whitespace-nowrap text-white "
            >
              {defaultGovernorate}
              {defaultRegion &&
                defaultRegion !== defaultGovernorate &&
                `-${defaultRegion}`}
            </span>
            <button
              onClick={() => setClearDefault(false)}
              className="text-gray2  items-center flex sm-text font-semibold"
            >
              &times;
            </button>
          </div>
        ) : null}
        <div className="w-full   h-full" aria-labelledby="input search">
          <input
            type="text"
            placeholder={languageIs ? "بحث بالمنطقة..." : "Search by region..."}
            value={searchTerm}
            disabled={selectedValues.length >= 2}
            onChange={handleSearch}
            autoComplete="off"
            onKeyDown={handleKeyDown} // Listen for arrow key presses
            className="w-full sm-text placeholder:sm-text focus:outline-none text-gray-600  flex h-full"
            aria-label="Search by region" // Add aria-label attribute
          />
        </div>
      </div>
      {searchTerm !== "" && (
        <div
          aria-labelledby=" search"
          className={`absolute z-10 left-0 right-0 max-h-[250px] overflow-y-auto text-black bg-white border rounded-md shadow-md`}
        >
          <div aria-labelledby="result" ref={dropdownRef}>
            {filteredOptions.map((governorate, index) => (
              <button
                key={index}
                onClick={() => handleSelectByLanguage(governorate)}
                className={`${
                  index === highlightedIndex ? "bg-gray-200" : "bg-white"
                }  px-4 py-2  hover:bg-gray-100 
           w-full 
           sm-text
           `}
              >
                {languageIs ? governorate.name_ar : governorate.name_en}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
