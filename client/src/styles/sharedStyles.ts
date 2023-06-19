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

export const opacityAnimation = keyframes`
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
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const InputFieldWrapper = styled.div`
  height: 40px;
  width: 100%;
  margin: 10px 0;
  position: relative;
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

export const ModalButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;
export const ModalHeading = styled.h2`
  color: #fff;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const ModalDescription = styled.div`
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin: 10px 0;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const ErrorMessageText = styled.div`
  color: #ff0000;
  font-size: 16px;
`;

export const effect = keyframes`
  0% {
    color: #fff;
  }

  50% {
    color: #FF008E;
  }

  100%{
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  padding: 100px 0;
`;

export const FeedbackTopicLayout = styled.div<{ dataLength?: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  padding: ${({ dataLength }) => (dataLength ? "0" : "30px 0")};
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
  justify-content: space-evenly;
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

export const DummyContainer = styled.div`
  height: 70vh;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  display: grid;
  place-items: center;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AlreadyUser = styled.div`
  text-align: center;
  font-size: 14px;
  span {
    color: #ff008e;
    cursor: pointer;
  }
`;

export const CreateTopicButtonContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
`;

export const AdminButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
`;

export const EditButton = styled.button<{ color: string }>`
  height: 45px;
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  color: #fff;
  background-color: ${({ color }) => color};
  cursor: pointer;
  border-radius: 10px;
`;

export const AnnouncementHeadingContainer = styled.div`
  margin: 20px 0;
`;

export const AnnouncementHeading = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  background-color: #212332;
  border-radius: 20px;
  padding: 20px;
  span {
    color: #ff008e;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AnnouncementDescriptionContainer = styled.div``;

export const AnnouncementDescription = styled.div`
  font-size: 22px;
  color: #fff;
  font-weight: 500;
  background-color: #212332;
  border-radius: 20px;
  padding: 20px;
  margin: 25px 0;
  span {
    color: #ff008e;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    height: 200px;
    overflow: auto;
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
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    height: 35px;
    width: 100px;
  }
`;

export const PasswordHideUnHideContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  display: flex;
  cursor: pointer;
`;

export const SkeletonLoadingAnimation = () => keyframes`
  0% {
    background:#2b3641
  }
  100% {
    background: #7A798A;
  }
`;

export const LoadingSkeleton = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 20px;
  animation: ${SkeletonLoadingAnimation} 1s linear infinite alternate !important;
`;

export const SearchInputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 20px 0;
`;

export const SearchInputField = styled.input`
  height: 45px;
  width: 300px;
  outline: none;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 18px;
  padding: 0 26px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
