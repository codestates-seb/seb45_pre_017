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
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ButtonText = styled.div``;
