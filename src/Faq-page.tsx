import React from "react";
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
          return <QuestionContainer ques={q} ans={aArray[i]} />;
        })}
      </div>
    </div>
  );
};

export default FaqPage;
