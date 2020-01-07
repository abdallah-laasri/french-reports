import styled from "styled-components";

export const SideContainer = styled.div`
  border: none;
  border-radius: 5px;
  padding: 25px;
  width: 30%;
  height: fit-content;
  display: inline-block;
  box-shadow: 0px 0px 3px 0px ${props => props.theme.colors.grey2};
  margin-top: 117px;

  @media (max-width: 950px) {
    margin:30px 0;
    width: 100%;

      }

`;
export const H1 = styled.h1`
  color: #000;
  font-size: 24px;

  & ~ & {
    margin-top: 60px;
  }
`;
export const SideDiv = styled.div`
  font-size: 17px;
  color: ${props => props.theme.colors.grey2};
  margin: 20px 0;
`;
export const SideBtn = styled.button`
  color: #fff;
  padding: 16px 25px;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 16px;
  margin-top: 20px;
  width: 100%;
  letter-spacing: 1px;
  cursor:pointer;
`;
export const I = styled.i`
  margin-right: 10px;
`;
