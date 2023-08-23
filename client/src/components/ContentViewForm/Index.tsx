import React from "react";
import { styled } from "styled-components";
import HTMLReactParser from "html-react-parser";

import ContentVoteBar from "./ContentVoteBar";
import AdditonalButton from "./AdditionalButton";
import WriterProfile from "./WriterProfile";

import { ContentProps } from "../../models/ContentProps";

// test
import { useEffect } from "react";

const ContentViewForm = (props: ContentProps) => {
  const { contentCategory, questionContent, answerContent } = props;

  useEffect(() => {
    console.log(questionContent);
    console.log(answerContent);
  }, []);

  if (contentCategory === "question") {
    return (
      <TotalContainer>
        <ContentVoteBar />
        <MainContainer>
          <MainContent>{questionContent?.content}</MainContent>
          <AssistantContent>
            <AdditonalButton
              contentCategory={contentCategory}
              userID={questionContent?.userId}
            />
            <WriterProfile
              contentCategory="asked"
              postDate={questionContent?.postDate}
            />
          </AssistantContent>
        </MainContainer>
      </TotalContainer>
    );
  }

  if (contentCategory === "answer") {
    return (
      <TotalContainer>
        <ContentVoteBar />
        <MainContainer>
          <MainContent>
            {HTMLReactParser(answerContent?.answerBody as string)}
          </MainContent>
          <AssistantContent>
            <AdditonalButton
              contentCategory={contentCategory}
              userID={answerContent?.userId}
              answerID={answerContent?.answerId}
            />
            <WriterProfile
              contentCategory="answerd"
              postDate={answerContent?.answerDate}
            />
          </AssistantContent>
        </MainContainer>
      </TotalContainer>
    );
  }

  return null;
};

export default ContentViewForm;

const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const MainContainer = styled.div`
  width: 100%;
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
