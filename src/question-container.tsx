import React, { FunctionComponent, useState } from "react";

interface IProps {
  ques: string;
  ans: string;
  id: Number;
}

const QuestionContainer: FunctionComponent<IProps> = (props: IProps) => {
  const { ques, ans, id } = props;
  const idString = `${id}-ans`;
  const idX = `${id}-x`;
  const idPlus = `${id}-plus`;

  const setRestToNone = () => {
    const nList = document.querySelectorAll(
      ".question-container > div:nth-child(2)"
    );
    if (nList.length > 0) {
      for (let z = 0; z < nList.length; z++) {
        if (nList[z].id !== idString) {
          document.getElementById(nList[z].id)!.style.display = "none";
          document.getElementById(`${z}-x`)!.style.display = "block";
          document.getElementById(`${z}-plus`)!.style.display = "none";
        } else {
          if (document.getElementById(nList[z].id)!.style.display === "block") {
            document.getElementById(nList[z].id)!.style.display = "none";
            document.getElementById(`${z}-plus`)!.style.display = "none";
            document.getElementById(`${z}-x`)!.style.display = "block";
          } else {
            document.getElementById(nList[z].id)!.style.display = "block";
            document.getElementById(`${z}-plus`)!.style.display = "block";
            document.getElementById(`${z}-x`)!.style.display = "none";
          }
        }
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
          <span id={idX} style={{ display: "block" }}>
            +
          </span>
          <span id={idPlus} style={{ display: "none" }}>
            x
          </span>
        </div>
      </div>
      <div id={idString}>{ans}</div>
    </div>
  );
};

export default QuestionContainer;
