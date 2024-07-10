import dynamic from "next/dynamic";
import HeroSection from "@/components/homePage/HeroSection";
import SearchModule from "@/components/homePage/SearchModule";
import OtherCards from "@/components/homePage/OtherCards";
import HomeMetaTag from "@/components/homePage/HomeMetaTag";
import CarouselPinCard from "@/components/homePage/CarouselPinCard";
import PinProfileTitle from "@/components/homePage/PinProfileTitle";

const PropertiesCategories = dynamic(
  () => import("@/components/homePage/PropertiesCategories"),
);
const LocationCategories = dynamic(
  () => import("@/components/homePage/LocationCategories"),
);

const BestLinksInHome = dynamic(
  () => import("../components/linksInHome/BestLinksInHome"),
);

const Home = ({ bestSearch, profile }) => {
  return (
    <main className="relative flex flex-col gap-y-[40px] md:gap-y-[40px] lg:gap-y-[70px]">
      <HomeMetaTag />
      <div className="md:container md:mx-auto  mx-[20px]">
        <SearchModule />
      </div>
      <HeroSection />
      <div className="md:container md:mx-auto mx-[20px] flex-wrap flex md:gap-y-0 gap-y-2 flex-col md:flex-row justify-between">
        <OtherCards />
      </div>
      <div className=" md:container md:mx-auto p-5 mx-[20px] bg-gray-100">
        <PinProfileTitle />
        <CarouselPinCard users={profile} />
      </div>

      {/* <SpecialCards isHome /> */}

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
  const pinProfile = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payment-user/pin-profile-home`,
  );
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/linkshome`,
  );
  const linkInHome = await response.json();
  const profile = await pinProfile.json();
  return {
    props: {
      bestSearch: linkInHome,
      profile: profile.getProfiles,
    },
    // revalidate: 21600, // يعيد التحقق كل 6 ساعات (21600 ثانية)
  };
}
