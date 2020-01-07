import styled from "styled-components";

export const NBcontainer = styled.div`
  border-bottom: 1px solid #e0dfe6;
  text-transform: capitalize;
`;
export const Wrapper = styled.div`
  display: flex;
  // flex-wrap: wrap;
  padding: 30px 0;
  margin: auto;
  width: 70%;
  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    width:85%;
    flex-direction:column;

  }
`;
export const Link = styled.div`
  color: ${props => props.theme.colors.black};
  padding: 0 20px;
  font-size: 20px;
  cursor:pointer;
  @media (max-width: 768px) {
    width:100%;
    background-color: #eceaf1;
    padding:12px 0;
    margin:2px;
  }
`;
export const I = styled.i`
  padding-right: 20px;
`;
export const II = styled.i`
  font-family: none;
  color: #e0dfe6;
  padding: 0 20px;
  @media (max-width: 768px) {
    display:none;
  }
`;
export const III = styled.i`
  margin-left: 19px;
  font-size: 13px;
`;
export const Left = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    // display:none;
    width:100%;
    flex-direction:column;
    
  }
`;
export const Right = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
  width:100%;
  justify-content: center;
  margin-top:12px;
  }
`;
export const SignBTN = styled.button`
  color: #fff;
  padding: 16px 25px;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 16px;
  letter-spacing: 1px;
  cursor:pointer;
`;
export const Bars = styled.i`
  display:none;
  // position:absolute;
  // left:50px;
  // top:50px;
  font-size:2em;
  cursor:pointer;
  
  @media (max-width: 768px) {
    display:block;
  }
`;