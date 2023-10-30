import About from "@/components/about/About";
import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function about() {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div>
      <Head>
        <title>
          {language ? "اعرف عن ليسول | ليسول  " : "About Lesoll | lesoll "}
        </title>
        <meta
          name="description"
          content={
            language
              ? "ليسول تقدم خدمة البحث الرقمي بتجربة مختلفة لتسهيل شراء، بيع وتأجير العقارات في مصر، مع خدمة شاملة تسهل عليك تحقيق الصفقة في أي مكان في مصر سواء مالك أو مشتري "
              : "Lesoll offers customers an online search to buy, sell, or rent properties in Egypt, helping owners and buyers discover upcoming real estate deals across Egypt "
          }
        />
      </Head>
      <About />
    </div>
  );
}
