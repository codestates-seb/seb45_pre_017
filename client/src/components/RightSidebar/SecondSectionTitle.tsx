import React from "react";
import { styled } from "styled-components";

const title: string = "Collectives";
const buttonText: string = "see all";

const SecondSectionTitle = () => {
  return (
    <Container>
      <Title>{title}</Title>
      <ButtonText>{buttonText}</ButtonText>
    </Container>
  );
};

export default SecondSectionTitle;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 19.5px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f8f9f9;
  border-bottom: 1px solid #d7d8d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #525960;
`;

const ButtonText = styled.div`
  font-size: 11px;
  color: #0074cc;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
