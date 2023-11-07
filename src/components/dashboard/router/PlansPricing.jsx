import React from 'react'
import PlanPricingCard from '../model/cards/PlanPricingCard'
import { Button } from '@nextui-org/react';
import { PlusIcon } from '../icon/PlusIcon';
// import { PlusIcon } from "../icon/PlusIcon";

const PlansPricing = () => {
  return (
    <div>
      <div className=" flex justify-end mx-10">
        <Button
          endContent={<PlusIcon />}
          color="secondary"
          className="my-10 font-semibold"
        >
          Create New Plan
        </Button>
      </div>
      <div className="  gap-10 flex flex-wrap justify-center w-full">
        <PlanPricingCard
          stylesCss={{
            body: "",
            button: "",
            text: "",
            text_title: "",
            header: "",
            footer: "",
          }}
        />
        <PlanPricingCard
          stylesCss={{
            body: "",
            button: "",
            header: "",
            footer: "",
          }}
        />
        <PlanPricingCard
          stylesCss={{
            body: "",
            button: "",
            header: "",
            footer: "",
          }}
        />
        <PlanPricingCard
          stylesCss={{
            body: "",
            button: "",
            header: "",
            footer: "",
          }}
        />
      </div>
    </div>
  );
}

export default PlansPricing
