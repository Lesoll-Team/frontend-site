import React from 'react'
import PlanPricingCard from '../../model/cards/PlanPricingCard'
import { Button } from '@nextui-org/react';
import { PlusIcon } from '../../icon/PlusIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { PlusIcon } from "../icon/PlusIcon";

const PlansPricing = () => {
  const router=useRouter()
  const data = {
    categoryName: "premium",
    date: "month",
    rank: "galaxy",
    description:
      "price paid for above and beyond some basic or intrinsic value some basic or intrinsic value some basic or intrinsic value",
    price: "100",
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
    Offer: true,
    isAdmin: true,
    isPopular: true,
  };

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




  const stylesCss = {
    bodyCss: "",
    buttonCss: "",
    textCss: "",
    titleCss: "",
    headerCss: "",
    footerCss: "",
  };
  return (
    <div className=" min-h-screen">
      <div className=" flex justify-end mx-10">
        <Button
          endContent={<PlusIcon />}
          color="secondary"
          onPress={() => router.push("/dashboard/pricing/add")}
          className="my-10 font-semibold"
        >
          Create New Plan
        </Button>
      </div>
      <div className="  gap-10 flex flex-wrap justify-center  ">
        <PlanPricingCard data={data} />
        <PlanPricingCard data={data2} />
      </div>
    </div>
  );
}

export default PlansPricing
