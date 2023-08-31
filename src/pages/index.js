import { SearchBar } from "@/Shared/search/SearchBar";
import Main from "@/components/homePage/Main";
import RecentPropertyBuy from "@/components/homePage/RecentPropertyBuy";
import RecentPropertyRent from "@/components/homePage/RecentPropertyRent";
// import PaginationPage from "../Shared/Pagination"
import Head from "next/head";
export default function Home({ propertyForRent, propertyForBuy }) {

  return (
    <main>
      <Head>
        <title>Lesoll</title>
      </Head>
      <Main />
      <SearchBar />
      <RecentPropertyRent propertiesRent={propertyForRent} />
      <RecentPropertyBuy propertiesBuy={propertyForBuy} />
    </main>
  );
}

export async function getStaticProps() {
  // const { page } = context.query; 
  const resBuy = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomesale?limit=6&page=${2}` 
  );
  const resRent = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomerent?limit=6&page=${2}` 
  );

  const dataRent = await resRent.json();
  const dataBuy = await resBuy.json();

  return {
    props: { propertyForRent: dataRent.result, propertyForBuy: dataBuy.result },
    revalidate: 1,
  };
}
