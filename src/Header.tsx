import React from "react";

const Header = () => {
  return (
    <div className="header">
      {/* netflix logo div */}
      <div className="netflix-logo"></div>
      <div style={{ marginTop: "20px" }}>
        {/* language btn div*/}
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <button className="lg-btn"> English </button>
        </div>
        {/* sign in btn div*/}
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <button className="rd-btn"> Sign In </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
