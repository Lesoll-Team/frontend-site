import { useSelector } from "react-redux";

const ProjectTitlePrice = ({ projectData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <section className="space-y-5 md:space-y-5 md:border-b-1 md:pb-10">
      <h1 className="text-lg md:text-4xl font-bold text-darkGray  md:text-black md:font-medium">
        {projectData.title}{" "}
      </h1>
      <div className="flex items-center flex-wrap gap-5  md:gap-10">
        <h2 className="text-lg md:text-4xl font-bold  flex items-center gap-2">
          <span className="font-normal">
            {language ? "السعر الابتدائي" : "Starting Price"}
          </span>
          <span className="text-lightGreen ">
            {projectData.price + " "} {language ? "ج.م " : "Egp "}
          </span>
        </h2>
        <h2 className="text-lg md:text-4xl font-bold  flex items-center gap-2">
          <span className="font-normal">
            {language ? "المساحات  تبدأ من" : "Starting Areas"}
          </span>
          <span className="text-lightGreen ">
            {projectData.area + " "} {language ? "م2" : "m2 "}
          </span>
        </h2>
      </div>
    </section>
  );
};
export default ProjectTitlePrice;
