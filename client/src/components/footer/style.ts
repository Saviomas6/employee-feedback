import styled from "styled-components";
export const FooterContainer = styled.div`
  background-color: #13131d;
  height: 80px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;
export const FooterContent = styled.div`
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-size: 600;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
