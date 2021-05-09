import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="footer">
        <div>Questions? Call 000-800-040-1843 </div>
        <div className="footer-links">
          <ul>
            <li>FAQ</li>
            <li>Account</li>
            <li>Investor Relation</li>
            <li>Ways to Watch</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <button className="lg-btn"> English </button>
        </div>
        <div>Netflix India</div>
      </div>
    </div>
  );
};

export default Footer;
