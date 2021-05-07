import React from "react";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="main-container">
      <Header />
      {/* content div */}
      <div>
        <h2>Unlimited movies, TV shows and more.</h2>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <h4>
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <button>Get started</button>
      </div>
    </div>
  );
};

export default HomePage;
