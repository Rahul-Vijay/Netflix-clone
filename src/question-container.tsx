import React, { FunctionComponent, useState } from "react";

interface IProps {
  ques: string;
  ans: string;
  id: Number;
}

const QuestionContainer: FunctionComponent<IProps> = (props: IProps) => {
  const { ques, ans, id } = props;
  const idString = `${id}-ans`;

  const setRestToNone = () => {
    const nList = document.querySelectorAll(
      ".question-container > div:nth-child(2)"
    );
    if (nList.length > 0) {
      for (let z = 0; z < nList.length; z++) {
        if (nList[z].id !== idString) {
          document.getElementById(nList[z].id)!.style.display = "none";
        } else document.getElementById(nList[z].id)!.style.display = "block";
      }
    }
  };

  return (
    <div
      className="question-container"
      onClick={() => {
        setRestToNone();
      }}
    >
      <div>
        <div> {ques} </div>
        <div>
          {/* <span
            style={
              display === "block" ? { display: "none" } : { display: "block" }
            }
          >
            +
          </span>{" "}
          <span style={{ display }}>x</span> */}
        </div>
      </div>
      <div id={idString}>{ans}</div>
    </div>
  );
};

export default QuestionContainer;
