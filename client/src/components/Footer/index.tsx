import React from "react";
import styled from "styled-components";
import Logo from "../../asset/stack-overflow.png";

const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <LogoBox>
          <LogoImg src={Logo} alt="logo" />
        </LogoBox>
        <SectionBox>
          <Section>
            <Title>STACK OVERFLOW</Title>
            <Contents>
              <Content>Questions</Content>
              <Content>Help</Content>
            </Contents>
          </Section>
          <Section>
            <Title>PRODUCTS</Title>
            <Contents>
              <Content>Teams</Content>
              <Content>Advertising</Content>
              <Content>Collectives</Content>
              <Content>Talent</Content>
            </Contents>
          </Section>
          <Section>
            <Title>COMPANY</Title>
            <Contents>
              <Content>About</Content>
              <Content>Press</Content>
              <Content>Work Here</Content>
              <Content>Legal</Content>
              <Content>Privacy Policy</Content>
              <Content>Terms of Service</Content>
              <Content>Contact Us</Content>
              <Content>Cookie Settings</Content>
              <Content>Cookie Policy</Content>
            </Contents>
          </Section>
          <Section>
            <Title>STACK EXCHANGE NETWORK</Title>
            <Contents>
              <Content>Technology</Content>
              <Content>Culture & recreation</Content>
              <Content>Life & arts</Content>
              <Content>Science</Content>
              <Content>Professional</Content>
              <Content>Business</Content>
              <Content>API</Content>
              <Content>Data</Content>
            </Contents>
          </Section>
          <ClosingArticle>
            <ClosingContents>
              <Content>Blog</Content>
              <Content>Facebook</Content>
              <Content>Twitter</Content>
              <Content>Linkedin</Content>
              <Content>Instagram</Content>
            </ClosingContents>
            <Content>
              Site design / logo © 2023 Stack Exchange Inc; user contributions
              licensed under CC BY-SA. rev 2023.8.10.43574
            </Content>
          </ClosingArticle>
        </SectionBox>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100vw;

  padding: 25px;

  background-color: #1d1e21;

  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
  transform: translateY(0%);
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const SectionBox = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  max-width: 37px;
  height: 37px;

  padding-right: 20px;
  padding-bottom: 20px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 13px;
  font-weight: bold;

  padding-bottom: 10px;

  color: #babfc3;
`;

const Contents = styled.article`
  display: flex;
  flex-direction: column;
`;

const Content = styled.span`
  font-size: 13px;

  padding-top: 5px;
  padding-right: 10px;

  color: #babfc3;
  opacity: 0.8;
`;

const ClosingArticle = styled.article`
  max-width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ClosingContents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
