import React from "react";
import Theme from "./../theme";
import { SideContainer, SideDiv, H1, SideBtn, I } from "./style";

const SideBar = () => {
  return (
    <Theme>
      <SideContainer>
        <H1>How it works?</H1>
        <SideDiv>
          <I className="far fa-check-square"></I>Make your report request
        </SideDiv>
        <SideDiv>
          <I className="far fa-check-square"></I>Choose the day and time
        </SideDiv>
        <SideDiv>
          <I className="far fa-check-square"></I>Get a quote
        </SideDiv>
        <H1>Need help?</H1>
        <SideBtn>Chat with support</SideBtn>
      </SideContainer>
    </Theme>
  );
};

export default SideBar;
