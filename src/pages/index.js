import dynamic from "next/dynamic";
import cache from "memory-cache";
import HeroSection from "@/components/homePage/HeroSection";
import SearchModule from "@/components/homePage/SearchModule";
import OtherCards from "@/components/homePage/OtherCards";
import HomeMetaTag from "@/components/homePage/HomeMetaTag";
const PropertiesCategories = dynamic(
  () => import("@/components/homePage/PropertiesCategories"),
);
const LocationCategories = dynamic(
  () => import("@/components/homePage/LocationCategories"),
);
const BestLinksInHome = dynamic(
  () => import("../components/linksInHome/BestLinksInHome"),
);
const Home = ({ bestSearch }) => {
  return (
    <main className="relative flex flex-col gap-y-[40px] md:gap-y-[40px] lg:gap-y-[70px]">
      <HomeMetaTag />
      <div className="md:container md:mx-auto  mx-[20px]">
        <SearchModule />
      </div>
      <HeroSection />
      {/* <SpecialCards isHome /> */}
      <div className="md:container md:mx-auto mx-[20px] flex-wrap flex md:gap-y-0 gap-y-2 flex-col md:flex-row justify-between">
        <OtherCards />
      </div>
      <PropertiesCategories isHome />
      <LocationCategories />
      <BestLinksInHome
        PopularSearches={bestSearch?.POPULAR_SEARCHES}
        MostArea={bestSearch?.Most_Area}
        MostGovernorate={bestSearch?.Most_Governorate}
        Others={bestSearch?.Others}
      />
    </main>
  );
};
export default Home;
export async function getServerSideProps() {
  let linkInHome = cache.get("linkInHome");
  if (!linkInHome) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/property/linkshome`,
    );
    const linkInHome = await response.json();
    cache.put("linkInHome", linkInHome, 86400000);
  }

  return {
    props: {
      bestSearch: linkInHome,
    },
  };
}
