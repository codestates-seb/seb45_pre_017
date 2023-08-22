import React from "react";
import { styled } from "styled-components";

// questionContentPage 연결
import { Link } from "react-router-dom";

const voteText = " votes";
const answersText = " answers";

const Post = (props: { Data: Props }) => {
  const { nickname, userImage, title, votes, answers, tag, createdAd } =
    props.Data;

  return (
    <>
      <PostContainer>
        <InfoSection>
          <Vote>
            {votes}
            {voteText}
          </Vote>
          <Answer answers={answers}>
            {answers}
            {answersText}
          </Answer>
        </InfoSection>
        <ContentsSection>
          <Link to={`posts/1`}>
            <Title>{title}</Title>
          </Link>
          <Tags>
            {tag.map((t: string) => (
              <>
                <Tag> {t} </Tag>
              </>
            ))}
          </Tags>
          <UserSection>
            <UserImg src={userImage} alt={nickname} />
            <Nickname>{nickname}</Nickname>
            <Time>{createdAd}</Time>
          </UserSection>
        </ContentsSection>
      </PostContainer>
    </>
  );
};

export default Post;

interface Props {
  id: number;
  nickname: string;
  userImage: string;
  title: string;
  votes: number;
  answers: number;
  tag: any[];
  createdAd: string;
}

const PostContainer = styled.div`
  width: 100%;

  padding: 20px 0px 20px 20px;

  border-bottom: 1px solid #d6d9dc;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const InfoSection = styled.section`
  padding: 10px;

  display: flex;
  flex-direction: column;
`;

const Vote = styled.span`
  font-size: 0.85rem;
  color: black;

  padding: 3px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

interface AnswerProps {
  answers: number;
}

const Answer = styled.span<AnswerProps>`
  font-size: 0.85rem;

  padding: 4px 4px 1px 4px;

  color: ${props => (props.answers > 0 ? "green" : "gray")};
  border: ${props => (props.answers > 0 ? "1px solid green" : 0)};
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ContentsSection = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: normal;
  color: #0074cc;

  &:hover {
    cursor: pointer;
    color: #0a88e8;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tag = styled.button`
  font-size: 0.8rem;
  color: #3e769e;

  margin: 5px 5px 10px 0px;

  padding: 5px 7px 5px 7px;

  border: 0;
  border-radius: 5px;

  background-color: #e1ecf4;

  &:hover {
    cursor: pointer;
    background-color: #c2dae9;
  }
`;

const UserSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const UserImg = styled.img`
  width: 16px;
  height: 16px;

  margin-right: 2px;

  border: 0;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const Nickname = styled.span`
  font-size: 12px;
  color: #0074cc;

  margin: 2px;

  &:hover {
    cursor: pointer;
    color: #1c92ed;
  }
`;

const Time = styled.span`
  font-size: 12px;
  color: gray;

  margin: 2px;

  &:hover {
    cursor: pointer;
    color: #5f5d5d;
  }
`;
