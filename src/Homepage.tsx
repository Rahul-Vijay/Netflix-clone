import React from "react";
import FaqPage from "./Faq-page";
import FlexContainers from "./Flex-Containers";
import Footer from "./Footer";
import TopContent from "./Top-Content";

const HomePage = () => {
  return (
    <div>
      <TopContent />
      <FlexContainers />
      <FaqPage />
      <div className="line-break"></div>
      <Footer />
    </div>
  );
};

export default HomePage;
