import { styled } from "styled-components";

export const ErrorBoundaryContainer = styled.div`
  margin-top: 80px;
`;
export const ErrorBoundaryLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ErrorBoundaryLogo = styled.div`
  height: 350px;
  width: 350px;
  @media screen and (max-width: 480px) {
    height: 230px;
    width: 230px;
  }
`;

export const ErrorBoundaryHeading = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 8px;
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ErrorBoundaryButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
