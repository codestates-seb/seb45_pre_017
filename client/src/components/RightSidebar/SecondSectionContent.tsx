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
  display: flex;
  flex-direction: column;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Logo = styled.img``;

const Information = styled.div`
  flex: 8 0 0;
`;

const Name = styled.div``;

const Followers = styled.div`
  font-size: 0.9rem;
`;

const JoinButton = styled.button`
  flex: 1.5 0 0;
`;

const Description = styled.div``;
