import { useState } from "react";
import { useSelector } from "react-redux";

const AboutCompany = ({ projectData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionLinesNumbers = language
    ? projectData.aboutAr.split("\n").length
    : projectData.aboutEn.split("\n").length;

  return (
    <section className="md:space-y-[30px] space-y-[16px]">
      <h3 className="text-sm sm:text-3xl ">
        {language ? "عن الشركه" : "About Company"}
      </h3>
      <div>
        {" "}
        <p
          className="text-xs sm:text-base md:text-[25px] font-inter text-baseGray break-all"
          style={{ lineHeight: "1.7" }}
        >
          {projectData.aboutAr
            .trim()
            .split("\n")
            .slice(0, showFullDescription ? descriptionLinesNumbers : 3)
            .filter((line) => line.trim() !== "") // Filter out empty lines
            .map((line, index) => (
              <span className="py-1" key={index}>
                {line.trim()}
                <br />
              </span>
            ))}
        </p>
        {descriptionLinesNumbers > 3 && (
          <button
            className="underline text-linkColor "
            onClick={() => setShowFullDescription((prev) => !prev)}
          >
            {showFullDescription
              ? language
                ? " رؤية الاقل"
                : "See less"
              : language
                ? "رؤية المزيد"
                : "show more"}
          </button>
        )}
      </div>
    </section>
  );
};
export default AboutCompany;
