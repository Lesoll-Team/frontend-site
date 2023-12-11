import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import React, { useEffect, useState } from "react";
import PlanPricingCard from "../../model/cards/PlanPricingCard";
import { Select, SelectItem } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPricePlan,
  getServicePrice,
} from "@/redux-store/features/PricingSlice";

const CreatePlansPricing = () => {
  const dispatch = useDispatch();
  const [moreOption, setMoreOption] = useState(false);
  const servicePrice = useSelector((state) => state.Pricing.priceService);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [categoryNameAr, setCategoryNameAr] = useState("");
  const [categoryNameEn, setCategoryNameEn] = useState("");
  const [descriptionCardAr, setDescriptionCardAr] = useState("");
  const [descriptionCardEn, setDescriptionCardEn] = useState("");
  const [singlePageContentEn, setSinglePageContentEn] = useState("");
  const [singlePageContentAr, setSinglePageContentAr] = useState("");

  const [rank, setRank] = useState("");
  const [targetUser, setTargetUser] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isPopular, setPopular] = useState(false);
  const [isOffer, setOffer] = useState(false);
  const [basicPrice, setBasicPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);

  const [featuresList, setFeaturesList] = useState(new Set([]));
  const [featuresId, setFeaturesId] = useState([]);

  const data2 = {
    rank,
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
    singlePageContentAr,
    singlePageContentEn,
  };

  const data = {
    rank,
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
    singlePageContentAr,
    singlePageContentEn,
  };

  const handleFeaturesSelectionChange = (selectedKeys) => {
    const selectedItems = Array.from(selectedKeys);

    const selectedFeaturesArray = selectedItems.map((selectedItem) => {
      const selectedFeature = servicePrice.find(
        (item) => item._id === selectedItem
      );
      if (selectedFeature) {
        const { _id, nameAr, nameEn } = selectedFeature;
        return { _id,   nameAr ,nameEn };
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
    // console.log(data2);
    // console.log("********************");
    // console.log(data);
  };
  useEffect(() => {
    dispatch(getServicePrice());
  }, []);

  // console.log("featuresList", featuresList);

  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-lightGreenHover  sticky top-0">
        <Sidebar />
      </div>
      <div className="w-full grid md:grid-cols-2 grid-cols-1">
        <div className="mt-6 ml-3 mb-10">
          {/* Category name */}
          <div>
            <div className="block text-sm font-medium text-gray-600">
              Category name :-
            </div>
            <div className="flex space-x-3">
              <input
                className="mt-1 px-3 py-2 border rounded w-full"
                type="text"
                name="CategoryNameAr"
                placeholder="Name Arabic"
                onChange={(e) => setCategoryNameAr(e.target.value)}
              />
              <input
                className="mt-1 px-3 py-2 border rounded w-full"
                type="text"
                name="CategoryNameEn"
                placeholder="Name English"
                onChange={(e) => setCategoryNameEn(e.target.value)}
              />
            </div>
          </div>
          {/* Rank & Date & Target & is popular */}
          <div className=" mt-4  flex col-span-2 space-x-3 items-center">
            <div className="grow ">
              <label className="block text-sm font-medium text-gray-600">
                Rank:
              </label>
              <select
                name="rank"
                onChange={(e) => setRank(e.target.value)}
                className="mt-1 px-3 py-2 border rounded w-full">
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="water">Water</option>
                <option value="galaxy">Galaxy</option>
                <option value="bronze">Bronze</option>
              </select>
            </div>
            <div className="grow ">
              <label className="block text-sm font-medium text-gray-600">
                Date:
              </label>
              <select
                name="date"
                // value={formData.rank}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="mt-1 px-3 py-2 border rounded w-full">
                <option value="one day">one day</option>
                <option value="week">week</option>
                <option value="month">month</option>
                <option value="yearly">yearly</option>
                {/* <option value="bronze">Bronze</option> */}
              </select>
            </div>
            <div className="grow ">
              <label className="block text-sm font-medium text-gray-600">
                Target user:
              </label>
              <select
                name="date"
                onChange={(e) => setTargetUser(e.target.value)}
                className="mt-1 px-3 py-2 border rounded w-full"
              >
                <option value="individual">individual</option>
                <option value="broker">broker</option>
                <option value="developer">developer</option>
                <option value="all">all</option>
                {/* <option value="bronze">Bronze</option> */}
              </select>
            </div>
            <div className="flex items-center justify-center">
              <input
                onChange={(e) => setPopular(e.target.checked)}
                type="checkbox"
                id="popular"
                name="popular"
              />
              <label className="w-24" htmlFor="popular">
                is popular
              </label>
            </div>
          </div>
          {/* Price & Old price */}
          <div className=" mt-4 items-center grid grid-cols-2  space-x-3 ">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Price :-
              </label>
              <input
                name="rank"
                type="number"
                className="mt-1 px-3 py-2 border rounded w-full"
                onChange={(e) => setBasicPrice(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Old price :
              </label>
              <div className="flex items-center">
                <input
                  onChange={(e) => setOffer(e.target.checked)}
                  type="checkbox"
                  id="offer"
                  name="offer"
                />
                <label className="w-24" htmlFor="offer">
                  is it offer
                </label>
                <input
                  name="rank"
                  type="number"
                  className="mt-1 px-3 py-2 border rounded w-full"
                  disabled={!isOffer}
                  onChange={(e) => setOldPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="mt-4 grid col-span-2">
            <label className="block text-sm font-medium text-gray-600">
              Description :-
            </label>
            <textarea
              placeholder="Arabic"
              onChange={(e) => setDescriptionCardAr(e.target.value)}
              className="mt-1 max-h-28 min-h-[50px] px-3 py-2 border rounded w-full"
            ></textarea>
            <textarea
              placeholder="English"
              onChange={(e) => setDescriptionCardEn(e.target.value)}
              className="mt-1 max-h-28 min-h-[50px] px-3 py-2 border rounded w-full"
            ></textarea>
          </div>
          {/*features*/}
          <div className="mt-4  col-span-2">
            <label className="block text-sm font-medium text-gray-600">
              features :-
            </label>
            <div className=" mb-2 flex">
              <Select
                label="features"
                placeholder="Select features"
                selectionMode="multiple"
                // selectedKeys={featuresList}
                onSelectionChange={handleFeaturesSelectionChange}
                // onChange={(e) => handleFeaturesSelectionChange(e.target.value)}
              >
                {servicePrice?.map((item) => (
                  <SelectItem
                    // key={` {_id:'${item._id}', textFeatures:'${language ? item.nameAr : item.nameEn}'}`}
                    value={language ? item.nameAr : item.nameEn}
                    key={item._id} // Use only the _id as the key
                  >
                    {language ? item.nameAr : item.nameEn}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          {/*more option */}
          <div className="mt-4 grid col-span-2">
            <p
              onClick={() => setMoreOption(!moreOption)}
              className="text-blue-700 underline cursor-pointer w-max "
            >
              more option
            </p>
            <div className={moreOption ? "" : "hidden"}>
              <label className="block text-sm font-medium text-gray-600">
                Description :-
              </label>
              <textarea
                onChange={(e) => setSinglePageContentAr(e.target.value)}
                placeholder="Arabic"
                className="mt-1 max-h-[600px] min-h-[150px] px-3 py-2 border rounded w-full"
              />
              <textarea
                placeholder="English"
                onChange={(e) => setSinglePageContentEn(e.target.value)}
                className="mt-1 max-h-[600px] min-h-[150px] px-3 py-2 border rounded w-full"
              ></textarea>
            </div>
          </div>
          {/* Button  */}
          <div className="flex justify-center items-center">
            <button
              onClick={handleAddFeatures}
              className="bg-lightGreen py-5 px-10 rounded-xl font-semibold text-white"
            >
              Submit add plan
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <PlanPricingCard data={data2} />
        </div>
      </div>
    </div>
  );
};

export default CreatePlansPricing;
