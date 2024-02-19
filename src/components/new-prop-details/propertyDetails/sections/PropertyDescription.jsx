import { useState } from "react";
import { useSelector } from "react-redux";

const PropertyDescription = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionLinesNumbers = propertyData.description.split("\n").length;

  return (
    <section className="md:space-y-[30px] space-y-[16px]">
      <h3 className="text-sm sm:text-3xl ">
        {language ? "الوصف" : "Description"}
      </h3>
      <p
        className="text-xs sm:text-base md:text-[25px] font-inter text-baseGray"
        style={{ lineHeight: "1.7" }}
      >
        {propertyData.description
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
          {descriptionLinesNumbers
            ? language
              ? " إخفاء"
              : "hide"
            : language
            ? "رؤية المزيد"
            : "show more"}
        </button>
      )}
    </section>
  );
};
export default PropertyDescription;
