import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import { fetchUserData } from "@/redux-store/features/globalState";
import { useDispatch, useSelector } from "react-redux";

import ScrollToTopButton from "./ScrollToTopButton";
import { useEffect } from "react";
import { getUserOffline } from "@/utils/userAPI";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const userKey = parseInt(
    Math.ceil(Math.random() * Date.now())
      .toPrecision(16)
      .toString()
      .replace(".", "")
  );
  if (typeof window !== "undefined") {
    // This code will only execute in a browser environment
    if (!localStorage.getItem("local_storage_device_id")) {
      localStorage.setItem("local_storage_device_id", userKey);
    }
  }
  // if (!localStorage.getItem("local_storage_device_id")) {
  //   JSON.stringify(localStorage.setItem("local_storage_device_id", userKey));
  //   // JSON.stringify(localStorage.setItem(`prompt_visit_${Math.floor(Math.random() * 10001) }`, new Date()))
  // }
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
    getUserOffline({ url: `${router.asPath}` });
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
