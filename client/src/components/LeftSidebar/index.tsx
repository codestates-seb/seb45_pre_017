import React from "react";
import { styled } from "styled-components";

const LeftSidebar = () => {
  return (
    <Sidebar>
      <Content>zz</Content>
    </Sidebar>
  );
};

export default LeftSidebar;

const Sidebar = styled.aside`
  position: sticky;
  top: 0;
  width: 164px;
  background-color: #f8d2d2;
  overflow: hidden;
`;

const Content = styled.div`
  position: sticky;
  top: 0;
  min-height: 100vh; /* Changed min-height to 100vh for viewport height */
  overflow: auto;
  padding: 10px; /* Added padding for better visualization */
`;
