import Head from "next/head";
import { useSelector } from "react-redux";

const AgentMetaTags = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <Head>
      <title>
        {language ? "الحسابات المميزة | ليسول" : "Premium Accounts | Lesoll"}
      </title>
      <meta
        name="description"
        content={
          language ? "الحسابات المميزة | ليسول" : "Premium Accounts | Lesoll"
        }
      />
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};
export default AgentMetaTags;
