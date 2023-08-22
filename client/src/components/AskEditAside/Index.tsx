import React from "react";
import { styled } from "styled-components";

import { AdviceData } from "./dummyAskAside";

const AskEditAside = () => {
  return (
    <>
      <AsideContainer>
        {AdviceData.map((data: any) => (
          <>
            <TitleSection>
              <Title>{data.title}</Title>
            </TitleSection>
            <ContentsSection>
              {data.contents.map((c: string) => (
                <>
                  <Contents>{c}</Contents>
                </>
              ))}
            </ContentsSection>
          </>
        ))}
      </AsideContainer>
    </>
  );
};

export default AskEditAside;

const AsideContainer = styled.div`
  width: 40%;
  max-width: 300px;
  height: 100%;

  background-color: white;

  margin-left: 20px;

  border: 1px solid #d5d9dc;
  border-radius: 5px;

  box-shadow: 5px 5px 5px #e9eaea;

  overflow: hidden;
`;

const TitleSection = styled.section`
  background-color: #f8f9f9;

  padding: 15px;

  border-bottom: 1px solid #d5d9dc;
`;

const Title = styled.p`
  font-size: 1rem;
`;

const ContentsSection = styled.section`
  padding: 15px 15px 5px 15px;

  border-bottom: 1px solid #d5d9dc;
`;

const Contents = styled.p`
  font-size: 0.8rem;

  padding-bottom: 10px;
`;
