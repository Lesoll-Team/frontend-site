import { useEffect, useState } from "react";
import { getGovernorate } from "@/utils/searchAPI";
import { useSelector } from "react-redux";

export function SearchDropdown({
  setLocationName,
  onSubmitSearch,
  setLocationValue,

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

  let languageIs = useSelector((state) => state.GlobalState.languageIs);
  const fetchGovernoratesData = async () => {
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
  };
  useEffect(() => {
    fetchGovernoratesData();
  }, []);

  useEffect(() => {
    setFilteredOptions(governorates);
  }, [governorates]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };
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

  const handleSelect = ({
    selectedOption,
    selectedEnValue,
    numberGovFromReg,
    selectedValue,
    numberGov,
  }) => {
    setSearchTerm("");
    setSelectedValues((prevValues) => {
      if (numberGovFromReg == 0) {
        // setTyping(false);

        return [...prevValues, selectedOption];
      } else {
        setGovNum(numberGovFromReg);
        // setTyping(false);

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
    setLocationName(
      languageIs
        ? mapLocation.get(numberGovFromReg)?.name_ar
        : mapLocation.get(numberGovFromReg)?.name_en
    );
    setLocationValue(selectedValue);

    setLocationGovernorate(
      mapLocation.get(numberGovFromReg)?.name_en || selectedEnValue
    );
    setLocationRegion(
      mapLocation.get(numberGovFromReg)?.name_en && selectedEnValue
    );
  };

  const handleClearCared = (index, value) => {
    const updatedValues = [...selectedValues];
    if (index == 0 && selectedValues[index] == value) {
      updatedValues.splice(0, 2);
      setSelectedValues(updatedValues);
      setGovFromReg(0);
      setGovNum(0);
    } else if (index == 1 && selectedValues[index] == value) {
      setGovFromReg(0);
    }
    updatedValues.splice(index, 1);
    setSelectedValues(updatedValues);
    // setTyping(false);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmitSearch();
    }
  };
  return (
    <div
      dir={languageIs ? "rtl" : "ltr"}
      className="relative w-full focus:outline-none "
    >
      <div className="flex items-center gap-x-1 md:gap-x-3 ">
        {selectedValues.map((value, index) => (
          <div
            className="flex items-center
             gap-x-1 md:gap-x-3
            px-1 md:px-3 md:py-1 
           bg-lightGreen rounded-sm md:rounded-md "
            key={value}
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
        ))}
        <div className="w-full ">
          <input
            type="text"
            placeholder={
              languageIs
                ? " البحث بالمنطقة: مدينة نصر،التجمع الخامس...  "
                : "Search by City  Nasr City, Cairo, Maadi..."
            }
            value={searchTerm}
            disabled={selectedValues.length >= 3}
            onChange={handleSearch}
            autoComplete="off"
            className="w-full font-inter text-[13px] md:text-[16px] gl-text-[20px] xl:text-[25px] 2xl:text-[31px] text-black h-[30px] md:h-[40px] xl:h-[50px] 2xl:h-[60px]  active:outline-none hover:outline-none focus:outline-none"
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
      {searchTerm !== "" && (
        <div
          className={`absolute z-10 left-0 right-0 max-h-[250px] overflow-y-auto text-black bg-white border rounded-md shadow-md`}
        >
          {filteredOptions.map((governorate, index) => (
            <div
              key={index}
              onClick={
                languageIs
                  ? () =>
                      handleSelect({
                        selectedOption: governorate.name_ar,
                        selectedValue: governorate.value_ar,
                        selectedEnValue: governorate.value_en,
                        numberGovFromReg:
                          govFromReg == 0
                            ? governorate.numberReg_governorate_number || 0
                            : govFromReg,
                        numberGov:
                          govNum == 0 ? governorate.numberGov || 0 : govNum,
                      })
                  : () =>
                      handleSelect({
                        selectedOption: governorate.name_en,
                        selectedValue: governorate.value_en,
                        selectedEnValue: governorate.value_en,
                        numberGovFromReg:
                          govFromReg == 0
                            ? governorate.numberReg_governorate_number || 0
                            : govFromReg,
                        numberGov:
                          govNum == 0 ? governorate.numberGov || 0 : govNum,
                      })
              }
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 
               text-[12px] md:text-[14px] gl-text-[17px] xl:text-[20px] 2xl:text-[24px]"
            >
              {languageIs ? governorate.name_ar : governorate.name_en}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
