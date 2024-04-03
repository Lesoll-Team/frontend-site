import { useCallback, useEffect, useRef, useState } from "react";
import { getGovernorate } from "@/utils/searchAPI";
import { useDispatch, useSelector } from "react-redux";
import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import { useGetCity, useGetRegion } from "@/Hooks/fetchCitiesAndRegions";

export function SearchDropdownLocation({ isToggle, isHome }) {
  let languageIs = useSelector((state) => state.GlobalState.languageIs);
  let { locationGovernorate, locationRegion } = useSelector(
    (state) => state.Category
  );
  const dispatch = useDispatch();
  const [governorates, setGovernorates] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mapLocation, setMapLocation] = useState(new Map());
  const [govFromReg, setGovFromReg] = useState(0);
  const [govNum, setGovNum] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  useEffect(() => {
    if (highlightedIndex !== -1 && dropdownRef.current) {
      const highlightedOption = dropdownRef.current.children[highlightedIndex];
      if (highlightedOption) {
        highlightedOption.scrollIntoView({
          behavior: "instant", //smooth instant auto
          block: "nearest", //start end center nearest
          inline: "center", //start end center nearest
        });
      }
    }
  }, [highlightedIndex]);

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
      console.error(
        "Error in fetching  governorates file: ( SearchDropdownLocation ) "
      );
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
      const term = e.target.value;
      setSearchTerm(term);
    },
    [fetchGovernoratesData]
  );

  useEffect(() => {
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

        dispatch(
          updateAllStates({
            locationGovernorate: null,
            locationRegion: null,
          })
        );
      } else if (index === 1 && selectedValues[index] === value) {
        setGovFromReg(0);
        dispatch(
          updateAllStates({
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
  const city = useGetCity(locationGovernorate);
  const region = useGetRegion(locationRegion);
  return (
    <div
      aria-label={languageIs ? "بحث بالمنطقة..." : "Search by Region..."}
      dir={languageIs ? "rtl" : "ltr"}
      className="relative w-full lg-text focus:outline-none h-full"
    >
      <div className="flex items-center h-full rounded-[1vw] bg-white px-2 gap-x-1 md:gap-x-3 ">
        {selectedValues.length > 0 ? (
          <div
            className="flex items-center gap-x-1 md:gap-x-3 px-1 md:px-3 md:py-1 bg-lightGreen rounded-sm md:rounded-md "
            key={selectedValues[selectedValues.length - 1]}
          >
            <span className=" sm-text whitespace-nowrap text-white ">
              {selectedValues[selectedValues.length - 1]}
            </span>
            <button
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
        {locationGovernorate && selectedValues.length <= 0 ? (
          <div className="flex items-center gap-x-1 md:gap-x-3 px-1 md:px-3 md:py-1 bg-lightGreen rounded-sm md:rounded-md ">
            <span className=" sm-text whitespace-nowrap text-white ">
              {languageIs ? city?.name_ar : city?.name_en}
              {locationRegion &&
                locationRegion !== locationGovernorate &&
                ` - ${languageIs ? region?.name_ar : region?.name_en}`}
            </span>
            <button
              onClick={() => {
                dispatch(
                  updateAllStates({
                    locationGovernorate: null,
                    locationRegion: null,
                  })
                );
              }}
              className="text-gray2  items-center flex sm-text font-semibold"
            >
              &times;
            </button>
          </div>
        ) : null}

        <div className="w-full   h-full" aria-labelledby="input search">
          <input
            type="text"
            placeholder={languageIs ? "بحث بالمنطقة..." : "Search by Region..."}
            value={searchTerm}
            disabled={selectedValues.length >= 2}
            onChange={handleSearch}
            autoComplete="off"
            onKeyDown={handleKeyDown}
            className="w-full lg-text placeholder:lg-text focus:outline-none text-gray-600  flex h-full"
          />
        </div>
      </div>
      {searchTerm !== "" || isToggle ? (
        <div
          className={`absolute z-10 left-0 right-0 max-h-[250px] overflow-y-auto text-black bg-white border rounded-md shadow-md`}
        >
          <div ref={dropdownRef}>
            {filteredOptions.map((governorate, index) => (
              <button
                key={index}
                onClick={() => handleSelectByLanguage(governorate)}
                className={`${index === highlightedIndex ? "bg-gray-200" : "bg-white"}  px-4 py-2  hover:bg-gray-100 w-full sm-text
           `}
              >
                {languageIs ? governorate.name_ar : governorate.name_en}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
