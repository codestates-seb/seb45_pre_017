import React from "react";
import { styled } from "styled-components";

import DomainList from "./DomainList";
import Buttons from "./Buttons";

const waringText: string = `If you’re on a shared computer, remember to log out of your Open ID provider (Facebook, Google, Stack Exchange, etc.) as well.`;

const LogoutBox = () => {
  return (
    <Container>
      <DomainList />
      <Buttons />
      <WaringText>{waringText}</WaringText>
    </Container>
  );
};

export default LogoutBox;

const Container = styled.div`
  width: 316px;
  text-align: center;
  border-radius: 0.5rem;
  padding: 24px;
  background-color: #ffff;
  box-shadow: 0px 0.5px 15px rgba(163, 161, 161, 0.31);
`;

const WaringText = styled.div`
  text-align: start;
  color: #6a7c7c;
  font-size: 12px;
  margin-top: 32px;
  font-weight: 500;
`;
