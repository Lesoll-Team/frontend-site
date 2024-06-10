import AddProperty from "@/components/newAddProperty/AddProperty";
import Head from "next/head";
import { useSelector } from "react-redux";

const addPropertyPage = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Head>
        <title>
          {language
            ? "اضف عقارك مع ليسول | موقع مخصص لبيع وايجار العقارات في مصر"
            : "Add property with Lesoll dedicated to selling and renting real estate"}
        </title>
        <meta name="robots" content="noindex, nofollow" />

        <meta
          name="description"
          content="اضف عقارك مع ليسول، فحن متخصصون في بيع وايجار جميع أنواع العقارات، شقق للبيع، شقق للايجار، اراضي للبيع والايجار، محلات للبيع والايجار، شقق دوبلكس"
        />
        <link rel="canonical" href={`https://lesoll.com/add-property`} />
      </Head>
      <AddProperty />
    </>
  );
};

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const firstSegment = req.url.split("/")[1]; // Extracting the first segment of the URL path
//   // You can return an empty object or null since you don't need to fetch any data
//   return {
//     props: { firstSegment },
//   };
// }
export default addPropertyPage;
