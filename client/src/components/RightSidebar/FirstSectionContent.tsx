import React from "react";
import { styled } from "styled-components";

const FirstSectionContent = (props: ownProps) => {
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
interface ownProps {
  img: string;
  text: string;
}

// component 생성
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.img`
  flex: 1 0 0;
  max-width: 15px;
  height: 15px;
`;

const TextContent = styled.div`
  flex: 9 0 0;
`;
