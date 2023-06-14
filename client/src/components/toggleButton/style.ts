import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  input[type="checkbox"] {
    zoom: 0;
    margin: 0;
  }
`;
export const Label = styled.label<any>`
  display: block;
  width: 40px;
  height: 23px;
  border-radius: 16px;
  background: ${({ toggleSwitch }) => (toggleSwitch ? "#ff008e" : "#484848")};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    left: ${({ toggleSwitch }) => (toggleSwitch ? "19px" : "2px")};
    border-radius: 50%;
    width: 19px;
    height: 19px;
    background: ${({ toggleSwitch }) => (toggleSwitch ? "#fff" : "#bebfc3")};
    transition: 0.2s;
    cursor: pointer;
  }
`;

export const Input = styled.input<any>`
  display: none;
`;
