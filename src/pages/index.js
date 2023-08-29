import Main from "@/components/homePage/Main";
import RecentPropertyBuy from "@/components/homePage/RecentPropertyBuy";
import RecentRealties from "@/components/homePage/RecentPropertyRent";
import PaginationPage from "../Shared/Pagination"
import Head from "next/head";
export default function Home({ propertyForRent, propertyForBuy }) {
  console.log("propertyForRent",propertyForRent);
  console.log("propertyForBuy",propertyForBuy);
  return (
    <main>
      <Head>
        <title>Lesoll</title>
      </Head>
      <Main />
      <RecentRealties properties={propertyForRent} />
      {/* <div className="bg-red-200 w-40 h-11"> */}
      {/* <PaginationPage/> */}

      {/* </div> */}
      <RecentPropertyBuy properties={propertyForBuy} />
    </main>
  );
}

export async function getStaticProps() {
  // const { page } = context.query;
  const resRent = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomerent?limit=6&page=${2}` //limit|| page||
  );
  const resBuy = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomesale?limit=6&page=${2}` //limit|| page||
  );
  const dataRent = await resRent.json();
  const dataBuy = await resBuy.json();

  return {
    props: { propertyForRent: dataRent.result, propertyForBuy: dataBuy.result },
    revalidate: 1,
  };
}
