import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #212332;
  color: #fff;
  height: 280px;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
export const FeedbackText = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const CardReviewResult = styled.div<{ colorCode?: string }>`
  font-size: 24px;
  font-weight: 500;
  margin-top: 30px;
  text-align: center;
  color: ${({ colorCode }) => colorCode};
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const AnonymousLabel = styled.div`
  background-color: #fff;
  height: 20px;
  width: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 5px;
  border-radius: 100%;
  @media screen and (max-width: 480px) {
    height: 16px;
    width: 16px;
  }
`;
