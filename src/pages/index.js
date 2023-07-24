import Main from "@/components/homePage/Main";
import MostViewd from "@/components/homePage/MostViewd";
import RecentRealties from "@/components/homePage/RecentRealties";
// import RecentProperties from "@/components/homePage/RecentProperties";
export default function Home() {
  return (
    <main>
      <Main />
      <RecentRealties />
      <MostViewd />
    </main>
  );
}
