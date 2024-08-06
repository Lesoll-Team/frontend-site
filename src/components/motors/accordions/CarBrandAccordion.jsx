import { useState, useEffect, useCallback } from "react";
import Accordion from "./Accordion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import Image from "next/image";
import { fetchBrandNameData, getModelName } from "@/utils/cars/searchCarsAPI";
import { MdOutlineSearch } from "react-icons/md";
import { Ring } from "@uiball/loaders";
import styles from "../../../styles/carBrandAccordion.module.css";

const CarBrandAccordion = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [brandNumber, setBrandNumber] = useState("");
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchBrandTerm, setSearchBrandTerm] = useState("");
  const [searchModelTerm, setSearchModelTerm] = useState("");

  const [maxPage, setMaxPage] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    setBrands([]);
    setSelectedBrands([]);
    setBrandNumber("");
    setPage(1);
  }, [searchBrandTerm]);

  const fetchBrands = useCallback(async () => {
    // setLoadingBrands(true);
    let result;
    try {
      const response = await fetchBrandNameData({
        brand: searchBrandTerm.split(" ").join("-"),
        page,
      });
      setMaxPage(response.totalpage);
      result = response.result;
      setBrands((prevBrands) => [...prevBrands, ...result]);
    } catch (error) {
      console.error("There was an error fetching the brands data!", error);
    }
    // finally {
    //   setLoadingBrands(false); // End loading brands
    // }
  }, [searchBrandTerm, page]);

  const fetchModel = useCallback(async () => {
    if (!brandNumber) return;
    setLoading(true); // Start loading
    try {
      const response = await getModelName({
        number: brandNumber,
        model: searchModelTerm.split(" ").join("-"),
      });
      setModels(response);
    } catch (error) {
      console.error("There was an error fetching the models data!", error);
    } finally {
      setLoading(false); // End loading
    }
  }, [brandNumber, searchModelTerm]);

  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  useEffect(() => {
    fetchModel();
  }, [fetchModel]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 10 && maxPage >= page) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleBrandSelect = (brand) => {
    if (brand.id === selectedBrand) {
      setSelectedBrand("");
      setBrandNumber("");
    } else {
      setSelectedBrand(brand.id);
      setBrandNumber(brand.carId);
    }
    setSelectedBrands((prevSelected) => {
      if (prevSelected.some((id) => id === brand.id)) {
        return prevSelected;
      } else {
        return [...prevSelected, brand.id];
      }
    });
  };

  return (
    <Accordion title={language ? "الماركة" : "Brands"} isBrandAccordion>
      <div className="w-full  flex justify-center ">
        <div className="border-1.5 p-1 px-1.5 rounded-md  w-10/12 flex gap-1 items-center">
          <MdOutlineSearch className="text-grayText text-[18px]" />

          <input
            type="text"
            onChange={(e) => setSearchBrandTerm(e.target.value)}
            placeholder={language ? "ابحث عن ماركة السيارة" : "search by brand"}
            className="w-full outline-none"
          />
        </div>
      </div>

      <div className={styles.scrollContainer} onScroll={handleScroll}>
        {brands.map((brand, index) => (
          <div key={brand.id}>
            <button
              className="flex w-full items-center justify-between cursor-pointer p-3 hover:bg-gray-100"
              onClick={() => handleBrandSelect(brand)}
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <input
                    name="brand-name"
                    type="checkbox"
                    className="mr-2 accent-lightGreen"
                    checked={selectedBrands.some((id) => id === brand.id)}
                    onChange={() => {
                      if (selectedBrands.includes(brand.id)) {
                        setSelectedBrands(
                          selectedBrands.filter((id) => id !== brand.id),
                        );
                      } else {
                        setSelectedBrands([...selectedBrands, brand.id]);
                      }
                    }}
                  />
                </div>

                <p>{index}</p>

                <Image
                  src={brand.image}
                  alt={`${brand.en} icon`}
                  width={30}
                  height={30}
                  className="w-auto h-auto"
                  loading="lazy"
                />
                <span>{language ? brand.ar : brand.en}</span>
                <span>({brand.adCount})</span>
              </div>

              <span className="transform transition-transform">
                {selectedBrand === brand.id ? (
                  <IoIosArrowUp className="text-lightGreen" />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </button>
            {selectedBrand === brand.id && brandNumber === brand.carId && (
              <div className="px-10">
                <div className="border-1.5  p-0.5 px-1 rounded-md my-1 w-full flex gap-1 items-center">
                  <MdOutlineSearch className="text-grayText text-[18px]" />

                  <input
                    type="text"
                    onChange={(e) => setSearchModelTerm(e.target.value)}
                    placeholder={
                      language
                        ? "ابحث عن موديل السيارة"
                        : "search by model name"
                    }
                    className="w-full outline-none"
                  />
                </div>

                <div
                  className={`${styles.customScroll} transition-all duration-500 ease-in-out ${
                    selectedBrand === brand.id && brandNumber === brand.carId
                      ? "max-h-[150px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className=" ">
                    {loading ? (
                      <div className="flex justify-center items-center  h-[145px]">
                        <Ring size={40} color="#d6d6d6" />
                      </div>
                    ) : (
                      models.map((item) => (
                        <label
                          key={item.id}
                          className="p-1 gap-1 cursor-pointer hover:bg-gray-100 flex items-center"
                        >
                          <input type="checkbox" className="mr-2" />
                          <span>{language ? item.ar : item.en}</span>
                        </label>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Accordion>
  );
};

export default CarBrandAccordion;
