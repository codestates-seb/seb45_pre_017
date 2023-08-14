import React from "react";
import { styled } from "styled-components";

const ContentVoteBar = () => {
  return (
    <Container>
      <VoteButton></VoteButton>
      <VoteButton></VoteButton>
    </Container>
  );
};

export default ContentVoteBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 44.781px;
`;

const VoteButton = styled.button`
  width: 38.781px;
  height: 38.781px;
  margin: 2px;
`;
