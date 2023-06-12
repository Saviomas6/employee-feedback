import { Field } from "formik";
import styled from "styled-components";
export const UserSectionMainContainer = styled.div`
  margin-top: 50px;
`;
export const HeadingText = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
`;

export const InputMainWrapper = styled.div`
  margin: 16px 0;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 18px;
  color: #fff;
  margin: 8px 0;
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
`;
export const UserSectionButtonWrapper = styled.div`
  margin: 45px 0;
`;
