import Head from "next/head";
import { useSelector } from "react-redux";

const AgentMetaTags = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <Head>
      <title>
        {language ? "الحسابات الموثقة | ليسول" : "Verified Accounts | Lesoll"}
      </title>
      <meta
        name="description"
        content={
          language ? "الحسابات الموثقة ليسول" : "Verified Accounts Lesoll"
        }
      />
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};
export default AgentMetaTags;
