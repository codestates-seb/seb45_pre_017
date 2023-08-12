import React from "react";
import { styled } from "styled-components";

const FirsteSectionTitle = ({ title }: OwnProps) => {
  return <Title>{title}</Title>;
};

export default FirsteSectionTitle;

// tpye 정의
interface OwnProps {
  title: string;
}

// component 생성
const Title = styled.div`
  background-color: #fbf3d4;
  color: #5e5e52;
  height: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-top: 1px solid #ece5cc;
  border-bottom: 1px solid #ece5cc;
  font-size: 12px;
  font-weight: bolder;
`;
