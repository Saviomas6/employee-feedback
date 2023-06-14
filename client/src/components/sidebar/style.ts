import { styled } from "styled-components";

export const SideBarMainContainer = styled.div<{ isSideBarOpen: boolean }>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: ${({ isSideBarOpen }) => (isSideBarOpen ? "0%" : "-100%")};
  background-color: #212332;
  transition: 420ms;
  padding: 24px;
  box-sizing: border-box;
  z-index: 100;
  @media screen and (min-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 900px) {
    display: block;
  }
`;
export const SideBarContainer = styled.div``;

export const SideBarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SideBarLogoIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SideBarLogoIcon = styled.div`
  display: flex;
`;
export const SideBarLogoHeading = styled.div`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
`;
export const SideBarCloseIcon = styled.div`
  display: flex;
  cursor: pointer;
`;

export const SideBarNavTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 10px 0;
`;
export const SideBarNavTab = styled.div`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  margin: 20px 0;
  color: #fff;
  cursor: pointer;
`;

export const SideBarButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`;
