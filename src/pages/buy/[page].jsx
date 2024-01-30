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
  const path = router.asPath;
  return (
    <div className="container mx-auto">
      <Head>
        <title>
          {language
            ? "عقارات للبيع في مصر | شقق للبيع في مصر | ليسول"
            : "Real estate for sale in Egypt | Apartments for sale in Egypt | Lesoll"}
        </title>
        <meta
          name="description"
          content={
            language
              ? "شقق للبيع في مصر بأسعار مناسبة لجميع الميزانيات. اختر شقتك من بين مجموعة واسعة من الشقق المتاحة، بما في ذلك شقق للبيع بالتقسيط وشقق دوبلكس. احجز شقتك الآن!"
              : "Apartments for sale in Egypt at prices suitable for all budgets. Choose your apartment from a full range of available apartments, including apartments for sale in installments and duplex apartments. Book your apartment now!"
          }
        />
        <link rel="canonical" href={`https://lesoll.com${path}`} />
      </Head>
      {/* <SearchBar pageSaleOption="For Sale" /> */}
      <div>
        <h1 className="font-bold text-5xl pt-20  md:flex md:justify-start flex justify-center text-lightGreen">
          {language ? "عقارات للبيع فى مصر" : " Properties for Buy in Egypt"}
        </h1>
      </div>
      <div
        className=" 
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-x-5 gap-y-3 md:gap-y-16 mt-5 md:mt-12 "
        //flex flex-wrap items-center   justify-center justify-items-center
      >
        {propertyForBuy
          ? propertyForBuy.result.map((property) => (
              <RealtyCardBuy key={property._id} propertyDetails={property} />
            ))
          : "no property found"}
      </div>

      <div>
        <div className="py-2 px-2 flex  justify-center items-center">
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
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomesale?limit=21&page=${page}`
  );
  const dataBuy = await resBuy.json();
  return {
    props: { propertyForBuy: dataBuy, revalidate: 1 },
  };
}
