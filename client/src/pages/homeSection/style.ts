import { styled } from "styled-components";
import { effect } from "../../styles/sharedStyles";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px 0;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LeftContainerHeading = styled.div`
  font-size: 70px;
  font-weight: 700;
  color: #fff;
  animation: ${effect} 5s linear infinite;
`;

export const LeftContainerDescription = styled.div`
  font-size: 24px;
  color: #fff;
`;

export const RightContainer = styled.div`
  height: 600px;
  width: 600px;
`;
