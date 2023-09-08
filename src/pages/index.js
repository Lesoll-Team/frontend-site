import { SearchBar } from "@/Shared/search/SearchBar";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/components/homePage/Main"));

const RecentPropertyBuy = dynamic(() =>
  import("@/components/homePage/RecentPropertyBuy")
);
const RecentPropertyRent = dynamic(() =>
  import("@/components/homePage/RecentPropertyRent")
);
import { useSelector } from "react-redux";

import Head from "next/head";
export default function Home({ propertyForRent, propertyForBuy }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <main>
      <Head>
        {/* <title>
          {language ? "ليسول | تسويق عقارى" : "Lesoll | RealEstate Hub"}
        </title> */}
      </Head>
      <Main />
      <SearchBar />

      <RecentPropertyRent propertiesRent={propertyForRent} />
      <RecentPropertyBuy propertiesBuy={propertyForBuy} />
    </main>
  );
}

export async function getStaticProps() {
  const resBuy = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomesale?limit=6&page=${1}`
  );
  const resRent = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomerent?limit=6&page=${1}`
  );
  const dataRent = await resRent.json();
  const dataBuy = await resBuy.json();
  return {
    props: { propertyForRent: dataRent.result, propertyForBuy: dataBuy.result },
    revalidate: 1,
  };
}
