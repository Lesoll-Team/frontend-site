import { useSelector } from "react-redux";
import { memo, useEffect, useRef, useState } from "react";
import { useSendFilterSearch } from "@/components/category/shared/FilterHooks";
import Link from "next/link";
import { Ring } from "@uiball/loaders";

const PaginationPage = ({ visible, setVisible }) => {
  const [loading, setLoading] = useState(false);
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
    linkRef.current.click();
  };

  useEffect(() => {
    if (visible) {
      handleShowMore();
      setVisible(false);
      setLoading(true);
    }
  }, [visible, setVisible]);

  return (
    <>
      <Link
        href={route || "/"}
        scroll={false}
        hidden
        ref={linkRef}
        replace
      ></Link>

      {loading && (
        <div className="flex items-center justify-center">
          <Ring color="#309da0" size={40} />
        </div>
      )}
    </>
  );
};

export default memo(PaginationPage);
