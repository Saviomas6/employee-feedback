import { styled } from "styled-components";

export const NotFoundMainContainer = styled.div``;
export const NotFoundImageMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NotFoundImageContainer = styled.div`
  height: 350px;
  width: 350px;
  @media screen and (max-width: 480px) {
    height: 230px;
    width: 230px;
  }
`;
export const Heading = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 40px;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
export const Description = styled.div`
  color: #fff;
  text-align: center;
  font-size: 22px;
  margin: 20px 0;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
