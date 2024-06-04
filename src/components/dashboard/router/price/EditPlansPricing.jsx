import {
  EditPricePlan,
  getServicePrice,
} from "@/redux-store/features/PricingSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlanPricingCard from "../../model/cards/PlanPricingCard";
import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import PlanAdded from "../../model/pricing/PlanAdded";
import SelectServices from "../../model/pricing/SelectServices";

const EditPlansPricing = ({ paymentPlan }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const servicePrice = useSelector((state) => state.Pricing.priceService);
  const isUpdated = useSelector((state) => state.Pricing.isUpdated);

  const [categoryNameAr, setCategoryNameAr] = useState("");
  const [categoryNameEn, setCategoryNameEn] = useState("");
  const [descriptionCardAr, setDescriptionCardAr] = useState("");
  const [descriptionCardEn, setDescriptionCardEn] = useState("");
  const [normalProp, setNormalProp] = useState(0);
  const [isAddProperty, setAddProperty] = useState(false);

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

  const [featuresList, setFeaturesList] = useState(null);

  useEffect(() => {
    dispatch(getServicePrice());
  }, []);

  useEffect(() => {
    setCategoryNameAr(paymentPlan.PaymentAr);
    setCategoryNameEn(paymentPlan.PaymentEn);
    setDescriptionCardAr(paymentPlan.descriptionAr);
    setDescriptionCardEn(paymentPlan.descriptionEn);
    setTargetUser(paymentPlan.targetUsers);
    setExpiryDate(paymentPlan.expireDate);
    setPopular(paymentPlan.Popular);
    setOffer(paymentPlan.offer);
    setBasicPrice(paymentPlan.price);
    setOldPrice(paymentPlan.offerPrice);
    setFeaturesList(paymentPlan.newService);
    setDurationPlan(paymentPlan.repostDayCategory);
    setPropNumber(paymentPlan.propNumberCategory);
    setNormalProp(paymentPlan.propNumber);
    setDurationPlanHome(paymentPlan.pinDayInHome);
    setPropNumberInHome(paymentPlan.propNumberInHome);
    setAddProperty(paymentPlan.addProperty);
  }, []);

  const data2 = {
    PaymentAr: categoryNameAr,
    PaymentEn: categoryNameEn,
    price: basicPrice,
    targetUsers: targetUser,
    Popular: isPopular,
    offer: isOffer,
    offerPrice: oldPrice,
    expireDate: expiryDate,
    newService: featuresList,
    descriptionAr: descriptionCardAr,
    descriptionEn: descriptionCardEn,
    propNumberCategory: propNumber,
    repostDayCategory: durationPlan,
    normalProp,
    propNumberInHome,
    pinDayInHome: durationPlanHome,
    addProperty: isAddProperty,
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
    newService: featuresList,
    descriptionAr: descriptionCardAr,
    descriptionEn: descriptionCardEn,
    propNumberCategory: propNumber,
    repostDayCategory: durationPlan,
    normalProp,
    propNumberInHome,
    pinDayInHome: durationPlanHome,
    addProperty: isAddProperty,
  };

  const handleEditFeatures = (e) => {
    e.preventDefault();
    dispatch(EditPricePlan({ pricePlanData: data, id: paymentPlan._id }));
  };

  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-white  sticky top-0">
        <Sidebar />
      </div>
      {isUpdated ? (
        <PlanAdded
          message={
            language
              ? "تم تعديل  الباقة بنجاح"
              : "The plan has been edited successfully"
          }
        />
      ) : (
        <div className="w-full grid lg:grid-cols-4 grid-cols-1">
          <div
            dir={language ? "rtl" : "ltr"}
            className="mt-6 lg:col-span-3 mx-[20px] mb-10 flex flex-col gap-y-[4vh]"
          >
            <div>
              <div className="block text-sm font-medium text-gray-600">
                {language ? " اسم الباقة " : " Category name "}:-
              </div>
              <div className="sm:flex-row flex-col gap-y-[1vh] flex gap-x-3">
                <input
                  className="mt-1 px-3 py-2 border rounded w-full"
                  type="text"
                  name="CategoryNameAr"
                  placeholder="Name Arabic"
                  value={categoryNameAr}
                  onChange={(e) => setCategoryNameAr(e.target.value)}
                />
                <input
                  className="mt-1 px-3 py-2 border rounded w-full"
                  type="text"
                  name="CategoryNameEn"
                  placeholder="Name English"
                  value={categoryNameEn}
                  onChange={(e) => setCategoryNameEn(e.target.value)}
                />
              </div>
            </div>
            {/*  Date & Target & is popular */}
            <div className=" flex sm:flex-row flex-col  col-span-2 gap-x-3 sm:items-center">
              <div className="w-full flex flex-col gap-y-[0.5vh] ">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-600"
                >
                  {language ? " المدة الزمنية " : " Duration "} :-
                </label>
                <select
                  name="date"
                  value={expiryDate}
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
              <div className="w-full flex flex-col gap-y-[0.5vh] ">
                <label className="block text-sm font-medium text-gray-600">
                  {language ? "المستخدمين المستهدفين" : "target users"}:-
                </label>
                <select
                  name="date"
                  value={targetUser}
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
                  checked={isPopular}

                  // className="w-9 h-9"
                />
              </div>
            </div>
            {/* Price & Old price */}
            <div className="items-center grid sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-[1vh]">
              <div className="w-full flex flex-col gap-y-[0.5vh]">
                <label
                  htmlFor="normal properties"
                  className="block text-sm font-medium text-gray-600"
                >
                  {language ? "عقارات مجاني" : " free properties "} :-
                </label>
                <input
                  name="normal properties"
                  type="number"
                  placeholder={language ? ` عقارات مجاني` : `free properties`}
                  value={normalProp}
                  className="mt-1 px-3 py-2 border rounded w-full"
                  onChange={(e) => setNormalProp(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-600"
                >
                  {language ? "السعر" : "Price"} :-
                </label>
                <input
                  name="price"
                  type="number"
                  className="mt-1 px-3 py-2 border rounded w-full"
                  onChange={(e) => setBasicPrice(e.target.value)}
                  placeholder={
                    language
                      ? `أدخل السعر ${isOffer ? "بعد الخصم" : "الباقه"}`
                      : `Enter the ${isOffer ? "price after discount" : "package price"}`
                  }
                  value={basicPrice}
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
                    checked={isOffer}
                  />
                </div>
                <input
                  name="rank"
                  type="number"
                  value={isOffer ? oldPrice : 0}
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
            {/*Description*/}
            <div className=" grid col-span-2">
              <label className="block text-sm font-medium text-gray-600">
                {language ? "الوصف" : "Description"} :-
              </label>
              <textarea
                placeholder={language ? "عربي" : "Arabic"}
                onChange={(e) => setDescriptionCardAr(e.target.value)}
                value={descriptionCardAr}
                className="mt-1 max-h-28 min-h-[50px] px-3 py-2 border rounded w-full"
              ></textarea>
              <textarea
                placeholder={language ? "انجليزي" : "English"}
                onChange={(e) => setDescriptionCardEn(e.target.value)}
                value={descriptionCardEn}
                className="mt-1 max-h-28 min-h-[50px] px-3 py-2 border rounded w-full"
              ></textarea>
            </div>
            {/*features*/}
            <div className=" mb-2 flex">
              <SelectServices
                servicePrice={servicePrice}
                setFeaturesList={setFeaturesList}
                featuresList={featuresList}
                setDurationPlanHome={setDurationPlanHome}
                setPropNumberInHome={setPropNumberInHome}
                setPropNumber={setPropNumber}
                setDurationPlan={setDurationPlan}
                durationPlanHome={durationPlanHome}
                propNumberInHome={propNumberInHome}
                durationPlan={durationPlan}
                propNumber={propNumber}
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={handleEditFeatures}
                className="bg-lightGreen py-5 lg-text px-10 rounded-xl font-bold text-white"
              >
                {language ? "تاكيد إضافة الباقة" : "Confirm adding the package"}
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:mt-14 mt-3   ">
            <div className=" p-2 gap-x-2 flex items-center justify-center">
              <label htmlFor="setAddProperty">
                {language ? "إضافة الي إضافة العقار" : "Add to add property"}
              </label>
              <input
                type="checkbox"
                checked={isAddProperty}
                onChange={(e) => setAddProperty(e.target.checked)}
                name="setAddProperty"
                className="w-[20px] h-[20px]"
              />
            </div>
            <PlanPricingCard data={data2} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPlansPricing;
// propNumberCategory:
//   !featuresList?.id || !featuresList?._id == "656cc095485cfd01499d1362"
//     ? 0
//     : propNumber,
// repostDayCategory:
//   !featuresList?.id || !featuresList?._id == "656cc095485cfd01499d1362"
//     ? 0
//     : durationPlan,
// propNumberInHome:
//   !featuresList?.id || !featuresList?._id == "656cc0c1485cfd01499d1365"
//     ? 0
//     : propNumberInHome,
// pinDayInHome:
//   !featuresList?.id || !featuresList?._id == "656cc0c1485cfd01499d1365"
//     ? 0
//     : durationPlanHome,
// useEffect(() => {
//   if (!paymentPlan.newService) {
//     setFeaturesList(
//       paymentPlan.newService.map((feature) => {
//         return {
//           id: feature._id,
//           ar: feature.nameAr,
//           en: feature.nameEn,
//         };
//       }),
//     );
//   } else {
//     setFeaturesList(
//       paymentPlan.newService.map((feature) => {
//         return {
//           id: feature.id || "",
//           ar: feature.nameAr || feature.ar,
//           en: feature.nameEn || feature.en,
//         };
//       }),
//     );
//   }
// }, [paymentPlan.newService]);
