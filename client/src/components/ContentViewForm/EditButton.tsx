import React from "react";
import { styled } from "styled-components";

const buttonText: string = "Edit";

const EditButton = () => {
  return <Container>{buttonText}</Container>;
};

export default EditButton;

const Container = styled.div`
  font-size: 13px;
  color: #6a737c;
`;
