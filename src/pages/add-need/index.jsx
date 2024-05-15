import AddNeed from "@/components/needs/addNeed/AddNeed";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function need() {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="min-h-[80dvh]  ">
      <Head>
        <title>{language ? "أضف طلبك | ليسول" : "Add your needs"}</title>
        <meta name="robots" content="noindex, nofollow" />

        <meta
          name="description"
          content={
            language
              ? "اضف طلبك للعقار الذى تبحث عنه كى نساعدك على ايجاده"
              : "Add your need to the property you are looking for so we can help you find it"
          }
        />
      </Head>
      <AddNeed />
    </div>
  );
}
