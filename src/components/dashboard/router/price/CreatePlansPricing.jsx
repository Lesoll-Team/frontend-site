import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import React, { useEffect, useState } from "react";
import PlanPricingCard from "../../model/cards/PlanPricingCard";
import { useDispatch, useSelector } from "react-redux";
import {
  createPricePlan,
  getServicePrice,
} from "@/redux-store/features/PricingSlice";
import PlanAdded from "../../model/pricing/PlanAdded";
import DropBoxSelectServices from "../../model/pricing/DropBoxSelectServices";
import { sendBundleVIP } from "@/utils/dashboardApi/paymentDetailsAPI";

const CreatePlansPricing = ({ userId }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const servicePrice = useSelector((state) => state.Pricing.priceService);
  const isCreated = useSelector((state) => state.Pricing.isCreated);

  const [categoryNameAr, setCategoryNameAr] = useState("");
  const [categoryNameEn, setCategoryNameEn] = useState("");
  const [descriptionCardAr, setDescriptionCardAr] = useState("");
  const [descriptionCardEn, setDescriptionCardEn] = useState("");

  const [targetUser, setTargetUser] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isPopular, setPopular] = useState(false);
  const [isAddProperty, setAddProperty] = useState(false);
  const [isOffer, setOffer] = useState(false);
  const [basicPrice, setBasicPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [normalProp, setNormalProp] = useState(0);
  const [pinPropertyHomePageDays, setPinPropertyHomePageDays] = useState(0);

  const [durationPlan, setDurationPlan] = useState(0); //ضمان ظهور إعلانك ضمن أول الإعلانات
  const [durationPlanHome, setDurationPlanHome] = useState(0); //تجديد إعلانك يوميًا على الصفحة الرئيسية
  const [featuresList, setFeaturesList] = useState(null);
  const [giftCreated, setGiftCreated] = useState(false);

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
    pinPropertyHomePageDays,

    // propNumberCategory: propNumber,
    repostDayCategory: durationPlan,
    normalProp,
    // propNumberInHome,
    pinDayInHome: durationPlanHome,
    addProperty: isAddProperty,
  };

  const handleAddFeatures = async (e) => {
    e.preventDefault();

    if (userId) {
      await sendBundleVIP({ packageData: data, userID: userId })
        .then(() => {
          setGiftCreated(true);
        })
        .catch(() => {
          setGiftCreated(false);
        });
    } else dispatch(createPricePlan(data));
  };
  useEffect(() => {
    dispatch(getServicePrice());
  }, []);
  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-white  sticky top-0">
        <Sidebar />
      </div>
      {isCreated || giftCreated ? (
        <PlanAdded
          message={
            language
              ? "تم تعديل  الباقة بنجاح"
              : "The plan has been edited successfully"
          }
          isAdd
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
              <div className=" sm:flex-row flex-col gap-y-[1vh] flex gap-x-3">
                <input
                  className="mt-1 px-3 py-2 border rounded w-full"
                  type="text"
                  name="CategoryNameAr"
                  placeholder={"اسم الباقة (عربي)"}
                  onChange={(e) => setCategoryNameAr(e.target.value)}
                />
                <input
                  className="mt-1 px-3 py-2 border rounded w-full"
                  type="text"
                  name="CategoryNameEn"
                  placeholder={"اسم الباقة (انجليزي)"}
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
            <div className="items-center grid sm:grid-cols-3 grid-cols-1 gap-x-3 gap-y-[1vh]">
              <div className="w-full flex flex-col gap-y-[0.5vh]">
                <label
                  htmlFor="normal properties"
                  className="block text-sm font-medium text-gray-600"
                >
                  {language ? "عقارات " : "  properties "} :-
                </label>
                <input
                  name="normal properties"
                  type="number"
                  placeholder={`عدد العقارات`}
                  className="mt-1 px-3 py-2 border rounded w-full"
                  onChange={(e) => setNormalProp(e.target.value)}
                />
              </div>

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
                  placeholder={`أدخل سعر `}
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
                  placeholder={`أدخل سعر قبل الخصم`}
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
                placeholder="عربي"
                onChange={(e) => setDescriptionCardAr(e.target.value)}
                className="mt-1 max-h-28 min-h-[50px] px-3 py-2 border rounded w-full"
              ></textarea>
              <textarea
                placeholder="انجليزي"
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
              <div className=" mb-2 ">
                <DropBoxSelectServices
                  servicePrice={servicePrice}
                  setFeaturesList={setFeaturesList}
                  isCreate
                />
                <div className=" w-full ">
                  {featuresList?.some(
                    (option) => option.serviceID === "656cc095485cfd01499d1362",
                  ) && (
                    <label className="flex flex-col gap-x-2">
                      ضمان ظهور إعلانك ضمن أول الإعلانات:-
                      <input
                        type="number"
                        className="mt-1 px-3 py-2 border rounded w-fit"
                        placeholder="عدد الايام "
                        onChange={(e) => setDurationPlan(e.target.value)}
                      />
                    </label>
                  )}
                  {featuresList?.some(
                    (option) => option.serviceID === "656cc0c1485cfd01499d1365",
                  ) && (
                    <label className="flex flex-col gap-x-2">
                      تجديد إعلانك يوميًا على الصفحة البحث:-
                      <input
                        type="number"
                        className="  mt-1 px-3 py-2 border rounded w-fit"
                        onChange={(e) => setDurationPlanHome(e.target.value)}
                        placeholder="عدد الايام "
                        // value={durationPlanHome}
                      />
                    </label>
                  )}
                  {featuresList?.some(
                    (option) => option.serviceID === "668a8ff18da4baa896aaea64",
                  ) && (
                    <label className="flex flex-col gap-x-2">
                      عدد ايام تثبيت في الصفحة الرئيسية :-
                      <input
                        type="number"
                        className="  mt-1 px-3 py-2 border rounded w-fit"
                        onChange={(e) =>
                          setPinPropertyHomePageDays(e.target.value)
                        }
                        placeholder="عدد الايام "
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>
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
            <PlanPricingCard data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePlansPricing;
