import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import React, { useState } from "react";
import PlanPricingCard from "../../model/cards/PlanPricingCard";
import { Select, SelectItem } from "@nextui-org/react";



const CreatePlansPricing = () => {
  const [moreOption, setMoreOption] = useState(false);

  const [categoryName,setCategoryName]=useState("")
  const [rank,setRank]=useState("")
  const [targetUser,setTargetUser]=useState("")
  const [expiryDate, setExpiryDate] = useState("");
  const [isPopular, setPopular] = useState(false);
  const [basicPrice, setBasicPrice] = useState(0);
  const [isOffer, setOffer] = useState(false);
  const [oldPrice, setOldPrice] = useState(0);
    // const [featuresList, setFeaturesList] = useState([]);
  const [featuresList, setFeaturesList] = useState([]);
  const [descriptionCard, setDescriptionCard] = useState("");
  const [pageContentText, setPageContentText] = useState("");


  const data2 = {
    categoryName: categoryName,
    date: expiryDate,
    rank: rank,
    description: descriptionCard,
    price: basicPrice,
    dateListInCard: [],
    lastPrice: oldPrice,
    Offer: isOffer,
    isAdmin: false,
    isPopular: isPopular,
    // pageContentText,
  };

  const handleAddFeatures = (e) => {
e.preventDefault()   
 console.log(data2);
  }
  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-lightGreenHover  sticky top-0">
        <Sidebar />
      </div>
      <div className="w-full grid md:grid-cols-2 grid-cols-1">
        <div className="mt-6 ml-3 mb-10">
          {/* Category name */}
          <div>
            <d className="block text-sm font-medium text-gray-600">
              Category name :-
            </d>
            <div className="flex space-x-3">
              <input
                className="mt-1 px-3 py-2 border rounded w-full"
                type="text"
                name="CategoryNameAr"
                placeholder="Name Arabic"
                onChange={(e) => setCategoryName(e.target.value)}
              />

              {/* <input
                className="mt-1 px-3 py-2 border rounded w-full"
                type="text"
                name="CategoryNameEn"
                placeholder="Name English"
              /> */}
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
                className="mt-1 px-3 py-2 border rounded w-full"
              >
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
                className="mt-1 px-3 py-2 border rounded w-full"
              >
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
              onChange={(e) => setDescriptionCard(e.target.value)}
              className="mt-1 max-h-28 min-h-[50px] px-3 py-2 border rounded w-full"
            ></textarea>
            {/* <textarea
              placeholder="English"
              className="mt-1 max-h-28 min-h-[50px] px-3 py-2 border rounded w-full"
            ></textarea> */}
          </div>
          {/*features*/}
          <div className="mt-4  col-span-2">
            <label className="block text-sm font-medium text-gray-600">
              features :-
            </label>
            <div className=" mb-2 flex">
              <Select
                label="features"
                placeholder="Select an features"
                selectionMode="multiple"
                // onChange={(e) => setFeaturesList(e.target.value)}
                onSelectionChange={setFeaturesList}
              >
                <SelectItem key="2D_Canvas" value="2D_Canvas">
                  2D Canvas
                </SelectItem>

                <SelectItem key="3D_Canvas" value="3D_Canvas">
                  3D Canvas
                </SelectItem>

                <SelectItem key="Media_Files" value="Media_Files">
                  mport Media Files
                </SelectItem>

                <SelectItem key="3D_Assets" value="3D_Assets">
                  Import 3D Assets
                </SelectItem>

                <SelectItem key="Assets_Support" value="Assets_Support">
                  Multi Media Assets Support
                </SelectItem>
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
                onChange={(e) => setPageContentText(e.target.value)}
                placeholder="Arabic"
                className="mt-1 max-h-[600px] min-h-[150px] px-3 py-2 border rounded w-full"
              />
              {/* <textarea
                placeholder="English"
                className="mt-1 max-h-[600px] min-h-[150px] px-3 py-2 border rounded w-full"
              ></textarea> */}
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
          {/* <PlanPricingCard data={data2} /> */}
        </div>
      </div>
    </div>
  );
};

export default CreatePlansPricing;
