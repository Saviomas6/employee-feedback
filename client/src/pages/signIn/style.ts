import { styled } from "styled-components";

export const UserTabMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px 0;
`;
export const UserTab = styled.div<{ isUserTab: boolean }>`
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isUserTab }) => (isUserTab ? "#ff008e" : "none")};
  border-radius: 10px;
`;

export const UserLoginWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SignGoogleButton = styled.div`
  background-color: #fcfcfc;
  outline: none;
  border: none;
  height: 45px;
  width: max-content;
  padding: 0 16px;
  font-size: 16px;
  color: #000;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  cursor: pointer;
`;
