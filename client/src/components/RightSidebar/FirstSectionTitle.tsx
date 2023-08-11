import React from "react";
import { styled } from "styled-components";

interface OwnProps {
  title: string;
}

const FirsteSectionTitle = (props: OwnProps) => {
  const { title } = props;

  return <Title>{title}</Title>;
};

export default FirsteSectionTitle;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bolder;
`;
