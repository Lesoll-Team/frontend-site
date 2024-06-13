// import { useWindowWidth } from "@/Hooks/useWindowWidth";
import ProfileHeader from "@/components/newProfile/user/ProfileHeader";
import ProfileLinks from "@/components/newProfile/user/ProfileLinks";
import Head from "next/head";

const ProfileLayout = ({ children, hideHeader = true }) => {
  // const { windowWidth } = useWindowWidth();

  return (
    <div className="md:flex md:gap-16">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <aside className="min-w-[350px]  hidden md:block min-h-[70dvh] pt-[80px] bg-lightNeutral">
        <ProfileLinks />
      </aside>

      <main
        className={`md:container  px-5  max-w-[1400px] mx-auto w-full mt-7 md:mt-[80px] pb-16 `}
      >
        <ProfileHeader hideHeader={hideHeader} />
        {children}
      </main>
    </div>
  );
};
export default ProfileLayout;
