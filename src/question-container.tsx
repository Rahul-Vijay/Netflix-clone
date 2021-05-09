import React, { FunctionComponent } from "react";

interface IProps {
  ques: String;
  ans: String;
  id: Number;
}

const QuestionContainer: FunctionComponent<IProps> = (props: IProps) => {
  const { ques, ans, id } = props;
  const idString = `${id}-ans`;
  return (
    <div className="question-container">
      <div>
        <div> {ques} </div>
        <div>
          <span>+</span> <span>x</span>
        </div>
      </div>
      <div id={idString}>{ans}</div>
    </div>
  );
};

export default QuestionContainer;
