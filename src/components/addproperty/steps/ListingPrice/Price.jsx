const Price = ({ price, setPrice }) => {
  return (
    <div className="">
      <div>
        <h3 className="text-xl text-darkGreen font-semibold mb-2">Price</h3>
        <div className="relative">
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className=" w-full text-lg font-medium text-darkGreen focus:outline-none placeholder:text-darkGreen placeholder:opacity-60   border-lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
            placeholder="Price"
            type="number"
          />
          <p className="absolute top-[17px] text-darkGreen font-extrabold right-0 pl-1 pr-4 bg-white">
            EGP
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price;
