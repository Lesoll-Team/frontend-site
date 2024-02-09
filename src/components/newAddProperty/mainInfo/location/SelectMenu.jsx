const SelectMenu = ({ datalist, onSelect }) => {
  return (
    <div
      className={`absolute fade-in border z-10    mt-[1px] w-full lg:w-[50%] bg-white duration-200 drop-shadow-xl  overflow-y-auto rounded-md max-h-[300px] ${
        language ? "left-0" : "right-0"
      }`}
    >
      {filteredGov.length > 0 ? (
        filteredGov.map((gov) => (
          <div key={gov._id}>
            <button
              onClick={() => onGovSelect(gov)}
              type="button"
              className="text-lg w-full text-center font-semibold text-darkGray py-2 px-3 cursor-pointer active:ring-none   duration-200 focus:outline-none focus:bg-slate-100  hover:bg-slate-100 "
            >
              {language ? gov.governorate_name_ar : gov.governorate_name_en}
            </button>
            <hr className="w-[95%] mx-auto" />
          </div>
        ))
      ) : (
        <div className="w-full grid place-content-center min-h-[150px]">
          <p>no gov</p>
        </div>
      )}
    </div>
  );
};
export default SelectMenu;
