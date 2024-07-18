import Head from "next/head";
import { useSelector } from "react-redux";

const ViewProfileMetaTags = ({ userData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const capitalized = userData?.charAt(0).toUpperCase() + userData.slice(1);
  if (!userData) {
    return (
      <Head>
        <title> View Profile Error page</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
    );
  }
  return (
    <Head>
      <title>{capitalized}</title>
      <meta
        name="description"
        content={
          language
            ? `استكشاف قوائم عقارات ${userData}، تصفية العقارات بناءً على تفضيلاتك، والتواصل مباشرة إذا كنت مهتمًا بالشراء. اكتشف مجموعة واسعة من العقارات وتواصل بسهولة مع صاحب العقار.`
            : `Explore ${userData} real estate listings, filter properties based on your preferences, and connect directly if interested in purchasing. Discover a wide range of properties and communicate easily with the owner.`
        }
      />
    </Head>
  );
};

export default ViewProfileMetaTags;
