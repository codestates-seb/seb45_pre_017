import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const buttonText: string = "Ask Question";

const AskQuestionButton = () => {
  return (
    <div className="buttonContainer">
      <Link to={"/questions/ask"}>
        <AskButton>{buttonText}</AskButton>
      </Link>
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
