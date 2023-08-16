import React from "react";
import { styled } from "styled-components";

import ContentVoteBar from "./ContentVoteBar";
import EditButton from "./EditButton";
import WriterProfile from "./WriterProfile";
import Comment from "./Comment";

import { ContentProps } from "../../models/ContentProps";

const ContentViewForm = (props: ContentProps) => {
  const { contentCategory, content } = props;

  return (
    <TotalContainer>
      <ContentVoteBar />
      <MainContainer>
        <MainContent>
          {content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </MainContent>
        <AssistantContent>
          <EditButton />
          <WriterProfile contentCategory={contentCategory} />
        </AssistantContent>
        <Comment />
      </MainContainer>
    </TotalContainer>
  );
};

export default ContentViewForm;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
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
