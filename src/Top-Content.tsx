import React from "react";
import Header from "./Header";

const TopContent = () => {
  return (
    <div className="main-container">
      <Header />
      {/* content div */}
      <div className="content-container">
        <div>
          <div>Unlimited movies, TV shows and more.</div>
          <div>Watch anywhere. Cancel anytime.</div>
          <div>
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="sub-content-email">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <button className="rd-btn started">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
