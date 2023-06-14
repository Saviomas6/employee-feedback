import { styled } from "styled-components";

export const ConfirmDeleteDescription = styled.div`
  font-size: 18px;
  color: #fff;
  margin: 25px 0;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ConfirmDeleteButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
`;
