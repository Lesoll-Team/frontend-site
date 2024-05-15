import { useState } from "react";
import { useSelector } from "react-redux";

const PropertyDescription = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionLinesNumbers = propertyData.description.split("\n").length;

  return (
    <section className="md:space-y-[30px] space-y-[16px]">
      <h2>{language ? "الوصف" : "Description"}</h2>
      <div>
        {" "}
        <p className=" font-noto text-baseGray" style={{ lineHeight: "1.7" }}>
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
            className="underline text-linkColor lg-text "
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
export default PropertyDescription;
