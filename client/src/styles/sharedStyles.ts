import { keyframes, styled } from "styled-components";
import { Field } from "formik";
import { Link } from "react-router-dom";
export const Container = styled.div<any>`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-right: var(1.5rem, 0.75rem);
  padding-left: var(1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 992px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

const opacityAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const OpacityAnimation = styled.div<any>`
  animation: ${opacityAnimation} 1s;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 18px;
  color: #fff;
`;

export const InputFieldWrapper = styled.div`
  height: 40px;
  width: 100%;
  margin: 10px 0;
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

export const ModalButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;
export const ModalHeading = styled.h2`
  color: #fff;
  text-align: center;
`;
export const ModalDescription = styled.div`
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin: 10px 0;
`;
export const ErrorMessageText = styled.div`
  color: #ff0000;
  font-size: 16px;
`;

export const effect = keyframes`
  0% {
    color: #fff;
  }
  50%{
    color: #b269e8;
  }
  100%{
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  padding: 100px 0;
`;

export const FeedbackTopicLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  padding: 30px 0;
`;

export const FeedbackTopicContainer = styled.div`
  background-color: #212332;
  color: #fff;
  height: 200px;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FeedbackTopicHeading = styled.h1`
  color: #fff;
  text-align: center;
`;
export const FeedbackTopicText = styled.h3`
  color: #fff;
  text-align: center;
  /* font-size: 16px; */
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
