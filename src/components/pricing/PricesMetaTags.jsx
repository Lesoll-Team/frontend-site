import Head from "next/head";
import { useSelector } from "react-redux";

const PricesMetaTags = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <Head>
      <title>{language ? "اشتراكات ليسول" : "Lesoll packages"}</title>
      <meta
        name="description"
        content={
          language
            ? "اشترك الآن في باقات الإعلانات المميزة على موقعنا ليسول وأضف عقارك المميز ليحصل على أكبر قدر من الاهتمام والرؤية. اختر من بين باقاتنا المتنوعة واحصل على مميزات حصرية تبرز عقارك بشكل أفضل."
            : "Subscribe now to our premium advertising packages and feature your property for maximum visibility and attention. Choose from our various packages and get exclusive benefits to highlight your property better."
        }
      />
    </Head>
  );
};
export default PricesMetaTags;
