const ProfileCardSkeleton = () => {
  return (
    <div className="    h-auto   block  bg-none  animate-pulse">
      <div className="relative">
        <div className="w-[200px] h-[155px]  rounded-lg bg-gray-300"></div>
        <div className="absolute top-2 left-2 bg-gray-300 w-16 h-5 rounded"></div>
      </div>
    </div>
  );
};
export default ProfileCardSkeleton;
