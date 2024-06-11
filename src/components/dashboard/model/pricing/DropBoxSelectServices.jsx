import React, { useState, useEffect } from "react";

const DropBoxSelectServices = ({
  servicePrice,
  featuresList,
  setFeaturesList,
  isCreate,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [localServicePrice, setLocalServicePrice] = useState([]);
  const [newOptionAr, setNewOptionAr] = useState("");
  const [newOptionEn, setNewOptionEn] = useState("");
  const [editOptionId, setEditOptionId] = useState(null);
  const [editOptionAr, setEditOptionAr] = useState("");
  const [editOptionEn, setEditOptionEn] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    if (featuresList && featuresList.length > 0 && isInitialLoad) {
      setSelectedOptions(featuresList);
      setIsInitialLoad(false);
    }
  }, [featuresList, isInitialLoad]);

  const handleCheckboxChange = (service) => {
    const serviceTransformed = {
      ar: service.nameAr.trim(),
      en: service.nameEn.trim(),
      serviceID: service._id,
    };

    setSelectedOptions((prevSelected) =>
      prevSelected.some((option) => option.serviceID === service._id)
        ? prevSelected.filter((option) => option.serviceID !== service._id)
        : [...prevSelected, serviceTransformed],
    );
  };

  const handleAddOption = () => {
    if (newOptionAr.trim() === "" || newOptionEn.trim() === "") {
      setError("الخيار الجديد لا يمكن أن يكون فارغًا.");
      return;
    }

    if (
      localServicePrice.some(
        (service) =>
          service.nameAr === newOptionAr || service.nameEn === newOptionEn,
      )
    ) {
      setError("الخيار الجديد موجود بالفعل.");
      return;
    }

    const newOptionObject = {
      nameAr: newOptionAr,
      nameEn: newOptionEn,
      _id: new Date().getTime().toString(), // لتوليد ID جديد فريد
    };

    const newOptionTransformed = {
      ar: newOptionAr,
      en: newOptionEn,
      serviceID: newOptionObject._id,
    };

    setLocalServicePrice((prevServicePrice) => [
      ...prevServicePrice,
      newOptionObject,
    ]);
    setSelectedOptions((prevSelected) => [
      ...prevSelected,
      newOptionTransformed,
    ]);
    setNewOptionAr("");
    setNewOptionEn("");
    setError(""); // إزالة الرسالة بعد الإضافة الناجحة
  };

  const handleEditOption = (option) => {
    setEditOptionId(option.serviceID);
    setEditOptionAr(option.ar);
    setEditOptionEn(option.en);
  };

  const handleSaveEditOption = () => {
    if (editOptionAr.trim() === "" || editOptionEn.trim() === "") {
      setError("الخيار لا يمكن أن يكون فارغًا.");
      return;
    }

    setSelectedOptions((prevSelected) =>
      prevSelected.map((option) =>
        option.serviceID === editOptionId
          ? { ...option, ar: editOptionAr, en: editOptionEn }
          : option,
      ),
    );
    setEditOptionId(null);
    setEditOptionAr("");
    setEditOptionEn("");
    setError(""); // إزالة الرسالة بعد التعديل الناجح
  };

  useEffect(() => {
    servicePrice && setLocalServicePrice([...servicePrice]);
  }, [servicePrice]);

  useEffect(() => {
    if (!isInitialLoad || isCreate) {
      setFeaturesList([...selectedOptions]);
    }
  }, [selectedOptions, setFeaturesList, isInitialLoad]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">اختر الخدمات</h2>
      <ul className="space-y-2">
        {localServicePrice.map((service) => (
          <li key={service._id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={service._id}
              checked={selectedOptions.some(
                (option) => option.serviceID === service._id,
              )}
              onChange={() => handleCheckboxChange(service)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor={service._id} className="text-lg">
              {service.nameAr} / {service.nameEn}
            </label>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          value={newOptionAr}
          onChange={(e) => setNewOptionAr(e.target.value)}
          className="form-input mt-1 block w-full border p-2"
          placeholder="أضف خيار جديد بالعربية"
        />
        <input
          type="text"
          value={newOptionEn}
          onChange={(e) => setNewOptionEn(e.target.value)}
          className="form-input mt-1 block w-full border p-2"
          placeholder="أضف خيار جديد بالإنجليزية"
        />
        <button
          onClick={handleAddOption}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          إضافة
        </button>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">الخدمات المختارة</h3>
        <ul className="space-y-2">
          {selectedOptions.map((option) => (
            <li key={option.serviceID} className="flex items-center space-x-2">
              {editOptionId === option.serviceID ? (
                <>
                  <input
                    type="text"
                    value={editOptionAr}
                    onChange={(e) => setEditOptionAr(e.target.value)}
                    className="form-input mt-1 block w-full border p-2"
                    placeholder="تعديل الخيار بالعربية"
                  />
                  <input
                    type="text"
                    value={editOptionEn}
                    onChange={(e) => setEditOptionEn(e.target.value)}
                    className="form-input mt-1 block w-full border p-2"
                    placeholder="تعديل الخيار بالإنجليزية"
                  />
                  <button
                    onClick={handleSaveEditOption}
                    className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    حفظ
                  </button>
                </>
              ) : (
                <>
                  <span className="text-lg">
                    {option.ar} / {option.en}
                  </span>
                  <button
                    onClick={() => handleEditOption(option)}
                    className="ml-2 px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    تعديل
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropBoxSelectServices;
