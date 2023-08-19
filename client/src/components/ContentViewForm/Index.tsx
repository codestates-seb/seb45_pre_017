import React from "react";
import { styled } from "styled-components";

import ContentVoteBar from "./ContentVoteBar";
import AdditonalButton from "./AdditionalButton";
import WriterProfile from "./WriterProfile";

import { ContentProps } from "../../models/ContentProps";

const ContentViewForm = (props: ContentProps) => {
  const { contentCategory, content } = props;

  return (
    <TotalContainer contentCategory={contentCategory}>
      <ContentVoteBar />
      <MainContainer>
        <MainContent>
          {content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </MainContent>
        <AssistantContent>
          <AdditonalButton />
          <WriterProfile contentCategory={contentCategory} />
        </AssistantContent>
      </MainContainer>
    </TotalContainer>
  );
};

export default ContentViewForm;

interface ContainerProps {
  contentCategory: string;
}

const TotalContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => props.contentCategory === "question" && "8px"};
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    margin-bottom: 16.5px;
  }
`;

const MainContent = styled.div`
  padding-right: 16px;
  font-size: 15px;
`;

const AssistantContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
`;
