import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import { fetchUserData } from "@/redux-store/features/globalState";
import { useDispatch, useSelector } from "react-redux";

import ScrollToTopButton from "./ScrollToTopButton";
import { useEffect} from "react";


export default function Layout({ children }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch, language, children]);

  return (
    <div
      style={{
        minHeight: "100dvh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
      className={`globalBody bg-gradient`}
    >
      <Head>
        <title>
          {language
            ? "بيع - شراء - إيجار العقارات فى مصر | ليسول"
            : "Lesoll Real Estate Hup Eg | Buy - Sell - Rent Properties"}
        </title>
        <meta
          name="description"
          content="موقع عقارات مصري متكامل. يساعدك في البحث عن العقار المناسب للبيع أو الإيجار شقة او فيلا او بيت وغيره من العقارات في القاهرة، الجيزة، الاسكندرية وجميع انحاء مصر"
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
      <Navbar />
      <main dir={`${language ? "rtl" : ""}`}>{children}</main>
      <Footer dir={`${language ? "rtl" : ""}`} />
      <ScrollToTopButton />
    </div>
  );
}
