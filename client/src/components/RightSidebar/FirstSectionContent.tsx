import React from "react";
import { styled } from "styled-components";

const FirstSectionContent = (props: OwnProps) => {
  const { img, text } = props;

  return (
    <ContentContainer>
      <Icon src={img} />
      <TextContent>{text}</TextContent>
    </ContentContainer>
  );
};

export default FirstSectionContent;

// type 선언
interface OwnProps {
  img: string;
  text: string;
}

// component 생성
const ContentContainer = styled.div`
  font-size: 13px;
  color: #3f403a;
  font-weight: 550;
  margin-top: 12px;
  margin-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const Icon = styled.img`
  flex: 1 0 0;
  max-width: 14px;
  height: 14px;
`;

const TextContent = styled.div`
  flex: 9 0 0;
`;
