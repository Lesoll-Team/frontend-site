import HeroSection from "@/components/homePage/HeroSection";
import LocationCategories from "@/components/homePage/LocationCategories";
import OtherCards from "@/components/homePage/OtherCards";
import PropertiesCategories from "@/components/homePage/PropertiesCategories";
import SearchModule from "@/components/homePage/SearchModule";
import BestLinksInHome from "@/components/linksInHome/BestLinksInHome";
// import BestLinksInHome from "@/components/linksInHome/BestLinksInHome";
// import React from "react";

const Home = ({ bestSearch }) => {
  return (
    <main className="relative">
      <div className="container mx-auto z-50  w-full">
        <SearchModule />
      </div>
      <div className="mt-10 md:mt-0 ">
        <PropertiesCategories />
      </div>
      <div className="">
        <LocationCategories />
      </div>
      <div className="my-24 gap-y-3 container mx-auto flex-wrap flex flex-col md:flex-row justify-between ">
        <OtherCards />
      </div>
      <BestLinksInHome
        PopularSearches={bestSearch.POPULAR_SEARCHES}
        MostArea={bestSearch.Most_Area}
        MostGovernorate={bestSearch.Most_Governorate}
        Others={bestSearch.Others}
      />
      <HeroSection />
    </main>
  );
};

export default Home;

export async function getServerSideProps() {
  const linkHome = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/linkshome`
  );

  const linkInHome = await linkHome.json();
  // const linkInHome = "await linkHome.json()";

  return {
    props: {
      bestSearch: linkInHome,
    },
  };
}
