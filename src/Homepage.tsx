import React from "react";
import FlexContainers from "./Flex-Containers";
import TopContent from "./Top-Content";

const HomePage = () => {
  return (
    <div>
      <TopContent />
      <FlexContainers />
      {/* <div className="wrapper">
        <div className="text-container">
          <div>Enjoy on your TV.</div>
          <div>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </div>
        </div>
        <div></div>
      </div> */}
    </div>
  );
};

export default HomePage;
