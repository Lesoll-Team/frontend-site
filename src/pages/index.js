import HeroSection from "@/components/homePage/HeroSection";
import LocationCategories from "@/components/homePage/LocationCategories";
import OtherCards from "@/components/homePage/OtherCards";
import PropertiesCategories from "@/components/homePage/PropertiesCategories";
import SearchModule from "@/components/homePage/SearchModule";
import BestLinksInHome from "@/components/linksInHome/BestLinksInHome";
import SpecialCards from "@/components/homePage/SpecialCards";

const Home = ({ specialCardData, bestSearch }) => {
  return (
    <main className="relative flex flex-col gap-y-[40px] md:gap-y-[40px] lg:gap-y-[70px]">
      <div className="md:container md:mx-auto  mx-[20px]">
        <SearchModule />
      </div>
      <HeroSection />
      <SpecialCards specialCardData={specialCardData} />

      <div className="md:container md:mx-auto mx-[20px] flex-wrap flex md:gap-y-0 gap-y-2 flex-col md:flex-row justify-between">
        <OtherCards />
      </div>
      <PropertiesCategories isHome />

      <LocationCategories />

      <BestLinksInHome
        PopularSearches={bestSearch.POPULAR_SEARCHES}
        MostArea={bestSearch.Most_Area}
        MostGovernorate={bestSearch.Most_Governorate}
        Others={bestSearch.Others}
      />
    </main>
  );
};

export default Home;
export async function getServerSideProps() {
  const specialData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/get-home-projects?limit=3&page=1`
  );
  const linkHome = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/linkshome`
  );
  const specialCardData = await specialData.json();
  const linkInHome = await linkHome.json();

  return {
    props: {
      specialCardData,
      bestSearch: linkInHome,
    },
  };
}
