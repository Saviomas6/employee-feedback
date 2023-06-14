import { Field } from "formik";
import styled from "styled-components";
export const UserSectionMainContainer = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;
export const HeadingText = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const InputMainWrapper = styled.div`
  margin: 16px 0;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 18px;
  color: #fff;
  margin: 8px 0;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const InputFieldWrapper = styled.div`
  height: 50px;
  width: 700px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InputField = styled(Field)`
  height: 100%;
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  padding: 20px;
  box-sizing: border-box;
  font-size: 18px;
  border-radius: 10px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const TextAreaContainer = styled.div`
  height: 250px;
  width: 700px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const TextAreaField = styled(Field)`
  height: 100%;
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  padding: 20px;
  box-sizing: border-box;
  font-size: 18px;
  border-radius: 10px;
  background-color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const UserSectionButtonWrapper = styled.div`
  margin: 45px 0;
`;

export const UserSectionAnonymousMainContainer = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const UserSectionAnonymousLabel = styled.div`
  font-size: 18px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const UserSectionAnonymousDescription = styled.div`
  font-size: 14px;
  color: #fff;
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 250px;
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    width: 200px;
    font-size: 10px;
  }
`;
export const NameField = styled.div`
  height: 100%;
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 18px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  opacity: 0.5;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
