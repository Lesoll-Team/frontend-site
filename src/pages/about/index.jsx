import About from "@/components/about/About";
import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function about() {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div>
      <Head>
        <title>{language ? "عنا" : "About Us"}</title>
        <meta
          name="description"
          content="بيسول هو موقع عقارات مصري متكامل يقدم خدمة التجربة الرقمية سواء لشراء أو بيع أو تأجير العقارات مع خدمة شاملة تقدم تفاصيل عن العقار من خلال خريطة تفاعلية"
        />
      </Head>
      <About />
    </div>
  );
}
