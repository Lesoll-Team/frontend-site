import { useWindowWidth } from "@/Hooks/useWindowWidth";
import ProfileHeader from "@/components/newProfile/user/ProfileHeader";

const ProfileLayout = ({ children, hideHeader = true }) => {
  const { windowWidth } = useWindowWidth();
  console.log(windowWidth);
  return (
    <div className="md:flex">
      {windowWidth && windowWidth > 768 && (
        <aside className="min-w-[350px]  hidden md:block min-h-[70dvh] py-5 bg-lightNeutral">
          a
        </aside>
      )}
      <main
        className={`md:container max-w-[1400px] mx-auto w-full mt-7 md:mt-[80px] pb-16 `}
      >
        <ProfileHeader hideHeader={hideHeader} />
        {children}
      </main>
    </div>
  );
};
export default ProfileLayout;
