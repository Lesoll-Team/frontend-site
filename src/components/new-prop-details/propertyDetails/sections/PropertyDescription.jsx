import { useTranslation } from "next-i18next";
import { useState } from "react";

const PropertyDescription = ({ propertyData }) => {
  const { t } = useTranslation("common");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionLinesNumbers = propertyData.description.split("\n").length;

  return (
    <section className="md:space-y-[30px] space-y-[16px]">
      <h2>{t("Description")}</h2>
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
            {showFullDescription ? t("See_Less") : t("See_More")}
          </button>
        )}
      </div>
    </section>
  );
};
export default PropertyDescription;
