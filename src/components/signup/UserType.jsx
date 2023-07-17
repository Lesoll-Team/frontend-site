import React from "react";

const UserType = () => {
  return (
    <div className="w-1/2 mx-auto space-y-3">
      <button className="rounded-lg w-full h-20 mx-auto text-center border-2 border-lightGreen">
        individual
      </button>
      <button className="rounded-lg w-full h-20 mx-auto text-center border-2 border-lightGreen">
        Company
      </button>
    </div>
  );
};

export default UserType;
