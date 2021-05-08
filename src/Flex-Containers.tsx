import React from "react";

const FlexContainers = () => {
  return (
    <div className="wrapper-flex">
      <div className="row-wrapper-1">
        <div>
          <div>Enjoy on your TV.</div>
          <div>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </div>
        </div>
        <div style={{ backgroundColor: "brown" }}></div>
      </div>
      <div className="row-wrapper-2">
        <div>
          <div>Download your shows to watch online.</div>
          <div>
            Save your favorites easily and always have something to watch
          </div>
        </div>
        <div style={{ backgroundColor: "yellow" }}></div>
      </div>
      <div className="row-wrapper-3">
        <div>
          <div>Watch everywhere.</div>
          <div>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </div>
        </div>
        <div style={{ backgroundColor: "black" }}></div>
      </div>
      <div className="row-wrapper-4">
        <div>
          <div>Create profiles for kids.</div>
          <div>
            Send kids on adventures with their favourite characters in a space
            made just for them—free with your membership.
          </div>
        </div>
        <div style={{ backgroundColor: "turquoise" }}></div>
      </div>
    </div>
  );
};

export default FlexContainers;
