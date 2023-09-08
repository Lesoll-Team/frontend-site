import React from "react";
import Contact from "@/components/contact/Contact";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function contact() {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="">
      <Head>
        <title>{language ? "تواصل معنا" : "Contact Us"} </title>
        <meta
          name="description"
          content="تواصل معنا على صفحة اتصل بنا. اتصل بخبرائنا في مجال العقارات للاستفسارات وعروض العقارات والمساعدة. نحن هنا لمساعدتك في كل احتياجاتك في مجال العقارات. اتصل بنا اليوم!"
        />
      </Head>
      <Contact />
    </div>
  );
}
