import { styled } from "styled-components";

export const CreateTopicButtonContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const AdminButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
`;

export const EditButton = styled.button<{ color: string }>`
  height: 45px;
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  color: #fff;
  background-color: ${({ color }) => color};
  cursor: pointer;
  border-radius: 10px;
`;
