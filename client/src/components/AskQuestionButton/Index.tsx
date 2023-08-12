import React from "react";
import { styled } from "styled-components";

const buttonText = "Ask Question";

const AskQuestionButton = () => {
  return (
    <div className="buttonContainer">
      <AskButton>{buttonText}</AskButton>
    </div>
  );
};

export default AskQuestionButton;

const AskButton = styled.button`
  font-size: 13px;
  width: 101.016px;
  height: 35.781px;
  border-radius: 0.3rem;
  background-color: #0a95ff;
  border: 1px solid #0a95ff;
  color: #ffffff;
`;
