const TitleCarPage = () => {
  return (
    <div className="bg-gray-100 w-full md:flex flex md:flex-row flex-col justify-between p-3">
      <h1 className=" text-white">Cars Page</h1>
      <div className="flex  justify-between">
        <button className="text-white text-xl md:hidden flex">الر��يسية</button>
        <button className="text-white text-xl">السيارات</button>
      </div>
    </div>
  );
};
export default TitleCarPage;
