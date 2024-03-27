import React from "react";
import Contact from "@/components/contact/Contact";
import Head from "next/head";
import { useSelector } from "react-redux";
export default function contact() {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="">
      <Head>
        <title>
          {language ? " اتصل بنا | ليسول " : "Contact us | Lesoll "}{" "}
        </title>
        <meta
          name="description"
          content={
            language
              ? "في حالة وجود اي استفسارات أو ملاحظات أو شكاوى يرجى التواصل معنا من خلال صفحة اتصل بنا. يسعدنا دائما استقبال استفساراتكم "
              : "It’s always a pleasure to receive your inquiries, recommendations and complaints through contact us page "
          }
        />
        <meta
          name="description"
          content="تواصل معنا على صفحة اتصل بنا. اتصل بخبرائنا في مجال العقارات للاستفسارات وعروض العقارات والمساعدة. نحن هنا لمساعدتك في كل احتياجاتك في مجال العقارات. اتصل بنا اليوم!"
        />
        <link rel="canonical" href={`https://lesoll.com/contact-us`} />
      </Head>
      <Contact />
    </div>
  );
}
