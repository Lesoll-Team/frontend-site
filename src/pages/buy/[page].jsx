import Head from "next/head";
import React from "react";
import RealtyCardBuy from "../../components/realtyCard/RealtyCardBuy.jsx";
import PaginationPage from "../../Shared/Pagination/Pagination.jsx";
import { useRouter } from "next/router";
import Link from "next/link";
export default function PropertyBuy({ propertyForBuy }) {
  // console.log(propertyForBuy);
  const router = useRouter();
  const currentPage = router.query.page;
  return (
    <div className="container mx-auto">
      <Head>
        <title>Lesoll Buy</title>
      </Head>
      <div>
        <h1 className="font-bold text-5xl pt-20  md:flex md:justify-start flex justify-center text-lightGreen">
          Properties for Buy
        </h1>
      </div>
      <div className="items-center py-5  grid  lg:grid-cols-3 md:grid-cols-2 gap-x-2 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12  ">
        {propertyForBuy.result.map((property) => (
          <Link key={property._id} href={`/propertyDetails/${property._id}`}>
            <RealtyCardBuy propertyDetails={property} />
          </Link>
        ))}
      </div>

      <div>
        <div className="py-2 px-2 flex justify-between items-center">
          <PaginationPage hrefRout={'buy'} currentPage={currentPage} totalPages={propertyForBuy.totalPages} />
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
