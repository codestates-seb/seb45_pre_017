import React from "react";
import { styled } from "styled-components";

import DummyImg from "../../asset/ContentViewForm-DummyProfile.jpeg";
const dummyName: string = "mikeymo";

const WriterProfile = (props: OwnProps) => {
  const { contentCategory, postDate } = props;

  return (
    <Container>
      <ContentInfo>
        <span className="contentCategory">{contentCategory}</span>
        <span className="registrationDate">{postDate}</span>
      </ContentInfo>
      <WriterInfo>
        <ProfileImg src={DummyImg} alt="Writer Profile Image" />
        <Nickname>{dummyName}</Nickname>
      </WriterInfo>
    </Container>
  );
};

export default WriterProfile;

interface OwnProps {
  contentCategory: string;
  postDate?: string;
}

const Container = styled.div`
  width: 187px;
  height: auto;
  padding-left: 7px;
  padding-right: 6px;
  padding-top: 5px;
  padding-bottom: 7px;
  background-color: #d8eaf6;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 1px;
  font-size: 12px;
  color: #6a737c;
`;

const WriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2px;
`;

const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
`;

const Nickname = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #2170ab;
`;
