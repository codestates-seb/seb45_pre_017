import React from "react";
import { styled } from "styled-components";

import { dummyDamain } from "./dummyDomain";

const DomainList = () => {
  return (
    <TotalContainer>
      {dummyDamain.map(content => (
        <Content
          key={content.domain}
          logoImg={content.logo}
          domain={content.domain}
        />
      ))}
    </TotalContainer>
  );
};

export default DomainList;

const Content = (props: contentProps) => {
  const { logoImg, domain } = props;
  return (
    <Container>
      <Logo src={logoImg} />
      <Domain>{domain}</Domain>
    </Container>
  );
};

interface contentProps {
  logoImg: string;
  domain: string;
}

const TotalContainer = styled.ul`
  padding-bottom: 8px;
  border-bottom: 1px solid #d9dbdc;
`;

const Container = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const Logo = styled.img`
  width: 16px;
  height: 16px;
`;

const Domain = styled.div`
  font-size: 15px;
  color: #0074cc;
  margin: 4px;
`;
