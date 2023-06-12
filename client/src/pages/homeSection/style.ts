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
  color: #ff008e;
  /* animation: ${effect} 8s linear infinite; */
`;

export const LeftContainerDescription = styled.div`
  font-size: 24px;
  color: #fff;
`;

export const RightContainer = styled.div`
  height: 600px;
  width: 600px;
`;

export const HomepageCardHeading = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin: 10px 0;
  color: #fff;
`;

export const HomepageCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 30px 0;
  grid-gap: 30px;
`;

export const HomepageButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0;
`;

export const HomepageVisionMainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 20px;
  margin: 50px 0;
`;
export const HomepageVisionLeftContainer = styled.div``;
export const HomepageVisionLeftImageContainer = styled.div`
  height: 450px;
  width: 450px;
`;
export const HomepageVisionRightContainer = styled.div``;

export const HomepageVisionLeftBoxContainer = styled.div`
  background-color: #212332;
  color: #fff;
  border-radius: 20px;
  padding: 20px;
  margin: 16px 0;
`;
