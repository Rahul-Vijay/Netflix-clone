import React, { useState } from "react";
import { qArray, aArray } from "./data";
import QuestionContainer from "./question-container";

const FaqPage = () => {
  return (
    <div className="faq-container">
      <div style={{ fontSize: "1.5em", marginBottom: "4%", fontWeight: 600 }}>
        {" "}
        Frequently Asked Questions{" "}
      </div>
      <div className="faq-sub-container">
        {qArray.map((q, i) => {
          return <QuestionContainer key={q} ques={q} ans={aArray[i]} id={i} />;
        })}
      </div>
      <div className="faq-sub-parent">
        <div style={{ margin: "2% 5%" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="faq-sub">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
          />
          <button className="rd-btn-2">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
