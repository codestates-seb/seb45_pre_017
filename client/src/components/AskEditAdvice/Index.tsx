import React from "react";
import { styled } from "styled-components";

import { dummyAdvice } from "./dummyAdvice";

const AskEditAdvice = () => {
  return (
    <>
      <AdviceBox>
        <AdviceTitle>{dummyAdvice.title}</AdviceTitle>
        {dummyAdvice.subTitle.map((s: string) => (
          <>
            <AdviceSubTitle>{s}</AdviceSubTitle>
          </>
        ))}
        <StepsTitle>{dummyAdvice.stepsTitle}</StepsTitle>
        <AdviceUl>
          {dummyAdvice.steps.map((a: string) => (
            <>
              <AdviceLi>{a}</AdviceLi>
            </>
          ))}
        </AdviceUl>
      </AdviceBox>
    </>
  );
};

export default AskEditAdvice;

const AdviceBox = styled.div`
  background-color: #ebf4fb;

  padding: 25px;

  border: 1px solid #a6ceed;
  border-radius: 7px;
`;

const AdviceTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;

  padding-bottom: 8px;
`;

const AdviceSubTitle = styled.p`
  font-size: 0.92rem;
`;

const StepsTitle = styled.h5`
  font-size: 0.9rem;

  padding-top: 15px;
`;

const AdviceUl = styled.ul`
  font-size: 0.88rem;

  padding: 10px 20px 0px 30px;
`;

const AdviceLi = styled.li`
  padding-bottom: 2px;
`;
