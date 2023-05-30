import { Link } from "react-router-dom";
import styled from "styled-components";
export const NavbarMainContainer = styled.div`
  padding: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarContainer = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SignUpButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const SignUpButton = styled.button<{
  bgColor: string;
  borderColor: string;
}>`
  height: 45px;
  width: 130px;
  outline: none;
  border: none;
  font-size: 18px;
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ borderColor }) => borderColor};
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    height: 35px;
    width: 100px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
`;
export const LogoMainContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
export const NavTab = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
