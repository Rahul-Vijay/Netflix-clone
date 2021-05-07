import React from "react";

const Header = () => {
  return (
    <div className="header">
      {/* netflix logo div */}
      <div>
        <h3>Netflix logo here</h3>
      </div>
      <div>
        {/* language btn div*/}
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <button> english </button>
        </div>
        {/* sign in btn div*/}
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <button> sign in </button>
        </div>
      </div>
    </div>
  );
};

export default Header;