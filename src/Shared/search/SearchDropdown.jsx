import { useEffect, useState } from "react";
import { getGovernorate } from "@/utils/searchAPI";
import { useSelector } from "react-redux";

export function SearchDropdown() {
  const [governorates, setGovernorates] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [governorateId, setGovernorateId] = useState("");

  let languageIs = useSelector((state) => state.GlobalState.languageIs);
  const fetchGovernoratesData = async () => {
    try {
      const fetchedGovernorates = await getGovernorate();
      setGovernorates(fetchedGovernorates.governorate);
      setFilteredOptions(fetchedGovernorates.governorate);
    } catch (error) {
      console.error("Error fetching governorates:", error);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = governorates.filter(
      (governorate) =>
        governorate.governorate_name_en
          .toLowerCase()
          .includes(term.toLowerCase()) ||
        governorate.governorate_name_ar
          .toLowerCase()
          .includes(term.toLowerCase())
    );

    setFilteredOptions(filtered);
  };

  const handleSelect = ({ selectedOption, number }) => {
    setSearchTerm("");
    setSelectedValues((prevValues) => [...prevValues, selectedOption]);
    setFilteredOptions(governorates);
    setGovernorateId(number);
  };

  const handleClearCared = (index) => {
    const updatedValues = [...selectedValues];
    updatedValues.splice(index, 1);
    setSelectedValues(updatedValues);
  };

  useEffect(() => {
    fetchGovernoratesData();
  }, []);
  return (
            
    <div dir={languageIs ? "rtl" : "ltr"} className="relative w-full py-2 px-4  border shadow-md rounded-md mt-2 focus:outline-none focus:ring focus:border-blue-300">
      <div className="flex items-center">
        {selectedValues.map((value, index) => (
          <div
            className="flex items-center mx-1 p-1 bg-lightGreen rounded-md"
            key={index}
          >
            <span className="mx-2 whitespace-nowrap text-white">{value}</span>
            <button
              onClick={() => handleClearCared(index)}
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
        <ul
          className={`absolute z-10 left-0 right-0 max-h-[250px] overflow-y-auto mt-2 bg-white border rounded-md shadow-md`}
        >
          {filteredOptions.map((governorate) => (
            <li
              key={governorate._id}
              onClick={
                languageIs
                  ? () =>
                      handleSelect({
                        selectedOption: governorate.governorate_name_ar,
                        number: governorate.number,
                      })
                  : () =>
                      handleSelect({
                        selectedOption: governorate.governorate_name_en,
                        number: governorate.number,
                      })
              }
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {languageIs
                ? governorate.governorate_name_ar
                : governorate.governorate_name_en}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
