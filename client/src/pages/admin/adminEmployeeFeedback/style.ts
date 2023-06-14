import styled from "styled-components";
export const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  padding: 30px 0;
  grid-gap: 30px;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
`;

export const HeadingWrapper = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 20px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Heading = styled.h1`
  color: ${({ color }) => color};
  background-color: #212332;
  padding: 20px;
  border-radius: 50px;
  text-align: center;
  @media screen and (max-width: 1200px) {
    font-size: 25px;
  }
`;

export const ChartMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChartContainer = styled.div`
  width: 350px;
  height: 350px;
  @media screen and (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;
