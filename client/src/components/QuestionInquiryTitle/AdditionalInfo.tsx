import React from "react";
import { styled } from "styled-components";

interface OwnProps {
  infoName: string;
  info: string;
}

const AdditionalInfo = (props: OwnProps) => {
  const { infoName, info } = props;

  return (
    <Container>
      <InfoName>{infoName}</InfoName>
      <Information>{info}</Information>
    </Container>
  );
};

export default AdditionalInfo;

const Container = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const InfoName = styled.span`
  color: #6a737c;
`;

const Information = styled.span`
  color: #232629;
`;
