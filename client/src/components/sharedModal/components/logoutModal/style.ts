import styled from "styled-components";

export const LogoutModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  @media screen and (max-width: 480px) {
    margin: 14px 0;
  }
`;

export const AvatarProfile = styled.div`
  height: 80px;
  width: 80px;
  box-sizing: border-box;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff008e;
  @media screen and (max-width: 480px) {
    height: 60px;
    width: 60px;
  }
`;

export const ProfileName = styled.div`
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin: 6px 0;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
