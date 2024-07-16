import AgentBanner from "./AgentBanner ";
import AgentCard from "./AgentCard";
import { useEffect, useState } from "react";

const CardGrid = ({ cardsData }) => {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1280) {
        setColumns(5); // xl
      } else if (window.innerWidth >= 1024) {
        setColumns(3); // lg
      } else if (window.innerWidth >= 768) {
        setColumns(2); // md
      } else {
        setColumns(1); // default
      }
    };

    updateColumns(); // Initial check
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const renderCardsWithBanners = () => {
    let elements = [];
    let rowCount = 0;
    for (let i = 0; i < cardsData.length; i++) {
      elements.push(
        <AgentCard
          logo={cardsData[i].avatarUrl}
          company={cardsData[i].fullname}
          username={cardsData[i].username}
          key={i}
        />,
      );

      rowCount++;

      if (rowCount === columns * 1) {
        elements.push(<AgentBanner key={`banner-${i}`} />);
        // rowCount = 0; if i need repeat agent banner
      }
    }

    return elements;
  };

  return (
    <div
      className={`grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4`}
    >
      {renderCardsWithBanners()}
    </div>
  );
};

export default CardGrid;
