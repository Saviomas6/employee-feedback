import { styled } from "styled-components";

export const SharedButton = styled.button<any>`
  height: 50px;
  width: 150px;
  outline: none;
  border: none;
  font-size: 18px;
  background-color: #ff008e;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
`;

export const LoadingContainer = styled.span`
  display: inline-block;
  height: 100%;
  width: 90px;
  color: red;
`;
