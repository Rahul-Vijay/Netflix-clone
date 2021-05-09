import React from "react";
import FaqPage from "./Faq-page";
import FlexContainers from "./Flex-Containers";
import TopContent from "./Top-Content";

const HomePage = () => {
  return (
    <div>
      <TopContent />
      <FlexContainers />
      <FaqPage />
      <div className="line-break"></div>
    </div>
  );
};

export default HomePage;
