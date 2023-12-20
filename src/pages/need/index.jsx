import NeedsForm from "@/components/needs/NeedsForm";
import Head from "next/head";

export default function need() {
  return (
    <div className="min-h-[90dvh]">
      <Head>
        <title>Lesoll Need</title>
      </Head>
      <NeedsForm />
    </div>
  );
}
