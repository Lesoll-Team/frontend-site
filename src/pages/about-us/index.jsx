import About from "@/components/about/About";
import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function about() {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
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
        <link rel="canonical" href="https://lesoll.com/about-us" />
      </Head>
      <main className="container mx-auto py-10 space-y-6 md:space-y-14 md:mb-20">
        <header className="flex items-center justify-center relative">
          <Image
            width={1240}
            height={401}
            src={"/about.png"}
            className="w-full "
          />
          <h1 className="text-base md:text-5xl font-bold absolute text-white">
            {language ? "عن ليسول" : "About Lesoll"}
          </h1>
        </header>
        <section className="space-y-2 md:space-y-6">
          <h3 className="text-base md:text-3xl font-bold">
            {language ? "نبذة عنا" : "About Us"}
          </h3>
          <p className="text-sm md:text-2xl text-darkGray">
            {language
              ? "ليسول هي سوق مفتوح لعرض العقارات عبر الانترنت تأسست في 2022. توفر ليسول تجربة رقمية سلسة لشراء و تأجير و بيع العقارات في مصر. نحن في ليسول ملتزمون بإعادة تشكيل مفهوم العقارات في مصر، من خلال منصة مبتكرة وسهلة الاستخدام للتعاملات العقارية. كما خصصت ليسول جزءًا من المنصة لفرص الاستثمار، لتكون مركزًا جذابًا لأصحاب العقارات والمستثمرين."
              : "ليسول هي سوق مفتوح لعرض العقارات عبر الانترنت تأسست في 2022. توفر ليسول تجربة رقمية سلسة لشراء و تأجير و بيع العقارات في مصر. نحن في ليسول ملتزمون بإعادة تشكيل مفهوم العقارات في مصر، من خلال منصة مبتكرة وسهلة الاستخدام للتعاملات العقارية. كما خصصت ليسول جزءًا من المنصة لفرص الاستثمار، لتكون مركزًا جذابًا لأصحاب العقارات والمستثمرين."}
          </p>
        </section>
        <section className="space-y-2 md:space-y-6">
          <h3 className="text-base md:text-3xl font-bold">
            {language ? "مهمتنا" : "Our Mission"}
          </h3>
          <p className="text-sm md:text-2xl text-darkGray">
            {language
              ? "مهمتنا في ليسول هي تبسيط وتحسين تجربة العقارات في مصر. نحن نسعى لجعل عملية الشراء والبيع والإيجار أكثر يسرًا وسهولة من خلال منصتنا المبتكرة. نهدف إلى تمكين الأفراد من خلال توفير منصة سهلة الاستخدام توفر مجموعة واسعة من خيارات العقارات. بفضل خدماتنا الشاملة، نعمل على ربط أصحاب العقارات والمشترين والمستأجرين معًا، مع زيادة الشفافية والراحة وبناء الثقة في سوق العقارات."
              : "مهمتنا في ليسول هي تبسيط وتحسين تجربة العقارات في مصر. نحن نسعى لجعل عملية الشراء والبيع والإيجار أكثر يسرًا وسهولة من خلال منصتنا المبتكرة. نهدف إلى تمكين الأفراد من خلال توفير منصة سهلة الاستخدام توفر مجموعة واسعة من خيارات العقارات. بفضل خدماتنا الشاملة، نعمل على ربط أصحاب العقارات والمشترين والمستأجرين معًا، مع زيادة الشفافية والراحة وبناء الثقة في سوق العقارات."}
          </p>
        </section>
        <section className="space-y-2 md:space-y-6">
          <h3 className="text-base md:text-3xl font-bold">
            {language ? "رؤيتنا" : "Our Vision"}
          </h3>
          <p className="text-sm md:text-2xl text-darkGray">
            {language
              ? "رؤيتنا في ليسول هي تمكين الأفراد والشركات من تجربة رقمية تبسّط عمليات الشراء والبيع والإيجار، من خلال تقديم خدمات شاملة تغطي كافة الجوانب وتقدم حلولًا متكاملة للعقارات."
              : "رؤيتنا في ليسول هي تمكين الأفراد والشركات من تجربة رقمية تبسّط عمليات الشراء والبيع والإيجار، من خلال تقديم خدمات شاملة تغطي كافة الجوانب وتقدم حلولًا متكاملة للعقارات."}
          </p>
        </section>
      </main>
    </>
  );
}
