import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 63%;
  /* border: 1px solid; */
  @media (max-width: 950px) {
    width:100%;
    margin:30px 0;
      }
`;
export const Row = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
export const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction:column;
    align-items: start;
      }
`;
export const Circle = styled.div`
  display: inline-block;
  // text-align: center;
  position:relative;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.blue};
  margin-right: 45px;
  color: #fff;
  // line-height: 1.7;
  @media (max-width: 950px) {
    margin-right: 20px;
      }

`;
export const Span = styled.span`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const H1 = styled.h1`
  font-size: 24px;
  margin-bottom: 45px;
  margin-top: 6px;
`;
export const Radio = styled.input`
  visibility: hidden;
  cursor: pointer;
  display:none;
`;
export let Check = styled.div`
  border: 1px solid ${props => props.theme.colors.grey2};
  border-radius: 50%;
  width: 17px;
  height: 17px;
  position: relative;
  margin-right:12px;
  &:after {
    position: absolute;
    background-color: ${({ ischecked }) => (ischecked ? "blue" : "transparent")};
    border-radius: 50%;
    width: 9px;
    height: 9px;
    content: "";
    top: 3px;
    left: 3px;
  }
`;
export const Label = styled.label`
  font-size: 17px;
  color: ${props => props.theme.colors.grey2};
  cursor: pointer;

  /* &:checked {
    color: #0dff92;
  } */
`;
export const Line = styled.hr`
  margin-top: 50px;
  border: none;
  background-color: ${props => props.theme.colors.grey2};
  height: 1px;
  display: flex;
  justify-content: end;
`;
export const RadioDiv = styled.div`
  display: flex;
  align-items:center;
  cursor:pointer;
  @media (max-width: 1200px) {
    margin:12px 0;
      }
`;
export const RowDiv = styled.div`
  width: 90%;
  position: relative;
`;
export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  padding: 15px;
  color: ${props => props.theme.colors.grey2};
  box-shadow: 0px 0px 3px 0px #9a99a3;
`;
export const Textarea = styled.textarea`
  height: 107px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px ${props => props.theme.colors.grey2};
  border: none;
  font-size: 0.8em;
  color: ${props => props.theme.colors.grey2};
  padding: 10px;
  resize: none;
`;
export const Submit = styled.input`
  color: #fff;
  padding: 16px 25px;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 16px;
  float: right;
  margin-bottom: 50px;
  letter-spacing: 1px;
  cursor:pointer;

  @media (max-width: 950px) {
    float:none;
      }
`;
export const Calendar = styled.i`
  position: absolute;
  top: 100px;
  right: 10px;
  color: ${props => props.theme.colors.grey2};
  @media (max-width: 415px) {
    top:130px;
      }
`;
