import { Ring } from "@uiball/loaders";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="min-h-[70dvh] flex items-center justify-center">
      <Ring size={40} />
    </div>
  );
};

export default LoadingScreen;
