import Head from "next/head";
import React from "react";
import RealtyCardBuy from "../../components/realtyCard/RealtyCard.jsx";
import PaginationPage from "../../Shared/Pagination/Pagination.jsx";
import { useRouter } from "next/router";
// import Link from "next/link";
import { SearchBar } from "@/Shared/search/SearchBar.jsx";
import { useSelector } from "react-redux";
export default function PropertyBuy({ propertyForBuy }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const currentPage = router.query.page;
  return (
    <div className="container mx-auto">
      <Head>
        <title>{language ? "عقارات للبيع" : "properties for sale"}</title>

        <meta
          name="description"
          content="استكشف مجموعة واسعة من العقارات المتاحة للبيع على منصتنا للعقارات. ابحث عن منازل وشقق وعقارات تجارية للبيع في المواقع الرئيسية. ابحث عن العقار الذي تحلم به للبيع اليوم!"
        />
      </Head>
      <SearchBar />

      <div>
        <h2 className="font-bold text-5xl pt-20  md:flex md:justify-start flex justify-center text-lightGreen">
          {language ? "عقارات للبيع" : " Properties for Buy"}
        </h2>
      </div>
      <div className="items-center py-5  grid  lg:grid-cols-3 md:grid-cols-2 gap-x-2 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12  ">
        {propertyForBuy
          ? propertyForBuy.result.map((property) => (
              <RealtyCardBuy key={property._id} propertyDetails={property} />
            ))
          : "no property found"}
        {/* <Link  href={`/propertyDetails/${property._id}`}>   </Link> */}
      </div>

      <div>
        <div className="py-2 px-2 flex justify-between items-center">
          <PaginationPage
            hrefRout={"buy"}
            currentPage={currentPage}
            totalPages={propertyForBuy.totalPages}
          />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { page } = context.query;
  const resBuy = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomesale?limit=9&page=${page}`
  );
  const dataBuy = await resBuy.json();
  return {
    props: { propertyForBuy: dataBuy },
  };
}