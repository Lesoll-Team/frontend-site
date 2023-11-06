import React from "react";

const SubscriptionCard = ({ active }) => {
  return (
    <div className="w-full border-2 p-5 flex flex-col gap-2 rounded-lg bg-white shadow-lg">
      <h2 className="text-xl">بريميوم</h2>
      <p className="text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi facere
        fugit a, quia tempore necessitatibus illo reiciendis sequi provident.
      </p>
      <div className="flex items-center justify-between">
        <p className="text-tiny">يتنهى فى 2023/2/5</p>
        {!active && (
          <button className="border-2 border-lightOrange px-4 py-[3px] font-semibold rounded-full hover:text-white hover:bg-lightOrange duration-150">
            تجديد
          </button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCard;
