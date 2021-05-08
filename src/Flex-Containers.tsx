import React from "react";

const FlexContainers = () => {
  return (
    <div className="wrapper-flex">
      <div className="line-break"></div>
      <div className="row-wrapper-1">
        <div>
          <div className="card-text-title">Enjoy on your TV.</div>
          <div className="card-text-sub-title">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </div>
        </div>
        <div
          style={{
            backgroundColor: "black",
          }}
        ></div>
      </div>
      <div className="line-break"></div>
      <div className="row-wrapper-2">
        <div>
          <div className="card-text-title">
            Download your shows to watch online.
          </div>
          <div className="card-text-sub-title">
            Save your favorites easily and always have something to watch
          </div>
        </div>
        <div style={{ backgroundColor: "yellow" }}></div>
      </div>
      <div className="line-break"></div>
      <div className="row-wrapper-3">
        <div>
          <div className="card-text-title">Watch everywhere.</div>
          <div className="card-text-sub-title">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </div>
        </div>
        <div style={{ backgroundColor: "black" }}></div>
      </div>
      <div className="line-break"></div>
      <div className="row-wrapper-4">
        <div>
          <div className="card-text-title">Create profiles for kids.</div>
          <div className="card-text-sub-title">
            Send kids on adventures with their favourite characters in a space
            made just for them—free with your membership.
          </div>
        </div>
        <div style={{ backgroundColor: "turquoise" }}></div>
      </div>
      <div className="line-break"></div>
    </div>
  );
};

export default FlexContainers;
