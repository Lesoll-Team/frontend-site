import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import Link from "next/link";
import React, { memo } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
const Breadcrumb = ({ dataObjectFromURL, queries }) => {
  const { category, saleOptions, unitType, region, governorate } =
    dataObjectFromURL;
  const language = useSelector((state) => state.GlobalState.languageIs);
  const queryString = Object.keys(queries)
    .map((key) => `${key}=${encodeURIComponent(queries[key])}`)
    .join("&");
  const crumbs = [
    { label: <MdHome />, path: "/" },
    {
      label: saleOptions,
      path: `/properties/${saleOptions}/search?${queryString}`,
    },
    {
      label: category,
      path: `/properties/${saleOptions ? saleOptions + "/" : ""}${category}/search?${queryString}`,
    },
    {
      label: unitType,
      path: `/properties/${saleOptions ? saleOptions + "/" : ""}${category ? category + "/" : ""}${unitType}/search?${queryString}`,
    },
    {
      label: governorate,
      path: `/properties/${saleOptions ? saleOptions + "/" : ""}${category ? category + "/" : ""}${unitType ? unitType + "/" : ""}${governorate}/search?${queryString}`,
    },
    {
      label: region,
      path: `/properties/${saleOptions ? saleOptions + "/" : ""}${category ? category + "/" : ""}${unitType ? unitType + "/" : ""}${governorate ? governorate + "/" : ""}${region}/search?${queryString}`,
    },
  ].filter((crumb) => crumb.label);
  const dispatch = useDispatch();

  return (
    <div className="items-center flex gap-x-1">
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <Link
            scroll={false}
            href={crumb.path}
            onClick={() =>
              dispatch(
                updateAllStates({
                  searchData: null,
                }),
              )
            }
          >
            <div
              className={` ${crumb.path == "/" ? "text-lightGreen text-xl" : "text-gray1 sm-text hover:underline hover:text-gray2"}  `}
            >
              {crumb.label}
            </div>
          </Link>
          {index < crumbs.length - 1 && (
            <IoIosArrowBack
              className={`sm-text text-[#cccccc] ${!language && "rotate-180"}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default memo(Breadcrumb);
