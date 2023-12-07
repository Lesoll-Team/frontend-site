import { SearchBarHome } from "@/Shared/search/SearchBarHome";
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

  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://lesoll.com" />

        <title>
          {language
            ? "عقارات في مصر| شقق وأراضي للبيع والايجار في مصر | ليسول"
            : "properties in Egypt| Apartments and lands for sale and rent in Egypt | Lesoll"}
        </title>

        <meta
          name="description"
          content="احصل على أفضل شقق للبيع في مصر من خلال ليسول بأقل الأسعار، شقق فاخرة للايجار، شقق تمليك، شقق دوبلكس، اتصل بنا واكتشف مجموعة متنوعة من الشقق المتاحة لدينا. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:image" content="/socialApperance.png" />
        <meta
          property="og:description"
          content="احصل على أفضل شقق للبيع في مصر من خلال ليسول بأقل الأسعار، شقق فاخرة للايجار، شقق تمليك، شقق دوبلكس، اتصل بنا واكتشف مجموعة متنوعة من الشقق المتاحة لدينا."
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
              ? "عقارات في مصر| شقق وأراضي للبيع والايجار في مصر | ليسول"
              : "properties in Egypt| Apartments and lands for sale and rent in Egypt | Lesoll"
          }
        />
        <meta property="og:site_name" content="Lesoll" />
        <meta property="og:url" content="https://lesoll.com" />
      </Head>

      <Main />
      {/* <div className="container mx-auto my-8 text-center"> */}
      {/* <h1 className="text-4xl font-bold mb-4">Search Dropdown Filter</h1> */}
      {/* <SearchDropdown /> */}
      <SearchBarHome />
      {/**onSelect={handleSelect} */}
      {/* </div> */}

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
