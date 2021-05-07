import React from "react";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="main-container">
      <Header />
      {/* content div */}
      <div className="content-container">
        <div>
          <div style={{ fontSize: "2em" }}>
            Unlimited movies, TV shows and more.
          </div>
          <div className="content-sub-text">
            Watch anywhere. Cancel anytime.
          </div>
          <div className="content-sub-text">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
          />
          <br />
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
