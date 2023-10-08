import { SearchBar } from "@/Shared/searchHome/SearchBar";
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
export default function Home({
  propertyForRent,
  propertyForBuy,
  propertyForView,
}) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <main>
      <Head>
        <title>
          {language
            ? "بيع - شراء - إيجار العقارات فى مصر | ليسول"
            : "Lesoll Real Estate Hup Eg | Buy - Sell - Rent Properties"}
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
        <meta property="og:image" content="../../public/socialApperance.svg" />
        <meta
          property="og:description"
          content="موقع عقارات مصري متكامل. يساعدك في البحث عن العقار المناسب للبيع أو الإيجار شقة او فيلا او بيت وغيره من العقارات في القاهرة، الجيزة، الاسكندرية وجميع انحاء مصر"
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
      <RecentPropertyForView propertyOfView={propertyForView} />
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

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/mostview?limit=6&page=${1}`
  );

  const dataRent = await resRent.json();
  const dataBuy = await resBuy.json();
  const data = await res.json();

  return {
    props: {
      propertyForRent: dataRent.result,
      propertyForBuy: dataBuy.result,
      propertyForView: data.result,
    },
    revalidate: 1,
  };
}
