import { useState } from "react";
import { useSelector } from "react-redux";

const PropertyDescription = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionLinesNumbers = propertyData.description.split("\n").length;

  return (
    <section>
      <h3 className="text-xl sm:text-2xl mb-3">
        {language ? "الوصف" : "Description"}
      </h3>
      <p className="text-base sm:text-xl text-baseGray">
        {propertyData.description
          .split("\n")
          .slice(0, showFullDescription ? descriptionLinesNumbers : 3)
          .map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
      </p>
      {descriptionLinesNumbers > 3 && (
        <button
          className="underline text-blue-400 "
          onClick={() => setShowFullDescription((prev) => !prev)}
        >
          {language ? "رؤية المزيد" : "show more"}
        </button>
      )}
    </section>
  );
};
export default PropertyDescription;
