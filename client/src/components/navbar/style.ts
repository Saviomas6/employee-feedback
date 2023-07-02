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
  @media screen and (max-width: 1132px) {
    font-size: 24px;
  }
`;

export const SignUpButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 1132px) {
    gap: 10px;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;
export const LogoMainContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NavTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: 1132px) {
    gap: 20px;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const NavTab = styled(Link)<{ pathTab: boolean }>`
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: ${({ pathTab }) => (pathTab ? " #ff008e" : "#fff")};
  padding: 5px 0;
  border-bottom: ${({ pathTab }) => (pathTab ? "2px solid #ff008e" : "none")};
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
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
  padding: 3px;
  background-color: #ff008e;
  @media screen and (max-width: 1024px) {
    height: 38px;
    width: 38px;
  }
`;

export const LogoLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const HamBuggerMenuContainer = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

export const SideBarWrapper = styled.div`
  /* ... */
`;
