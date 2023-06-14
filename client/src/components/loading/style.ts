import { styled } from "styled-components";

export const LoadingSpinnerMainContainer = styled.div<{ height?: string }>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  display: grid;
  place-items: center;
  background-color: #13131d;
`;
export const LoadingSpinnerContainer = styled.div`
  height: 250px;
  width: 250px;
`;
