import { styled } from "styled-components";

export const LoadingSpinnerMainContainer = styled.div<{ height?: string }>`
  height: ${({ height }) => height || "70vh"};
  display: grid;
  place-items: center;
`;
export const LoadingSpinnerContainer = styled.div`
  height: 250px;
  width: 250px;
`;
