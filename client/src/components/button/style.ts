import { styled } from "styled-components";

export const SharedButton = styled.button<any>`
  height: 50px;
  width: 150px;
  outline: none;
  border: none;
  font-size: 18px;
  background-color: #b269e8;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  :disabled {
    opacity: 0.5;
  }
`;
