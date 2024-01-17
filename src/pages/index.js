import HeroSection from '@/components/homePage/HeroSection';
import LocationCategories from '@/components/homePage/LocationCategories';
import OtherCards from '@/components/homePage/OtherCards';
import PropertiesCategories from "@/components/homePage/PropertiesCategories";
import BestLinksInHome from '@/components/linksInHome/BestLinksInHome';
import React from 'react';

const Home = ({ bestSearch }) => {
  return (
    <main className=''>
      <div className="relative ">
        <HeroSection />
      </div>
      <div className="container mx-auto mt-[50px]">
        <PropertiesCategories />
      </div>
      <div className="container mx-auto mt-[50px]">
        <LocationCategories />
      </div>
      <div className="my-24 gap-5  container mx-auto flex-wrap flex flex-col md:flex-row justify-between ">
        <OtherCards />
      </div>
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
export async function getStaticProps() {


  const linkHome = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/linkshome`
  );

  const linkInHome = await linkHome.json();

  return {
    props: {
      bestSearch: linkInHome,
    }
  };
}