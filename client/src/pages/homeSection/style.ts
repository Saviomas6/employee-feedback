import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const LeftContainerDescription = styled.div`
  font-size: 24px;
  color: #fff;
  @media screen and (max-width: 1024px) {
    font-size: 21px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 600px;
  @media screen and (max-width: 1024px) {
    height: 400px;
    width: 400px;
  }
  @media screen and (max-width: 480px) {
    height: 230px;
    width: 230px;
  }
`;

export const HomepageCardHeading = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin: 10px 0;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HomepageCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 30px 0;
  grid-gap: 30px;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
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
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
export const HomepageVisionLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HomepageVisionLeftImageContainer = styled.div`
  height: 450px;
  width: 450px;
  @media screen and (max-width: 500px) {
    height: 230px;
    width: 230px;
  }
`;
export const HomepageVisionRightContainer = styled.div``;

export const HomepageVisionLeftBoxContainer = styled.div`
  background-color: #212332;
  color: #fff;
  border-radius: 20px;
  padding: 20px;
  margin: 16px 0;
  div {
    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const HomePageRightMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
