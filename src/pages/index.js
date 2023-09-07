import { SearchBar } from "@/Shared/search/SearchBar";
import dynamic from "next/dynamic";
const Main = dynamic(() => import("@/components/homePage/Main"));
const RecentPropertyBuy = dynamic(() =>
  import("@/components/homePage/RecentPropertyBuy")
);
const RecentPropertyRent = dynamic(() =>
  import("@/components/homePage/RecentPropertyRent")
);
// import Main from "@/components/homePage/Main";
// import RecentPropertyBuy from "@/components/homePage/RecentPropertyBuy";
// import RecentPropertyRent from "@/components/homePage/RecentPropertyRent";
// import PaginationPage from "../Shared/Pagination"
import Head from "next/head";
export default function Home({ propertyForRent, propertyForBuy }) {
  // console.log(propertyForBuy);
  // console.log(propertyForRent);

  return (
    <main>
      <Head>
        <title>Lesoll</title>
      </Head>
      <Main />
      <SearchBar />
      {/* <App/> */}
      <RecentPropertyRent propertiesRent={propertyForRent} />
      <RecentPropertyBuy propertiesBuy={propertyForBuy} />
    </main>
  );
}

export async function getStaticProps() {
  // const { page } = context.query;
  const resBuy = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomesale?limit=6&page=${1}`
  );
  // console.log(resBuy);
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
