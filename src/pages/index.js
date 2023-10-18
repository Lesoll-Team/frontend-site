import { SearchBar } from "@/Shared/search/SearchBarHome";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/components/homePage/Main"));

const RecentPropertyBuy = dynamic(() =>
  import("@/components/homePage/RecentPropertyBuy")
);
const RecentPropertyRent = dynamic(() =>
  import("@/components/homePage/RecentPropertyRent")
);
const RecentPropertyForView = dynamic(() =>
  import("@/components/homePage/RecentPropertyForView")
);
import { useSelector } from "react-redux";

import Head from "next/head";
import BestLinksInHome from "@/components/linksInHome/BestLinksInHome";
export default function Home({
  propertyForRent,
  propertyForBuy,
  propertyForView,
  bestSearch,
}) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  // console.log(bestSearch);
  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://www.lesoll.com/" />

        <title>
          {language
            ? " ليسول للعقارات فى مصر| بيع - شراء - إيجار العقارات "
            : "Lesoll Real Estate EGY| Buy - Sell - Rent Properties"}
        </title>

        <meta
          name="description"
          content={
            language
              ? "موقع عقارات مصري متكامل. يساعدك في البحث عن العقار المناسب للبيع أو الإيجار شقة او فيلا او بيت وغيره من العقارات في القاهرة، الجيزة، الاسكندرية وجميع انحاء مصر "
              : "Lesoll is an Egyptian online real estate marketplace. Find Apartments, Villas, Houses, and more…for rent and sale in Cairo, Giza, Alexandria, and all over Egypt "
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:image" content="/socialApperance.png" />
        <meta
          property="og:description"
          content="موقع عقارات مصري متكامل. يساعدك في البحث عن العقار المناسب للبيع أو الإيجار شقة او فيلا او بيت وغيره من العقارات في القاهرة، الجيزة، الاسكندرية وجميع انحاء مصر"
        />
        <meta
          name="keywords"
          content="Real estate, Property listings, Homes for sale, Apartments for rent, Commercial properties, Realtor, Real estate agent, House hunting, Real estate market, Property management, Real estate investment, Rental properties, Property search, Buy a house, Sell a house, Foreclosures, Mortgage rates, Property valuation, Open house, Home inspection, عقارات, قائمة العقارات, منازل للبيع, شقق للإيجار, عقارات تجارية, وكيل عقاري, سوق العقارات, إدارة العقارات, استثمار العقارات, عقارات للإيجار, البحث عن عقار, شراء منزل, بيع منزل, العقارات المستصرفة, أسعار الرهن العقاري, تقييم العقار, منازل مفتوحة للزيارة, فحص المنزل"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            language
              ? " ليسول للعقارات فى مصر| بيع - شراء - إيجار العقارات "
              : "Lesoll Real Estate EGY| Buy - Sell - Rent Properties"
          }
        />
        <meta property="og:site_name" content="Lesoll" />
        <meta property="og:url" content="https://www.lesoll.com/" />
      </Head>

      <Main />
      <SearchBar />

      <RecentPropertyBuy propertiesBuy={propertyForBuy} />
      <RecentPropertyRent propertiesRent={propertyForRent} />
      <RecentPropertyForView propertyOfView={propertyForView} />
      <BestLinksInHome
        PopularSearches={bestSearch.POPULAR_SEARCHES}
        MostArea={bestSearch.Most_Area}
        MostGovernorate={bestSearch.Most_Governorate}
      />
    </main>
  );
}

export async function getStaticProps() {
  const resBuy = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomesale?limit=8&page=${1}`
  );
  const resRent = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomerent?limit=8&page=${1}`
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/mostview?limit=8&page=${1}`
  );

  const linkHome = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/linkshome`
  );

  const dataRent = await resRent.json();
  const dataBuy = await resBuy.json();
  const data = await res.json();
  const linkInHome = await linkHome.json();

  return {
    props: {
      propertyForRent: dataRent.result,
      propertyForBuy: dataBuy.result,
      propertyForView: data.result,
      bestSearch: linkInHome,
    },
    revalidate: 1,
  };
}
