import React from "react";
import Navbar from "./../navbar/index.js";
import styled from "styled-components";
import "./style.css";
import Header from "../header";
import Body from "../body";
import Side from "../sidebar";

const Wrapper = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 950px) {
    flex-direction:column-reverse;
      }
`;

const Index = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Wrapper>
        <Body />
        <Side />
      </Wrapper>
    </>
  );
};

export default Index;
