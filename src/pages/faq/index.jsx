import axiosInstance from "@/Shared/axiosInterceptorInstance";
import Faq from "@/components/faq/Faq";

// import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";
import { useSelector } from "react-redux";

const index = ({ faqData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div>
      <Head>
        <title>{language ? "الأسئلة الشائعة" : "FAQ"}</title>
        <meta
          name="description"
          content="استكشف صفحتنا للأسئلة الشائعة للعثور على إجابات على أسئلة العقارات الشائعة. احصل على معلومات حول شراء وبيع واستئجار واستثمار العقارات. احصل على الإجابات التي تحتاجها لرحلة عقارية ناجحة."
        />
        <link rel="canonical" href={`https://lesoll.com/faq`} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Faq faqData={faqData} />
    </div>
  );
};
export default index;
export async function getServerSideProps(context) {
  try {
    const res = await axiosInstance.get(`/admin/QandA/getall`);
    const data = res.data;

    return {
      props: { faqData: data },
      // revalidate: 10,
    };
  } catch (error) {
    context.res.setHeader("Location", "/");
    context.res.statusCode = 301;
    context.res.end();
  }
}
