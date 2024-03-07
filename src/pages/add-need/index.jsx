import AddNeed from "@/components/needs/addNeed/AddNeed";
import Head from "next/head";

export default function need() {
  return (
    <div className="min-h-[80dvh]  ">
      <Head>
        <title>Lesoll Need</title>
      </Head>
      <AddNeed />
    </div>
  );
}
