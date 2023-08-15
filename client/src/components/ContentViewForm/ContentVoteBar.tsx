import React from "react";
import { styled } from "styled-components";

const dummyResult: number = 0;

const ContentVoteBar = () => {
  return (
    <Container>
      <VoteButton>
        <ButtonContent direction="UP" />
      </VoteButton>
      <VoteResultNum>{dummyResult}</VoteResultNum>
      <VoteButton>
        <ButtonContent direction="Down" />
      </VoteButton>
    </Container>
  );
};

export default ContentVoteBar;

// type 정의
interface ButtonContentProps {
  direction: string;
}

// component 생성
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
`;

const VoteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38.781px;
  height: 38.781px;
  margin: 2px;
  border-radius: 50%;
  background-color: #ffff;
  border: 1px solid #d7d8d9;

  &:hover {
    background-color: rgba(239, 217, 205, 1);
  }
`;

const ButtonContent = styled.div<ButtonContentProps>`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid black;
  transform: ${props => (props.direction === "UP" ? "none" : "rotate(180deg)")};
`;

const VoteResultNum = styled.div`
  width: 40.797px;
  height: 24.844;
  padding-top: 4px;
  padding-bottom: 4px;
  margin: 2px;
  font-size: 19px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
