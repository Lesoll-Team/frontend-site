import styles from "../../styles/Pagination.module.css";
import { useSelector } from "react-redux";
import { memo, useEffect, useRef, useState } from "react";
import { useSendFilterSearch } from "@/components/category/shared/FilterHooks";
import Link from "next/link";
import { Ring } from "@uiball/loaders";
import { useRouter } from "next/router";
const PaginationPage = ({ visible, setVisible }) => {
  const [newUrl, setNewUrl] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const linkRef = useRef();
  const {
    pageNumber,
    saleOption,
    categoryType,
    unitTypes,
    locationGovernorate,
    locationRegion,
    priceFrom,
    priceTo,
    numBathrooms,
    numBedrooms,
    areaFrom,
    areaTo,
    finishedOption,
    paymentType,
    sort,
    propFinancing,
    searchKeyword,
  } = useSelector((state) => state.Category);
  console.log(newUrl);
  const route = useSendFilterSearch({
    filterInput: {
      saleOptions: saleOption,
      category: categoryType,
      unitType: unitTypes,
      governorate: locationGovernorate,
      region: locationRegion,
    },
    queryInput: {
      priceFrom,
      page: parseInt(pageNumber) + 1,
      priceTo,
      numBathrooms,
      numBedrooms,
      areaFrom,
      areaTo,
      finishedOption: finishedOption,
      paymentType,
      sort: sort,
      mortgage: propFinancing,
      keyword: searchKeyword,
    },
  });
  const handleShowMore = () => {
    // setNewUrl(route);
    console.log("function");
    linkRef.current.click();
    // console.log(route);
  };
  useEffect(() => {
    if (visible) {
      handleShowMore();
      setVisible(false);
      setLoading(true);
    }
  }, [visible]);
  console.log(visible);
  return (
    <>
      <Link
        href={route || "/properties/sale/residential/penthouse/search?page=100"}
        scroll={false}
        hidden
        ref={linkRef}
        replace
      ></Link>

      {loading && (
        <div className="flex items-center justify-center">
          <Ring color="#000" size={40} />
        </div>
      )}
    </>
  );
};

export default memo(PaginationPage);
