import { styled } from "styled-components";

export const HomepageCardMainContainer = styled.div`
  height: 300px;
  background-color: #212332;
  color: #fff;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const HomePageImageContainer = styled.div<{ color: string }>`
  height: 80px;
  width: 80px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
`;

export const HomePageTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
