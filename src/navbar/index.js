import React from "react";
import Theme from "./../theme";
import {
  NBcontainer,
  SignBTN,
  Left,
  Right,
  Link,
  I,
  II,
  III,
  Wrapper,
  Bars
} from "./style";

const Navbar = () => {
  return (
    <Theme>
      <NBcontainer>
        <Wrapper>
        {/* <Bars className="fas fa-bars"></Bars> */}
          <Left>
            <Link>
              <I className="fas fa-long-arrow-alt-left"></I>go back
            </Link>
            <II>|</II>
            <Link>get report</Link>
            <Link>others products</Link>
          </Left>
          <Right>
            <SignBTN>
              Sign in<III className="fas fa-user"></III>
            </SignBTN>
          </Right>
        </Wrapper>
      </NBcontainer>
    </Theme>
  );
};

export default Navbar;
