import HeroSection from "@/components/homePage/HeroSection";
import LocationCategories from "@/components/homePage/LocationCategories";
import OtherCards from "@/components/homePage/OtherCards";
import PropertiesCategories from "@/components/homePage/PropertiesCategories";
import SearchModule from "@/components/homePage/SearchModule";
//// import BestLinksInHome from "@/components/linksInHome/BestLinksInHome";
//// import BestLinksInHome from "@/components/linksInHome/BestLinksInHome";
//// import React from "react";

const Home = () => {
  // const Home = ({ bestSearch }) => {
  return (
    <main className="relative flex flex-col gap-y-[40px] md:gap-y-[40px] lg:gap-y-[70px]">
      <div
        className="md:container md:mx-auto  mx-[20px]"
        //className="md:container md:mx-auto mx-[20px]   md:w-full"
      >
        <SearchModule />
      </div>
      <HeroSection />

      <div
        className="md:container md:mx-auto mx-[20px] flex-wrap flex md:gap-y-0 gap-y-2 flex-col md:flex-row justify-between"
        // className=" lg:my-0 my-24  gap-y-3 container mx-auto flex-wrap flex flex-col md:flex-row justify-between "
      >
        <OtherCards />
      </div>
      {/**mt-10 md:mt-0 */}
      <div className=" ">
        {/* <div className="mt-24  md:mt-0 "> */}
        <PropertiesCategories isHome />
      </div>
      <div className="">
        <LocationCategories />
      </div>
    </main>
  );
};

export default Home;
/* <BestLinksInHome
        PopularSearches={bestSearch.POPULAR_SEARCHES}
        MostArea={bestSearch.Most_Area}
        MostGovernorate={bestSearch.Most_Governorate}
        Others={bestSearch.Others}
      /> */
// export async function getServerSideProps() {
//   const linkHome = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/property/linkshome`
//   );

//   const linkInHome = await linkHome.json();
//   // const linkInHome = "await linkHome.json()";

//   return {
//     props: {
//       bestSearch: linkInHome,
//     },
//   };
// }
