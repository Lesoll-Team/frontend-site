import SpecialCards from "@/components/homePage/SpecialCards";
// import SpecialCard from "@/components/realtyCard/SpecialCard";

const ProjectsPage = ({ specialCardData }) => {
  return (
    <div className="min-h-[90vh] md:container md:mx-auto mx-[20px] pt-20">
      <SpecialCards specialCardData={specialCardData} />
    </div>
  );
};
export default ProjectsPage;
export async function getServerSideProps() {
  const specialData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/get-home-projects?limit=3&page=1`
  );

  const specialCardData = await specialData.json();

  return {
    props: {
      specialCardData,
    },
  };
}