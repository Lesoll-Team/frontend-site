import { useState } from "react";
import { useSelector } from "react-redux";

const Description = ({ description, title }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionLinesNumbers = description.split("\n").length;

  return (
    <section className="space-y-[16px]">
      {title && <h2 className=" ">{title}</h2>}
      <div>
        {" "}
        <div
          className="text-xs sm:text-base md:text-[25px] font-noto text-baseGray  break-words"
          style={{ lineHeight: "1.7" }}
        >
          {description
            .trim()
            .split("\n")
            .slice(0, showFullDescription ? descriptionLinesNumbers : 3)
            .filter((line) => line.trim() !== "") // Filter out empty lines
            .map((theline, index) => {
              const line = theline.trim();
              if (line.trim().startsWith("###")) {
                const newLine = line.substring(3);
                return (
                  <h3 className="font-cairo" key={index}>
                    {newLine.trim()}
                    <br />
                  </h3>
                );
              } else if (line.startsWith("##")) {
                const newLine = line.substring(2);
                return (
                  <h2 className="text-black font-cairo" key={index}>
                    {newLine.trim()}
                    <br />
                  </h2>
                );
              } else if (line.startsWith("#")) {
                const newLine = line.substring(1);
                return (
                  <h1 className="font-cairo" key={index}>
                    {newLine.trim()}
                    <br />
                  </h1>
                );
              } else if (line.startsWith("**")) {
                const newLine = line.substring(2);
                return (
                  <li className="list-item text-sm mx-4" key={index}>
                    {newLine.trim()}
                    <br />
                  </li>
                );
              } else if (line.startsWith("*")) {
                const newLine = line.substring(1);
                return (
                  <li className="list-item text-sm " key={index}>
                    {newLine.trim()}
                    <br />
                  </li>
                );
              } else {
                return (
                  <p className="py-1 text-xl" key={index}>
                    {line.trim()}
                    <br />
                  </p>
                );
              }
            })}
        </div>
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
export default Description;
