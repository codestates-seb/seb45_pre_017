import React from "react";
import { styled } from "styled-components";

const buttonText: string = "Join";

const SecondSectionContent = (props: OwnProps) => {
  const { img, brandName, followers, description } = props;

  return (
    <Container>
      <Brand>
        <Logo src={img} />
        <Information>
          <Name>{brandName}</Name>
          <Followers>{followers}</Followers>
        </Information>
        <JoinButton>{buttonText}</JoinButton>
      </Brand>
      <Description>{description}</Description>
    </Container>
  );
};

export default SecondSectionContent;

// type 정의
interface OwnProps {
  img: string;
  brandName: string;
  followers: string;
  description: string;
}

// component 생성
const Container = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1px solid #d7d8d9;
  display: flex;
  flex-direction: column;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 43px;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

const Information = styled.div`
  flex: 8 0 0;
`;

const Name = styled.div`
  font-size: 15px;
  color: #6a737c;
`;

const Followers = styled.div`
  font-size: 12px;
  color: #3b4045;
`;

const JoinButton = styled.button`
  width: 42.2px;
  height: 33px;
  background-color: white;
  border: 1px solid #0074cc;
  border-radius: 0.2rem;
  color: #0074cc;
  font-size: 12px;
`;

const Description = styled.div`
  font-size: 13px;
  color: #3b4045;
`;
