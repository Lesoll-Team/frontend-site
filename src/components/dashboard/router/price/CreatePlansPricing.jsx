import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import React, { useState } from "react";
import PlanPricingCard from "../../model/cards/PlanPricingCard";
const CreatePlansPricing = () => {
  const [moreOption, setMoreOption] = useState(false);
  const [formData, setFormData] = useState({
    categoryName: { ar: "", en: "" },
    date: { ar: "", en: "" },
    rank: "", // Default value
    description: { ar: "", en: "" },
    price: 0,
    features: [{ ar: "", en: "" }],
    targetUser: "",
    oldPrice: 0,
    Offer: false,
    isAdmin: false,
    isPopular: false,
  });

  const data2 = {
    categoryName: "premium",
    date: "month",
    rank: "silver",
    description:
      "price paid for above and beyond some basic or intrinsic value some basic or intrinsic value some basic or intrinsic value",
    price: "70",
    dateListInCard: [
      { text: "2D Canvas" },
      { text: "3D Canvas" },
      { text: "mport Media Files" },
      { text: "Import 3D Assets" },
      { text: "Multi Media Assets Support" },
      { text: "3D Canvas" },
    ],
    dateListInPage: "",
    lastPrice: "150",
    Offer: false,
    isAdmin: false,
    isPopular: false,
  };
  const data = {};
  const handleAddFeatures = () => {
    // const { name, value } = e.target;
    console.log(formData);
    // // Assuming the input field names are "dateListInCardAr" and "dateListInCardEn"
    // const index = parseInt(name.substring(name.length - 1), 10);

    // setFormData((prevData) => {
    //   const newFeatures = [...prevData.features];
    //   newFeatures[index] = { ...newFeatures[index], ar: value };
    //   return { ...prevData, features: newFeatures };
    // });
  };
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   //  console.log(name, value);
  //   const newFormData = { ...formData };
  //   console.log(newFormData);

  //   newFormData[name] = value;
  //   setFormData(newFormData);
  //   //  console.log(formData);
  // };

  // const handleArrayInputChange = (index, e) => {
  //   const { name, value } = e.target;
  //   const newFormData = { ...formData };
  //   newFormData.dateListInCard[index][name] = value;
  //   setFormData(newFormData);
  // };

  // const handleAddDateListInCard = () => {
  //   const newFormData = { ...formData };
  //   newFormData.dateListInCard.push({ ar: "", en: "" });
  //   setFormData(newFormData);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission, you can access formData here
  //   console.log("all:::", formData);
  // };

  // console.log(formData);
  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-lightGreenHover  sticky top-0">
        <Sidebar />
      </div>
      <div className="w-full grid md:grid-cols-2 grid-cols-1">
        <form className="mt-6 ml-3 mb-10">
          {/* Category name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Category name :-
            </label>
            <div className="flex space-x-3">
              <input
                className="mt-1 px-3 py-2 border rounded w-full"
                type="text"
                name="CategoryNameAr"
                placeholder="Name Arabic"
              />

              <input
                className="mt-1 px-3 py-2 border rounded w-full"
                type="text"
                name="CategoryNameEn"
                placeholder="Name English"
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
                // value={formData.rank}
                // onChange={handleInputChange}
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
                // onChange={handleInputChange}
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
                // value={formData.rank}
                // onChange={handleInputChange}
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
              <input type="checkbox" id="popular" name="popular" />
              <label className="w-24" for="popular">
                {" "}
                is popular{" "}
              </label>
            </div>
          </div>

          {/* Price & Old price */}
          <div className=" mt-4 items-center grid grid-cols-2  space-x-3 ">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Price :
              </label>
              <input
                name="rank"
                type="number"
                className="mt-1 px-3 py-2 border rounded w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Old price :
              </label>
              <div className="flex items-center">
                <input type="checkbox" id="offer" name="offer" />
                <label className="w-24" for="offer">
                  {" "}
                  is it offer{" "}
                </label>

                <input
                  name="rank"
                  type="number"
                  className="mt-1 px-3 py-2 border rounded w-full"
                  disabled=""
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
              className="mt-1 max-h-28 min-h-[50px] px-3 py-2 border rounded w-full"
            ></textarea>
            <textarea
              placeholder="English"
              className="mt-1 max-h-28 min-h-[50px] px-3 py-2 border rounded w-full"
            ></textarea>
          </div>
          {/*features*/}
          <div className="mt-4  col-span-2">
            <label className="block text-sm font-medium text-gray-600">
              features :-
            </label>
            <div className=" mb-2 flex">
              <div className="grow">
                <input
                  type="text"
                  name={`dateListInCardAr`}
                  className="mt-1 px-3 py-2 border rounded w-full"
                  placeholder="Arabic"
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      features: [
                        { ...prevData.features[0], ar: e.target.value },
                      ],
                    }))
                  }
                />
                {/* />{features[0].ar:e.target.value} */}
                <input
                  type="text"
                  name={`dateListInCardEn`}
                  className="mt-1 px-3 py-2 border rounded w-full"
                  placeholder="English"
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      features: [
                        { ...prevData.features[0], en: e.target.value },
                      ],
                    }))
                  }
                />
              </div>
              <button
                onClick={handleAddFeatures}
                type="button"
                className="mx-2 p-2 text-white font-semibold bg-blue-500 rounded-lg"
              >
                Add
              </button>
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
                placeholder="Arabic"
                className="mt-1 max-h-[600px] min-h-[150px] px-3 py-2 border rounded w-full"
              ></textarea>
              <textarea
                placeholder="English"
                className="mt-1 max-h-[600px] min-h-[150px] px-3 py-2 border rounded w-full"
              ></textarea>
            </div>
          </div>
          {/* Button  */}
          <div className="flex justify-center items-center">
            <button className="bg-lightGreen py-5 px-10 rounded-xl font-semibold text-white">
              Submit add plan
            </button>
          </div>
        </form>
        <card className="flex justify-center items-center">
          <PlanPricingCard data={data2} />
        </card>
      </div>
    </div>
  );
};

export default CreatePlansPricing;
