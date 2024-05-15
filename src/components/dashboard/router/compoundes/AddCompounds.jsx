import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import AddCompoundForm from "./AddCompoundForm";

const AddCompounds = () => {
  const [searchInput, setSearchInput] = useState("");
  const compounds = useSelector((state) => state.compounds.data);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const filteredCompounds = useMemo(() => {
    if (!searchInput) {
      // If search input is empty, return all compounds
      return compounds;
    } else if (typeof searchInput === "string" && searchInput.trim() !== "") {
      // If search input is not empty string, filter compounds
      return compounds.filter(
        (item) =>
          item.CompoundsAR.includes(searchInput) ||
          item.CompoundsEN.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else {
      // If search input is not a string or empty, return all compounds
      return compounds;
    }
  }, [compounds, searchInput]);

  return (
    <div className="px-3 md:px-10 py-7">
      <div className="flex flex-col gap-4">
        <div>
          <h1>
            {language ? "الكومبوندات" : "Compoundes"}{" "}
            <span className="text-gray-500 text-xl">
              ({compounds && compounds.length})
            </span>
          </h1>
        </div>
        <input
          placeholder={
            language ? "ابحث باسم الكومباوند" : "Search by compound name"
          }
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          type="text"
          className="border-b border-gray-700 max-w-[400px] p-2 focus:outline-none  "
        />
        <AddCompoundForm />
        {filteredCompounds &&
          filteredCompounds.map((item) => (
            <div
              className="border-2 py-3 px-4 flex gap-3 items-center"
              key={item._id}
            >
              <div className=" flex gap-3 sm:items-center sm:flex-row flex-col">
                <p> {item.CompoundsAR} </p>
                <p className="sm:block hidden">|</p>
                <p> {item.CompoundsEN} </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default AddCompounds;
