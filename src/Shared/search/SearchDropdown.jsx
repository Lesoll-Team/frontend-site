import { useEffect, useState } from "react";
import { getGovernorate } from "@/utils/searchAPI";
import { useSelector } from "react-redux";

export function SearchDropdown({
  setLocationName,
  setTyping,
  setLocationValue,
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
    setTyping(true);
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
    numberGovFromReg,
    selectedValue,
    numberGov,
  }) => {
    setSearchTerm("");
    setSelectedValues((prevValues) => {
      if (numberGovFromReg == 0) {
        setTyping(false);

        return [...prevValues, selectedOption];
      } else {
        setGovNum(numberGovFromReg);
        setTyping(false);

        return [mapLocation.get(numberGovFromReg).name_ar, selectedOption];
      }
    });
    setFilteredOptions(governorates);
    setGovFromReg(numberGovFromReg);
    setGovNum(numberGov);
    setLocationName(mapLocation.get(numberGovFromReg)?.name_ar);
    setLocationValue(selectedValue);
    setTyping(false);
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
    setTyping(false);
  };

  return (
    <div
      dir={languageIs ? "rtl" : "ltr"}
      className="relative w-full py-2 px-4  border shadow-md rounded-md mt-2 focus:outline-none focus:ring focus:border-blue-300"
    >
      <div className="flex items-center">
        {selectedValues.map((value, index) => (
          <div
            className="flex items-center mx-1 p-1 bg-lightGreen rounded-md"
            key={index}
          >
            <span className="mx-2 whitespace-nowrap text-white">{value}</span>
            <button
              onClick={() => handleClearCared(index, value)}
              className="text-lightOrangeHover items-center flex text-2xl font-semibold px-1"
            >
              &times;
            </button>
          </div>
        ))}
        <div className="w-full  p-1">
          <input
            type="text"
            placeholder={
              languageIs
                ? " البحث بالمنطقة: مدينة نصر، المعادي، المهندسين...  "
                : "Search by City  Nasr City, Cairo, Maadi..."
            }
            value={searchTerm}
            disabled={selectedValues.length >= 2 ? true : false}
            onChange={handleSearch}
            className="w-full  active:outline-none hover:outline-none focus:outline-none"
          />
        </div>
      </div>
      {searchTerm !== "" && (
        <div
          className={`absolute z-10 left-0 right-0 max-h-[250px] overflow-y-auto mt-2 bg-white border rounded-md shadow-md`}
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
                        numberGovFromReg:
                          govFromReg == 0
                            ? governorate.numberReg_governorate_number || 0
                            : govFromReg,
                        numberGov:
                          govNum == 0 ? governorate.numberGov || 0 : govNum,
                      })
              }
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {languageIs ? governorate.name_ar : governorate.name_en}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
