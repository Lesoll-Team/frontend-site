import Main from "@/components/homePage/Main";
import MostViewd from "@/components/homePage/MostViewd";
import RecentRealties from "@/components/homePage/RecentRealties";
import Head from "next/head";
export default function Home() {
  return (
    <main>
    <Head>
    <title>Lesoll</title>
      
    </Head>
      <Main />
      <RecentRealties />
      <MostViewd />
    </main>
  );
}
