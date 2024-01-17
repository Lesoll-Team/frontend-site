import Faq from "@/components/faq/Faq";
import Head from "next/head";
import { useSelector } from "react-redux";

const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div>
      <Head>
        <title>{language ? "الأسئلة الشائعة" : "FAQ"}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="استكشف صفحتنا للأسئلة الشائعة للعثور على إجابات على أسئلة العقارات الشائعة. احصل على معلومات حول شراء وبيع واستئجار واستثمار العقارات. احصل على الإجابات التي تحتاجها لرحلة عقارية ناجحة."
        />
        <link rel="canonical" href={`https://lesoll.com/faq`} />
      </Head>
      <Faq />
    </div>
  );
};
export default index;
