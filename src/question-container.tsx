import React, { FunctionComponent, useState } from "react";

interface IProps {
  ques: string;
  ans: string;
  id: Number;
}

const QuestionContainer: FunctionComponent<IProps> = (props: IProps) => {
  const { ques, ans, id } = props;
  const idString = `${id}-ans`;
  const [display, setDisplay] = useState("none");

  return (
    <div
      className="question-container"
      onClick={(e) => {
        console.log(e.target);
        if (display === "block") setDisplay("none");
        else setDisplay("block");
      }}
    >
      <div>
        <div> {ques} </div>
        <div>
          <span>+</span> <span>x</span>
        </div>
      </div>
      <div id={idString} style={{ display }}>
        {ans}
      </div>
    </div>
  );
};

export default QuestionContainer;
