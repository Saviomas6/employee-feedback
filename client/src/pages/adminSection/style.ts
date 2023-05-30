import styled from "styled-components";
export const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  padding: 30px 0;
  grid-gap: 30px;
`;

export const HeadingWrapper = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 20px;
`;

export const Heading = styled.h1`
  color: ${({ color }) => color};
  background-color: #212332;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;
