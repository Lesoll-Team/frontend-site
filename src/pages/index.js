import { SearchBar } from "@/Shared/searchHome/SearchBar";
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
        <title>
          {language ? "ليسول | تسويق عقارى" : "Lesoll | RealEstate Hub"}
        </title>
        <meta
          name="description"
          content="ليسول هو موقع عقارات مصري متكامل يقدم خدمة التجربة الرقمية سواء لشراء أو بيع أو تأجير العقارات مع خدمة شاملة تقدم تفاصيل عن العقار من خلال خريطة تفاعلية"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="../../public/socialApperance.svg" />
        <meta
          property="og:description"
          content="ليسول هو موقع عقارات مصري متكامل يقدم خدمة التجربة الرقمية سواء لشراء أو بيع أو تأجير العقارات مع خدمة شاملة تقدم تفاصيل عن العقار من خلال خريطة تفاعلية"
        />
        <meta
          name="keywords"
          content="Real estate, Property listings, Homes for sale, Apartments for rent, Commercial properties, Realtor, Real estate agent, House hunting, Real estate market, Property management, Real estate investment, Rental properties, Property search, Buy a house, Sell a house, Foreclosures, Mortgage rates, Property valuation, Open house, Home inspection, عقارات, قائمة العقارات, منازل للبيع, شقق للإيجار, عقارات تجارية, وكيل عقاري, سوق العقارات, إدارة العقارات, استثمار العقارات, عقارات للإيجار, البحث عن عقار, شراء منزل, بيع منزل, العقارات المستصرفة, أسعار الرهن العقاري, تقييم العقار, منازل مفتوحة للزيارة, فحص المنزل"
        />
      </Head>
      <Main />
      <SearchBar />

      <RecentPropertyBuy propertiesBuy={propertyForBuy} />
      <RecentPropertyRent propertiesRent={propertyForRent} />
    </main>
  );
}

export async function getStaticProps() {
  const resBuy = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomesale?limit=6&page=${1}`,
    { credentials: "include" }
  );
  const resRent = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/gethomerent?limit=6&page=${1}`,
    { credentials: "include" }
  );
  const dataRent = await resRent.json();
  const dataBuy = await resBuy.json();
  return {
    props: { propertyForRent: dataRent.result, propertyForBuy: dataBuy.result },
    revalidate: 1,
  };
}
