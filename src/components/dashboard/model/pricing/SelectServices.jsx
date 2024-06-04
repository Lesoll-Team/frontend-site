import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const SelectServices = ({
  servicePrice,
  setFeaturesList,
  featuresList,
  setPropNumberInHome,
  setDurationPlanHome,
  setPropNumber,
  setDurationPlan,
  durationPlanHome,
  propNumberInHome,
  durationPlan,
  propNumber,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [featuresId, setFeaturesId] = useState([]);
  const [listVisible, setListVisible] = useState(false);
  const [inputs, setInputs] = useState({});
  const [customCheckboxes, setCustomCheckboxes] = useState([]);
  const [newCheckboxName, setNewCheckboxName] = useState("");
  const [propNumHome, setPropNumHome] = useState("");
  const [timeHome, setTimeHome] = useState("");

  const [propNum, setPropNum] = useState("");
  const [time, setTime] = useState("");
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const featureId = e.target.id;
    setFeaturesId((prv) =>
      prv.includes(featureId)
        ? prv.filter((item) => item !== featureId)
        : [...prv, featureId],
    );

    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(value)
        ? prevSelectedItems.filter((item) => item !== value)
        : [...prevSelectedItems, value],
    );

    if (!inputs[value]) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [value]: { ar: "", en: "" },
      }));
    }
  };

  const handleInputChange = (option, lang, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [option]: {
        ...prevInputs[option],
        [lang]: value,
      },
    }));
  };

  const toggleListVisibility = () => {
    setListVisible(!listVisible);
  };

  useEffect(() => {
    const itemsWithIds = selectedItems.map((item) => {
      const service = servicePrice.find((option) => option.nameAr === item);
      setPropNumberInHome(propNumHome);
      setDurationPlanHome(timeHome);
      setPropNumber(propNum);
      setDurationPlan(time);
      return {
        serviceID: service?._id,
        ar: inputs[item]?.ar || "",
        en: inputs[item]?.en || "",
      };
    });
    setFeaturesList(itemsWithIds);
  }, [selectedItems, propNumHome, timeHome, propNum, time, inputs]);
  const addCustomCheckbox = () => {
    if (newCheckboxName.trim()) {
      setCustomCheckboxes([...customCheckboxes, newCheckboxName.trim()]);
      setNewCheckboxName("");
    }
  };
  const deleteCustomCheckbox = (name) => {
    setCustomCheckboxes(customCheckboxes.filter((item) => item !== name));
    setSelectedItems(selectedItems.filter((item) => item !== name));
    setInputs((prevInputs) => {
      const newInputs = { ...prevInputs };
      delete newInputs[name];
      return newInputs;
    });
  };
  return (
    <div
      dir="rtl"
      className="bg-gray-50 w-full p-1 drop-shadow-sm rounded-md border-1 border-gray-400"
    >
      <button
        className="border-1 border-gray-200 w-full px-4 py-2 rounded-md justify-between flex items-center"
        onClick={toggleListVisibility}
      >
        <span className="whitespace-nowrap">Selected Items</span>
        <span className="line-clamp-1">
          {selectedItems.join(" | ") || <MdArrowDropDown />}
        </span>
      </button>
      {listVisible && (
        <div className="block w-full px-4 py-2 overflow-hidden rounded-md">
          {servicePrice?.map((option) => (
            <div key={option._id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={option._id}
                value={option.nameAr}
                onChange={handleCheckboxChange}
                checked={selectedItems.includes(option.nameAr)}
                className="mr-2"
              />
              <label htmlFor={option._id}>{option.nameAr}</label>
            </div>
          ))}
          {customCheckboxes.map((name, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`custom-${index}`}
                value={name}
                onChange={handleCheckboxChange}
                checked={selectedItems.includes(name)}
                className="mr-2"
              />
              <label htmlFor={`custom-${index}`}>{name}</label>
              <button
                onClick={() => deleteCustomCheckbox(name)}
                className="ml-2 text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
          <div className="flex mt-2">
            <input
              type="text"
              value={newCheckboxName}
              onChange={(e) => setNewCheckboxName(e.target.value)}
              placeholder="Add new item"
              className="border rounded-md p-1 mr-2 flex-grow"
            />
            <button
              onClick={addCustomCheckbox}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </div>
      )}

      {listVisible &&
        selectedItems.map((item) => (
          <div key={item} className="mt-4 w-full">
            <label className="w-full flex flex-col sm:flex-row  gap-x-2">
              <span className="whitespace-nowrap">{item} :-</span>
              <input
                type="text"
                value={inputs[item]?.ar || ""}
                onChange={(e) => handleInputChange(item, "ar", e.target.value)}
                className="border rounded-md p-1  w-full sm:w-4/12 "
                placeholder="Arabic description "
              />
              <input
                type="text"
                value={inputs[item]?.en || ""}
                onChange={(e) => handleInputChange(item, "en", e.target.value)}
                className="border rounded-md p-1 w-full sm:w-4/12"
                placeholder="English description"
              />
            </label>
          </div>
        ))}
      {listVisible && featuresId.includes("656cc095485cfd01499d1362") && (
        <label className="flex flex-col gap-x-2">
          ضمان ظهور إعلانك ضمن أول الإعلانات:-
          <input
            type="number"
            className="mt-1 px-3 py-2 border rounded w-fit "
            onChange={(e) => setPropNum(e.target.value)}
            placeholder="عدد العقارات "
            value={propNumber}
          />
          <input
            type="number"
            className="mt-1 px-3 py-2 border rounded w-fit"
            placeholder="عدد الايام "
            onChange={(e) => setTime(e.target.value)}
            value={durationPlan}
          />
        </label>
      )}

      {listVisible && featuresId.includes("656cc0c1485cfd01499d1365") && (
        <label className="flex flex-col gap-x-2">
          تجديد إعلانك يوميًا على الصفحة البحث:-
          <input
            type="number"
            className=" mt-1 px-3 py-2 border rounded w-fit"
            onChange={(e) => setPropNumHome(e.target.value)}
            placeholder="عدد العقارات "
            value={propNumberInHome}
          />
          <input
            type="number"
            className="  mt-1 px-3 py-2 border rounded w-fit"
            onChange={(e) => setTimeHome(e.target.value)}
            placeholder="عدد الايام "
            value={durationPlanHome}
          />
        </label>
      )}

      {/* <button
        onClick={logSelectedItems}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Set Selected Items
      </button> */}
    </div>
  );
};

export default SelectServices;
// const logSelectedItems = () => {
//   const itemsWithIds = selectedItems.map((item) => {
//     const service = servicePrice.find((option) => option.nameAr === item);
//     setPropNumberInHome(propNumHome);
//     setDurationPlanHome(timeHome);
//     setPropNumber(propNum);
//     setDurationPlan(time);
//     return {
//       serviceID: service?._id,
//       ar: inputs[item]?.ar || "",
//       en: inputs[item]?.en || "",
//     };
//   });
//   setFeaturesList(itemsWithIds);
// };
