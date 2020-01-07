import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 70%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const Left = styled.div`
width: 44%;
  @media (max-width: 768px) {
width:100%;
margin: 30px 0;
  }
`;
export const Right = styled.div`
  width: 45%;
  @media (max-width: 768px) {
    width:100%;
    margin: 30px 0;
      }
`;
export const H1 = styled.h1`
  color: ${props => props.theme.colors.black};
`;
export const Para = styled.p`
  color: ${props => props.theme.colors.grey2};
  padding: 30px 0;
`;
export const Img = styled.img`
  width: 95%;
  height: 85%;
`;
