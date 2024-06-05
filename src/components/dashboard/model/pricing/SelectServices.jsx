import generateUniqueId from "@/Shared/generateUniqueId";
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

  const [propNumHome, setPropNumHome] = useState(0);
  const [timeHome, setTimeHome] = useState(0);

  const [propNum, setPropNum] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (featuresList && featuresList.length > 0) {
      const initialSelectedItems = featuresList.map((item) => item.ar);
      const initialInputs = featuresList.reduce((acc, item) => {
        acc[item.ar] = { ar: item.ar, en: item.en, serviceID: item.serviceID };
        return acc;
      }, {});
      const newsIdes = featuresList.map((item) => item.serviceID);
      setSelectedItems(initialSelectedItems);
      setInputs(initialInputs);
      setFeaturesId(newsIdes);

      const serviceNewArray = new Map(
        servicePrice?.map((item) => [item._id, item.nameAr]),
      );
      // console.log("serviceNewArray :>>", serviceNewArray);
      const customCheckboxesList = newsIdes.filter(
        (item) => !serviceNewArray.has(item),
      );
      const updatedCheckboxes = [];

      customCheckboxesList.forEach((key) => {
        // Assuming item.serviceID corresponds to _id in servicePrice
        const value = featuresList.filter(
          (item) => item.serviceID === key && item.ar,
        );
        updatedCheckboxes.push(...value);
      });
      // console.log(updatedCheckboxes);

      setCustomCheckboxes(
        ...updatedCheckboxes.map((item) => [
          { name: item.ar, ids: item.serviceID },
        ]),
      );
    }
  }, [listVisible]);
  console.log("customCheckboxes::>>", customCheckboxes);

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
      const service = servicePrice?.find((option) => option.nameAr === item);
      const newID = generateUniqueId(inputs[item].ar.trim());
      return {
        serviceID: service?._id || newID,
        ar: inputs[item]?.ar.trim() || "",
        en: inputs[item]?.en.trim() || "",
      };
    });
    setFeaturesList(itemsWithIds);
  }, [selectedItems, inputs]);
  useEffect(() => {
    setPropNumberInHome(propNumHome);
    setDurationPlanHome(timeHome);
    setPropNumber(propNum);
    setDurationPlan(time);
  }, [propNumHome, timeHome, propNum, time]);
  const addCustomCheckbox = () => {
    if (newCheckboxName.trim()) {
      setCustomCheckboxes([
        ...customCheckboxes,
        {
          name: newCheckboxName.trim(),
          ids: generateUniqueId(newCheckboxName.trim()),
        },
      ]);
      setNewCheckboxName("");
    }
  };

  const deleteCustomCheckbox = (ides, nams) => {
    setCustomCheckboxes(customCheckboxes.filter((item) => item.ids !== ides));
    setSelectedItems(selectedItems.filter((item) => item !== nams));
    setFeaturesId(featuresId.filter((item) => item !== ides));
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
                checked={featuresId.includes(option._id)}
                className="mr-2"
              />
              <label htmlFor={option._id}>{option.nameAr}</label>
            </div>
          ))}
          {customCheckboxes.map((items, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={items.ids}
                value={items.name}
                onChange={handleCheckboxChange}
                checked={selectedItems.includes(items.name)}
                className="mr-2"
              />
              <label htmlFor={items.ids}>{items.name}</label>
              <button
                onClick={() => deleteCustomCheckbox(items.ids, items.name)}
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
    </div>
  );
};
export default SelectServices;
// useEffect(() => {
//   if (featuresList && featuresList.length > 0) {
//     const initialSelectedItems = featuresList.map((item) => item.ar);
//     const initialInputs = featuresList.reduce((acc, item) => {
//       acc[item.ar] = { ar: item.ar, en: item.en };
//       return acc;
//     }, {});
//     const newFeaturesId = featuresList.map((item) => item.serviceID);

//     // Check if states need to be updated
//     const isSelectedItemsChanged =
//       JSON.stringify(initialSelectedItems) !== JSON.stringify(selectedItems);
//     const isInputsChanged =
//       JSON.stringify(initialInputs) !== JSON.stringify(inputs);
//     const isFeaturesIdChanged =
//       JSON.stringify(newFeaturesId) !== JSON.stringify(featuresId);

//     if (isSelectedItemsChanged) {
//       setSelectedItems(initialSelectedItems);
//     }
//     if (isInputsChanged) {
//       setInputs(initialInputs);
//     }
//     if (isFeaturesIdChanged) {
//       setFeaturesId(newFeaturesId);
//     }
//   }
// }, [featuresList]);
// useEffect(() => {
//   if (featuresList && featuresList.length > 0) {
//     const initialSelectedItems = featuresList.map((item) => item.ar);
//     const initialInputs = featuresList.reduce((acc, item) => {
//       acc[item.ar] = { ar: item.ar, en: item.en };
//       return acc;
//     }, {});
//     setSelectedItems(initialSelectedItems);
//     setInputs(initialInputs);
//     setFeaturesId(featuresList.map((item) => item.serviceID));

//     //     // const servicePriceNames = new Set(servicePrice?.map((item) => item.nameAr));
//     //     // const customCheckboxesList = initialSelectedItems.filter(
//     //     //   (item) => !servicePriceNames.has(item),
//     //     // );
//     //     // setCustomCheckboxes(customCheckboxesList);
//   }
// }, [listVisible]);
