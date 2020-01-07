import React from "react";
import Theme from "../theme";
import { HeaderContainer, H1, Para, Left, Right, Img } from "./style";
import Reports from "./../images/report.svg";

const Header = () => {
  return (
    <Theme>
      <HeaderContainer>
        <Left>
          <H1>The platform for requesting reports across France.</H1>
          <Para>
            Get any type of report, we'll kept them securety for 10 years.
          </Para>
        </Left>
        <Right>
          <Img src={Reports}></Img>
        </Right>
      </HeaderContainer>
    </Theme>
  );
};
export default Header;
