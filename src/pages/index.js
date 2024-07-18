import dynamic from "next/dynamic";
import HeroSection from "@/components/homePage/HeroSection";
import OtherCards from "@/components/homePage/OtherCards";
import HomeMetaTag from "@/components/homePage/HomeMetaTag";
// import SearchModule from "@/components/homePage/SearchModule";
// import CarouselPinCard from "@/components/homePage/CarouselPinCard";
// import PinProfileTitle from "@/components/homePage/PinProfileTitle";
// import PinPropertiesTitle from "@/components/homePage/PinPropertiesTitle";
// import CarouselPinPropertiesCard from "@/components/homePage/CarouselPinPropertiesCard";

const SearchModule = dynamic(
  () => import("@/components/homePage/SearchModule"),
);

const CarouselPinPropertiesCard = dynamic(
  () => import("@/components/homePage/CarouselPinPropertiesCard"),
);
const CarouselPinCard = dynamic(
  () => import("@/components/homePage/CarouselPinCard"),
);
const PinPropertiesTitle = dynamic(
  () => import("@/components/homePage/PinPropertiesTitle"),
);

const PinProfileTitle = dynamic(
  () => import("@/components/homePage/PinProfileTitle"),
);

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
    <main className="flex flex-col">
      <HomeMetaTag />
      <div className="md:container md:mx-auto  mx-[20px]">
        <SearchModule />
      </div>
      <HeroSection />

      <div className=" md:container md:mx-auto lg:-mt-14 p-5 space-y-10 mx-[20px]">
        <PinPropertiesTitle />
        <CarouselPinPropertiesCard />
      </div>
      <div className=" md:container md:mx-auto flex flex-col justify-center h-[400px]  bg-gray-50">
        <PinProfileTitle />
        <CarouselPinCard />
      </div>
      <div className=" md:container md:mx-auto my-14 mx-[20px] flex-wrap flex md:gap-y-0 gap-y-2  flex-col md:flex-row justify-between">
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
export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/linkshome`,
  );
  const linkInHome = await response.json();
  return {
    props: {
      bestSearch: linkInHome,
    },
    revalidate: 604800, // يعيد التحقق كل أسبوع (604800 ثانية)
    // revalidate: 21600, // يعيد التحقق كل 6 ساعات (21600 ثانية)
  };
}
