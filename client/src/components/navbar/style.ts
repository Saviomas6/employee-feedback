import { Link } from "react-router-dom";
import styled from "styled-components";
export const NavbarLayout = styled.div`
  background-color: #13131d;
  height: 90px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
`;

export const NavbarMainContainer = styled.div`
  height: 90px;
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
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const ProfilePicContainer = styled.div`
  height: 46px;
  width: 46px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #b269e8;
`;

export const LogoLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
