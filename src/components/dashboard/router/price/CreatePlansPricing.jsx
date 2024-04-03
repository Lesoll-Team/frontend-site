import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import React, { useEffect, useState } from "react";
import PlanPricingCard from "../../model/cards/PlanPricingCard";
import { Select, SelectItem } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPricePlan,
  getServicePrice,
} from "@/redux-store/features/PricingSlice";
import PlanAdded from "../../model/pricing/PlanAdded";

const CreatePlansPricing = () => {
  const dispatch = useDispatch();
  // const [moreOption, setMoreOption] = useState(false);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const servicePrice = useSelector((state) => state.Pricing.priceService);
  const isCreated = useSelector((state) => state.Pricing.isCreated);

  const [categoryNameAr, setCategoryNameAr] = useState("");
  const [categoryNameEn, setCategoryNameEn] = useState("");
  const [descriptionCardAr, setDescriptionCardAr] = useState("");
  const [descriptionCardEn, setDescriptionCardEn] = useState("");
  // const [singlePageContentEn, setSinglePageContentEn] = useState("");
  // const [singlePageContentAr, setSinglePageContentAr] = useState("");

  // const [rank, setRank] = useState("");
  const [targetUser, setTargetUser] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isPopular, setPopular] = useState(false);
  const [isOffer, setOffer] = useState(false);
  const [basicPrice, setBasicPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);

  const [durationPlan, setDurationPlan] = useState(0); //ضمان ظهور إعلانك ضمن أول الإعلانات
  const [propNumber, setPropNumber] = useState(0); //ضمان ظهور إعلانك ضمن أول الإعلانات

  const [durationPlanHome, setDurationPlanHome] = useState(0); //تجديد إعلانك يوميًا على الصفحة الرئيسية
  const [propNumberInHome, setPropNumberInHome] = useState(0); //تجديد إعلانك يوميًا على الصفحة الرئيسية

  const [featuresList, setFeaturesList] = useState(new Set([]));
  const [featuresId, setFeaturesId] = useState([]);

  const data2 = {
    PaymentAr: categoryNameAr,
    PaymentEn: categoryNameEn,
    price: basicPrice,
    targetUsers: targetUser,
    Popular: isPopular,
    offer: isOffer,
    offerPrice: oldPrice,
    expireDate: expiryDate,
    service: [...featuresList],
    descriptionAr: descriptionCardAr,
    descriptionEn: descriptionCardEn,
    propNumberInHome,
    pinDayInHome: durationPlanHome,
    propNumberCategory: propNumber,
    repostDayCategory: durationPlan,
    // singlePageContentAr,
    // singlePageContentEn,
  };

  const data = {
    PaymentAr: categoryNameAr,
    PaymentEn: categoryNameEn,
    price: basicPrice,
    targetUsers: targetUser,
    Popular: isPopular,
    offer: isOffer,
    offerPrice: oldPrice,
    expireDate: expiryDate,
    service: featuresId,
    descriptionAr: descriptionCardAr,
    descriptionEn: descriptionCardEn,
    propNumberInHome,
    pinDayInHome: durationPlanHome,
    propNumberCategory: propNumber,
    repostDayCategory: durationPlan,
    // singlePageContentAr,
    // singlePageContentEn,
  };

  const handleFeaturesSelectionChange = (selectedKeys) => {
    const selectedItems = Array.from(selectedKeys);

    const selectedFeaturesArray = selectedItems.map((selectedItem) => {
      const selectedFeature = servicePrice.find(
        (item) => item._id === selectedItem
      );
      if (selectedFeature) {
        const { _id, nameAr, nameEn } = selectedFeature;
        return { _id, nameAr, nameEn };
      }
      return null;
    });

    const filteredSelectedFeaturesArray = selectedFeaturesArray.filter(
      (item) => item !== null
    );
    const featuresIdArray = filteredSelectedFeaturesArray.map(
      (item) => item._id
    );

    setFeaturesId(featuresIdArray);

    setFeaturesList(filteredSelectedFeaturesArray); // Update the state with the new selected features
  };

  const handleAddFeatures = (e) => {
    e.preventDefault();
    dispatch(createPricePlan(data));
  };
  useEffect(() => {
    dispatch(getServicePrice());
  }, []);

  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-white  sticky top-0">
        <Sidebar />
      </div>
      {isCreated ? (
        <PlanAdded
          message={
            language
              ? "تم تعديل  الباقة بنجاح"
              : "The plan has been edited successfully"
          }
          isAdd
        />
      ) : (
        <div className="w-full grid lg:grid-cols-2 grid-cols-1">
          <div
            dir={language ? "rtl" : "ltr"}
            className="mt-6  mx-[20px] mb-10 flex flex-col gap-y-[4vh]"
          >
            <div>
              <div className="block text-sm font-medium text-gray-600">
                {language ? " اسم الباقة " : " Category name "}:-
              </div>
              <div className=" sm:flex-row flex-col gap-y-[1vh] flex gap-x-3">
                <input
                  className="mt-1 px-3 py-2 border rounded w-full"
                  type="text"
                  name="CategoryNameAr"
                  placeholder={
                    language ? "اسم الباقة (عربي)" : "Category name (Arabic)"
                  }
                  onChange={(e) => setCategoryNameAr(e.target.value)}
                />
                <input
                  className="mt-1 px-3 py-2 border rounded w-full"
                  type="text"
                  name="CategoryNameEn"
                  placeholder={
                    language
                      ? "اسم الباقة (انجليزي)"
                      : "Category name (English)"
                  }
                  onChange={(e) => setCategoryNameEn(e.target.value)}
                />
              </div>
            </div>
            {/*  Date & Target & is popular */}
            <div className="   flex sm:flex-row flex-col  col-span-2 gap-x-3 sm:items-center">
              <div className="w-full flex flex-col gap-y-[0.5vh]">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-600"
                >
                  {language ? " المدة الزمنية " : " Duration "} :-
                </label>
                <select
                  name="date"
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="mt-1 px-3 py-2 border rounded w-full"
                >
                  <option value="one day">
                    {language ? "يومية" : "Daily"}
                  </option>
                  <option value="week">
                    {language ? "أسبوعية" : "Weekly"}
                  </option>
                  <option value="month">
                    {language ? "شهرية" : "Monthly"}
                  </option>
                  <option value="yearly">
                    {language ? "سنوية" : "Yearly"}
                  </option>
                </select>
              </div>
              <div className="w-full flex flex-col gap-y-[0.5vh]">
                <label className="block text-sm font-medium text-gray-600">
                  {language ? "المستخدمين المستهدفين" : "target users"}:-
                </label>
                <select
                  name="date"
                  onChange={(e) => setTargetUser(e.target.value)}
                  className="mt-1 px-3 py-2 border rounded w-full"
                >
                  <option value="all">{language ? "الجميع" : "All"}</option>
                  <option value="individual">
                    {language ? "فردي" : "Individual"}
                  </option>
                  <option value="broker">
                    {language ? "سمسار" : "Broker"}
                  </option>
                  <option value="developer">
                    {language ? "شركات " : "Developer"}
                  </option>
                </select>
              </div>
              <div className="sm:w-[250px] w-[100px]  justify-between gap-x-1 flex  sm:mt-6 mt-2  sm:items-center">
                <label htmlFor="popular">
                  {language ? "أكثر شعبيه" : "Popular"}
                </label>
                <input
                  onChange={(e) => setPopular(e.target.checked)}
                  type="checkbox"
                  id="popular"
                  name="popular"
                  // className="w-9 h-9"
                />
              </div>
            </div>
            {/* Price & Old price */}
            <div className="items-center grid sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-[1vh]">
              <div className="">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-600"
                >
                  {language ? "السعر" : "Price"} :-
                </label>
                <input
                  name="price"
                  type="number"
                  placeholder={
                    language
                      ? `أدخل السعر ${isOffer ? "بعد الخصم" : "الباقه"}`
                      : `Enter the ${isOffer ? "price after discount" : "package price"}`
                  }
                  className="mt-1 px-3 py-2 border rounded w-full"
                  onChange={(e) => setBasicPrice(e.target.value)}
                />
              </div>

              <div className=" flex flex-col ">
                <div className="flex gap-x-3">
                  <label className="" htmlFor="offer">
                    {language ? "هل يوجد خصم ؟" : "There a discount ?"}
                  </label>
                  <input
                    onChange={(e) => setOffer(e.target.checked)}
                    type="checkbox"
                    id="offer"
                    name="offer"
                  />
                </div>
                <input
                  name="rank"
                  type="number"
                  placeholder={
                    isOffer &&
                    (language
                      ? "ادخل السعر القديم قبل الخصم"
                      : "Enter the old price before the discount")
                  }
                  className="mt-1 px-3 py-2 border rounded w-full"
                  disabled={!isOffer}
                  onChange={(e) => setOldPrice(e.target.value)}
                />
              </div>
            </div>
            {/* Description */}
            <div className=" grid col-span-2">
              <label className="block text-sm font-medium text-gray-600">
                {language ? "الوصف" : "Description"} :-
              </label>
              <textarea
                placeholder={language ? "عربي" : "Arabic"}
                onChange={(e) => setDescriptionCardAr(e.target.value)}
                className="mt-1 max-h-28 min-h-[50px] px-3 py-2 border rounded w-full"
              ></textarea>
              <textarea
                placeholder={language ? "انجليزي" : "English"}
                onChange={(e) => setDescriptionCardEn(e.target.value)}
                className="mt-1 max-h-28 min-h-[50px] px-3 py-2 border rounded w-full"
              ></textarea>
            </div>
            {/*features*/}
            <div className="  col-span-2">
              <label
                htmlFor="features"
                className="block text-sm font-medium text-gray-600"
              >
                {language ? "المميزات" : "Features"} :-
              </label>
              <div className=" mb-2 flex">
                <Select
                  name="features"
                  label={language ? "المميزات" : "Features"}
                  placeholder={
                    language
                      ? "اختار مميزات الباقة"
                      : "Choose the package features"
                  }
                  selectionMode="multiple"
                  onSelectionChange={handleFeaturesSelectionChange}
                >
                  {servicePrice?.map((item) => (
                    <SelectItem
                      value={language ? item.nameAr : item.nameEn}
                      key={item._id}
                    >
                      {language ? item.nameAr : item.nameEn}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              {featuresId.includes("656cc095485cfd01499d1362") && (
                <>
                  <b>
                    {language
                      ? "تحديد مدة وعدد ظهور الإعلانات"
                      : "Determine the duration and number of advertisements to appear"}
                  </b>
                  <div className="flex gap-x-2">
                    <input
                      type="text"
                      className="mt-1 px-3 py-2 border rounded w-full"
                      onChange={(e) => setPropNumber(e.target.value)}
                      placeholder={language ? "عدد الاعلانات " : "Number ads"}
                    />
                    <input
                      type="text"
                      className="mt-1 px-3 py-2 border rounded w-full"
                      onChange={(e) => setDurationPlan(e.target.value)}
                      placeholder={
                        language
                          ? "عدد ايام ظهور الاعلان"
                          : "Number of days the ad appears"
                      }
                    />
                  </div>
                </>
              )}
              {featuresId.includes("656cc0c1485cfd01499d1365") && (
                <>
                  <b>
                    {language
                      ? " تحديد مدة وعدد ظهور الإعلانات على الصفحة الرئيسية"
                      : "Determine the duration and number of ads that appear on the home page"}
                  </b>
                  <div className="flex gap-x-2">
                    <input
                      type="number"
                      className="mt-1 px-3 py-2 border rounded w-full"
                      onChange={(e) => setPropNumberInHome(e.target.value)}
                      placeholder={
                        language
                          ? " عدد الاعلانات على الصفحة الرئيسية"
                          : "Number of ads on the home page"
                      }
                    />
                    <input
                      type="number"
                      className="mt-1 px-3 py-2 border rounded w-full"
                      onChange={(e) => setDurationPlanHome(e.target.value)}
                      placeholder={
                        language
                          ? " عدد ايام ظهور على الصفحة الرئيسية"
                          : "Number of days to appear on the home page"
                      }
                    />
                  </div>
                </>
              )}
            </div>
            {/*more option */}
            {/* <div className=" grid col-span-2">
              <button
                onClick={() => setMoreOption(!moreOption)}
                className="text-blue-700 underline cursor-pointer w-max "
              >
                {language ? " عرض المزيد" : " more option"}
              </button>
              <div className={!moreOption && "hidden"}>
                <label
                  htmlFor="textarea-content"
                  className="block text-sm font-medium text-gray-600"
                >
                  {language ? "محتوي صفحة الباقة" : "Package page content"}
                  :-
                </label>

                <textarea
                  name="textarea-content"
                  onChange={(e) => setSinglePageContentAr(e.target.value)}
                  placeholder={language ? "عربي" : "Arabic"}
                  className="mt-1 max-h-[600px] min-h-[150px] px-3 py-2 border rounded w-full"
                />

                <textarea
                  name="textarea-content"
                  placeholder={language ? "انجليزي" : "English"}
                  onChange={(e) => setSinglePageContentEn(e.target.value)}
                  className="mt-1 max-h-[600px] min-h-[150px] px-3 py-2 border rounded w-full"
                ></textarea>
              </div>
            </div> */}
            {/* Button  */}
            <div className="flex justify-center items-center">
              <button
                onClick={handleAddFeatures}
                className="bg-lightGreen py-5 lg-text px-10 rounded-xl font-bold text-white"
              >
                {language ? "تاكيد إضافة الباقة" : "Confirm adding the package"}
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <PlanPricingCard data={data2} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePlansPricing;
