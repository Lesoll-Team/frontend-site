import { DotPulse } from "@uiball/loaders";

const PageLoading = () => {
  return (
    <div className="w-full h-[90dvh] flex items-center justify-center">
      <DotPulse size={60} color="#309da0" />
    </div>
  );
};

export default PageLoading;
