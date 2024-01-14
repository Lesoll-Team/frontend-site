import HeroSection from '@/components/homePage/HeroSection';
import LocationCategories from '@/components/homePage/LocationCategories';
import PropertiesCategories from "@/components/homePage/PropertiesCategories";
import React from 'react';

const Home = () => {
  return (
    <main>
      <div className="relative ">
        <HeroSection />
      </div>
      <div className="container mx-auto mt-[50px]">
        <PropertiesCategories />
      </div>
      <div>
        {/** className="container mx-auto mt-[50px]" */}
        <LocationCategories />
      </div>
    </main>
  );
}

export default Home;
