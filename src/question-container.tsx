import React, { FunctionComponent } from "react";

interface IProps {
  ques: String;
  ans: String;
}

const QuestionContainer: FunctionComponent<IProps> = (props: IProps) => {
  const { ques, ans } = props;
  return (
    <div className="question-container">
      <div>
        <div> {ques} </div>
        <div>
          <span>+</span> <span>x</span>
        </div>
      </div>
      <div>{ans}</div>
    </div>
  );
};

export default QuestionContainer;
