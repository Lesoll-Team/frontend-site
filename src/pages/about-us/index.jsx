import Head from "next/head";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function about() {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Head>
        <title>
          {language ? "اعرف عن ليسول | ليسول" : "About Lesoll | lesoll"}
        </title>
        <meta
          name="description"
          content={
            language
              ? "ليسول تقدم خدمة البحث الرقمي بتجربة مختلفة لتسهيل شراء، بيع وتأجير العقارات في مصر، مع خدمة شاملة تسهل عليك تحقيق الصفقة في أي مكان في مصر سواء مالك أو مشتري "
              : "Lesoll offers customers an online search to buy, sell, or rent properties in Egypt, helping owners and buyers discover upcoming real estate deals across Egypt"
          }
        />
        <link rel="canonical" href="https://lesoll.com/about-us" />
      </Head>
      <main className="container mx-auto py-10 space-y-6 md:space-y-14 md:mb-20">
        <header className="flex items-center justify-center relative">
          <Image
            width={400}
            height={100}
            src={"/about.png"}
            alt="About Lesoll"
            className="w-full "
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,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"
          />
          <h1 className="  absolute text-white">
            {language
              ? "من نحن : مهمتنا ورؤيتنا في ليسول"
              : "About us: Our Mission and Vision at Lesoll"}
          </h1>
        </header>
        <section className="space-y-2 md:space-y-6">
          <h2 className=" font-bold">{language ? "نبذة عنا" : "About Us"}</h2>
          <p className=" text-darkGray font-noto text-[17px] md:text-[19px] lea">
            {language
              ? "ليسول هي سوق مفتوح لعرض العقارات عبر الانترنت تأسست في 2022. توفر ليسول تجربة رقمية سلسة لشراء و تأجير و بيع العقارات في مصر. نحن في ليسول ملتزمون بإعادة تشكيل مفهوم العقارات في مصر، من خلال منصة مبتكرة وسهلة الاستخدام للتعاملات العقارية. كما خصصت ليسول جزءًا من المنصة لفرص الاستثمار، لتكون مركزًا جذابًا لأصحاب العقارات والمستثمرين."
              : "Founded in 2022 in Cairo, Egypt. Lesoll is a leading online real estate marketplace that provides a seamless digital experience for buying, selling, and renting properties. At Lesoll, we are dedicated to redefining the real estate landscape in Egypt, providing an innovative, seamless, and convenient platform for property transactions. Lesoll dedicated part of the platform for investment opportunities to be a hub for owners and investors."}
          </p>
        </section>
        <section className="space-y-2 md:space-y-6">
          <h2 className=" font-bold">{language ? "مهمتنا" : "Our Mission"}</h2>
          <p className=" text-darkGray font-noto text-[17px] md:text-[19px] lea">
            {language
              ? "مهمتنا في ليسول هي تبسيط وتحسين تجربة العقارات في مصر. نحن نسعى لجعل عملية الشراء والبيع والإيجار أكثر يسرًا وسهولة من خلال منصتنا المبتكرة. نهدف إلى تمكين الأفراد من خلال توفير منصة سهلة الاستخدام توفر مجموعة واسعة من خيارات العقارات. بفضل خدماتنا الشاملة، نعمل على ربط أصحاب العقارات والمشترين والمستأجرين معًا، مع زيادة الشفافية والراحة وبناء الثقة في سوق العقارات."
              : "Our mission at Lesoll is to simplify and transform the real estate experience in Egypt. We aim to empower individuals by providing them with a user-friendly platform and a wide range of property options. Through our comprehensive services, we strive to connect owners, buyers, and renters, fostering transparency, convenience, and trust in the real estate market."}
          </p>
        </section>
        <section className="space-y-2 md:space-y-6">
          <h2 className=" font-bold">{language ? "رؤيتنا" : "Our Vision"}</h2>
          <p className=" text-darkGray font-noto text-[17px] md:text-[19px] lea">
            {language
              ? "رؤيتنا في ليسول هي تمكين الأفراد والشركات من تجربة رقمية تبسّط عمليات الشراء والبيع والإيجار، من خلال تقديم خدمات شاملة تغطي كافة الجوانب وتقدم حلولًا متكاملة للعقارات."
              : "Our vision is to empower individuals and businesses, offering a digital experience that simplifies buying, selling, and renting properties while providing end-to-end service and support."}
          </p>
        </section>
      </main>
    </>
  );
}
