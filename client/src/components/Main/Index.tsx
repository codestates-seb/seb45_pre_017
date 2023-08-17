import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { mainData } from "./DummyData";
import Post from "./Post";
import AskQuestionButton from "../AskQuestionButton/Index";
import RightSidebar from "../RightSidebar/Index";

const title = "Top Questions";
const filter = ["Interesting", "Bountied", "Hot", "Week", "Month"];

const Main = () => {
  const navigate = useNavigate();

  const pageNavigate = (pageId: number) => {
    navigate(`/post/${pageId}`);
  };

  return (
    <>
      <MainContainer>
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
          {mainData.map(d => (
            <>
              <Post Data={d} page={pageNavigate} />
            </>
          ))}
        </Posts>
        <RightSidebar />
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div`
  /* max-width: 80vw; */

  display: flex;
  flex-direction: row;
`;

const Posts = styled.section`
  width: 70%;

  margin-right: 20px;

  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.section`
  padding: 20px 10px 10px 10px;

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
