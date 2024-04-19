import Head from "next/head";
import { useSelector } from "react-redux";

const MetaTags = () => {
   const language = useSelector((state) => state.GlobalState.languageIs);

   return (
      <Head>
         <meta name="robots" content="noindex, nofollow" />
         <title>
            {language ? "نجحت عملية شراء الباقه " : "success buy package"}
         </title>
      </Head>
   );
};
export default MetaTags;
