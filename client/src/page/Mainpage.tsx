import React from "react";
import { styled } from "styled-components";

import { mainData } from "../components/PostList/DummyData";
import Post from "../components/PostList/Index";
import AskQuestionButton from "../components/AskQuestionButton/Index";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar/Index";
import Footer from "../components/Footer";

const title = "Top Questions";
const filter = ["Interesting", "Bountied", "Hot", "Week", "Month"];

const Mainpage = () => {
  return (
    <>
      <MainContainer>
        <Body>
          <LeftSidebar />
          <ContentsSection>
            <Posts>
              <TitleSection>
                <Title>{title}</Title>
                <AskQuestionButton />
              </TitleSection>
              <FilterSection>
                <FilterButtons>
                  {filter.map((f: string) => (
                    <>
                      <FilterButton filter={f}>{f}</FilterButton>
                    </>
                  ))}
                </FilterButtons>
              </FilterSection>
              <div className="postList">
                {mainData.map(d => (
                  <>
                    <Post Data={d} />
                  </>
                ))}
              </div>
            </Posts>
            <RightSidebar />
          </ContentsSection>
        </Body>
        <Footer />
      </MainContainer>
    </>
  );
};

export default Mainpage;

const MainContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
`;

const ContentsSection = styled.section`
  width: 100%;
  margin: 20px 0px 20px 0px;

  display: flex;
  flex-direction: row;
`;

const Posts = styled.section`
  width: 80%;

  margin-right: 20px;

  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.section`
  padding: 0px 10px 10px 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: normal;
`;

const FilterSection = styled.section`
  padding: 5px 10px 15px 10px;

  border-bottom: 1px solid #d6d9dc;

  display: flex;
  flex-direction: row;
  justify-content: end;
`;

const FilterButtons = styled.div`
  border: 1px solid #b0b6ba;
  border-radius: 5px;
`;

interface FilterProps {
  filter: string;
}

const FilterButton = styled.button<FilterProps>`
  font-size: 0.8rem;

  padding: 10px 5px 10px 5px;

  border: 0;
  border-left: ${props =>
    props.filter === "Interesting" ? "0" : "1px solid #b0b6ba"};
  background-color: ${props =>
    props.filter === "Interesting" ? "#e4e5e7" : "transparent"};

  &:hover {
    cursor: pointer;
  }
`;
