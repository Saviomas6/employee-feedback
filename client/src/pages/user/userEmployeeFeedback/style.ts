import { Field } from "formik";
import styled from "styled-components";
export const UserSectionMainContainer = styled.div`
  margin-top: 50px;
`;
export const HeadingText = styled.div`
  font-size: 22px;
  color: #fff;
`;

export const InputFieldWrapper = styled.div`
  height: 50px;
  width: 700px;
  margin: 30px 0;
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
`;

export const TextAreaContainer = styled.div`
  height: 250px;
  width: 700px;
  margin: 30px 0;
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
`;
export const UserSectionButtonWrapper = styled.div`
  margin: 45px 0;
`;
