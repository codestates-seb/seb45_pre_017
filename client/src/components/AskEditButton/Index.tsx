import React from "react";
import { styled } from "styled-components";

const buttonText = "Review your question";

const AskEditButton = (props: any) => {
  return (
    <>
      <Button onClick={() => props.posting()}>{buttonText}</Button>
    </>
  );
};

export default AskEditButton;

const Button = styled.button`
  color: white;
  background-color: #0995ff;

  margin-top: 20px;
  margin-bottom: 20px;

  padding: 10px;

  border: 0;
  border-radius: 5px;

  &: hover {
    cursor: pointer;
    background-color: #095691;
  }
`;
