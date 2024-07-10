import Head from "next/head";
import { useSelector } from "react-redux";

const AgentMetaTags = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <Head>
      <title>{language ? "وكلاء ليسول" : "Lesoll agents"}</title>
      <meta
        name="description"
        content={language ? "وكلاء  ليسول" : "Lesoll agents"}
      />
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};
export default AgentMetaTags;
