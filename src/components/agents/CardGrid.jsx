import AgentBanner from "./AgentBanner ";
import AgentCard from "./AgentCard";
import { useEffect, useState } from "react";

const CardGrid = ({ cardsData }) => {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1280) {
        setColumns(5); // xl
      } else if (window.innerWidth >= 1024) {
        setColumns(3); // lg
      } else if (window.innerWidth >= 768) {
        setColumns(2); // md
      } else {
        setColumns(2); // default
      }
    };

    updateColumns(); // Initial check
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const renderCardsWithBanners = () => {
    let elements = [];
    let rowCount = 0;
    let bannerAdded = false; // Flag to check if the banner has been added

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

      // Add banner after the first set of AgentCards
      if (rowCount === columns && !bannerAdded) {
        elements.push(
          <div key={`banner-${i}`} className={`col-span-${columns}`}>
            <AgentBanner />
          </div>,
        );
        bannerAdded = true; // Set the flag to true to prevent further banners
      }
    }

    // If cardsData.length is less than a full row, add banner at the end
    if (!bannerAdded) {
      elements.push(
        <div key="banner-end" className={`col-span-full`}>
          <AgentBanner />
        </div>,
      );
    }

    return elements;
  };

  return (
    <div
      className={`grid mt-5 items-start grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4`}
    >
      {renderCardsWithBanners()}
    </div>
  );
};

export default CardGrid;
