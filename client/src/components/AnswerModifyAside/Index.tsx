import React from "react";
import { styled } from "styled-components";

import { answerDummy } from "./dummy";

const AnswerModifyAside = () => {
  return (
    <>
      <AsideContainer>
        <Body>
          <TitleSection>
            <Title>{answerDummy.title}</Title>
          </TitleSection>
          <ListSection>
            {answerDummy.list.map((l: string) => (
              <>
                <AdviceList>{l}</AdviceList>
              </>
            ))}
          </ListSection>
        </Body>
      </AsideContainer>
    </>
  );
};

export default AnswerModifyAside;

const AsideContainer = styled.div`
  width: 70%;

  margin-left: 20px;
  margin-top: -20px;
`;

const Body = styled.body`
  border: 1px solid #f1e5bb;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.section`
  padding: 10px;

  background-color: #fbf3d5;
`;

const Title = styled.p`
  font-size: 0.85rem;
`;

const ListSection = styled.ul`
  padding: 10px 10px 10px 20px;

  background-color: #fdf7e2;
`;

const AdviceList = styled.li`
  margin: 10px;

  font-size: 0.85rem;
`;
