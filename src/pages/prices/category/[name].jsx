import PlanPricingCard from '@/components/dashboard/model/cards/PlanPricingCard';
import React from 'react'

const CategoryName = () => {
    const data2 = {
      categoryName: "categoryName",
      date: "month",
      rank: "galaxy",
      description:
        "description Card description Card description Card description Card description Card",
      price: 150,
      dateListInCard: ["3d image ","video " , "ay 7aga "],
      lastPrice: 0,
      Offer: false,
      isAdmin: false,
      isPopular: true,
      // pageContentText,
    };
  return (
    <div
      className="min-h-[90dvh] bg-gradient-to-tr from-blue-950 from-10%  via-blue-950 via-15% to-30% to-black text-white
    
    flex justify-between

    "
    >
      <h1 className="">welcome</h1>
      <div dir="ltr" className="mt-[12%] mx-10">
        <PlanPricingCard data={data2} />
      </div>
    </div>
  );
};

export default CategoryName;
