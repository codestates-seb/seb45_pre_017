import React, { useState } from "react";
import styled from "styled-components";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { svgbag, svgstar } from "./LeftSidebarSvg";

const LeftSidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  return (
    <Sidebar>
      <SidebarContainer>
        <HomeContainer
          className={`category ${selectedMenu === "Home" ? "selected" : ""}`}
          onClick={() => setSelectedMenu("Home")}
        >
          Home
        </HomeContainer>
        <PublicContainer className="category">
          PUBLIC
          <ul>
            <li
              className={`list-question  ${
                selectedMenu === "Questions" ? "selected" : ""
              }`}
              onClick={() => setSelectedMenu("Questions")}
            >
              <FaGlobeAmericas size={15} /> Questions
            </li>
            <li
              className={`list-li  ${
                selectedMenu === "Tags" ? "selected" : ""
              }`}
              onClick={() => setSelectedMenu("Tags")}
            >
              {" "}
              Tags
            </li>
            <li
              className={`list-li ${
                selectedMenu === "Users" ? "selected" : ""
              }`}
              onClick={() => setSelectedMenu("Users")}
            >
              {" "}
              Users
            </li>
            <li
              className={`list-li ${
                selectedMenu === "Companies" ? "selected" : ""
              }`}
              onClick={() => setSelectedMenu("Companies")}
            >
              {" "}
              Companies
            </li>
          </ul>
        </PublicContainer>
        <CollectiveContainer className="category">
          Collective
          <AiFillInfoCircle />
          <div className="menu">
            {" "}
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="rgb(242, 116, 13)"
            >
              <path d={svgstar}></path>
            </svg>
            <TextWrapper> Explore Collectives</TextWrapper>
          </div>
        </CollectiveContainer>
        <TeamsContainer className="category">
          Teams
          <AiFillInfoCircle />
          <div className="menu">
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="rgb(242, 116, 13)"
            >
              <path d={svgbag}></path>
            </svg>
            <TextWrapper>Create free Team</TextWrapper>
          </div>
        </TeamsContainer>
      </SidebarContainer>
    </Sidebar>
  );
};

export default LeftSidebar;

const Sidebar = styled.div`
  float: left;
  display: flex;
  height: auto;
  overflow: hidden;
  border-right: 1px solid #d4d4d4;
  min-width: 164px;
  color: #6a737c;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SidebarContainer = styled.div`
  padding-top: 20px;
  display: flex;
  width: 164px;
  height: 100vh;
  font-size: 11px;
  color: var(--fc-light);
  flex-direction: column;
  margin-left: 4px;

  .category {
    width: 100%;
    text-align: start;
    padding: 8px 30px 20px 10px;
  }
  .category.selected,
  .list-li.selected,
  .list-question.selected {
    background-color: #f4f4f4;
    color: black;
    border-right: 3px solid #fe7214;
    font-weight: bold;
  }
`;

const TextWrapper = styled.div`
  display: flex;

  :hover {
    color: var(--fc-dark);
  }
`;

const HomeContainer = styled.div`
  align-items: left;
  font-size: 13px;
  color: var(--black-900);
  :hover {
    color: var(--fc-dark);
  }
`;

const PublicContainer = styled.div`
  ul {
    list-style: none;
    padding: 8px 5px 8px 0;

    .list-li {
      padding-left: 33px;
    }
  }

  li {
    padding: 6px 0px;
    padding-left: 15px;
    font-size: 13px;

    /* &.selected {
      background-color: #f4f4f4; // 선택된 메뉴의 배경색
      color: var(--black-900); // 선택된 메뉴의 텍스트 색상
      border-right: 3px solid #fe7214;
    } */
  }
`;

const CollectiveContainer = styled.div`
  .menu {
    padding: 6px 0;
    font-size: 13px;
    display: flex;
  }
`;

const TeamsContainer = styled.div`
  .menu {
    padding: 5px 0;
    font-size: 13px;
    display: flex;
  }
`;
