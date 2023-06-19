import { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  AlreadyUser,
  ErrorMessageText,
  InputField,
  InputFieldWrapper,
  InputLabel,
  ModalButtonWrapper,
  ModalHeading,
  PasswordHideUnHideContainer,
  StyledLink,
} from "../../styles/sharedStyles";
import Button from "../../components/button/Button";
import { Paths } from "../../routes/path";
import SharedModal from "../../components/sharedModal/SharedModal";
import { useSignUpFormMutation } from "../../logic/reactQuery/mutation/useSignUpForm";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../../components/sharedModal/components/errorModal/ErrorModal";
import SuccessModal from "../../components/sharedModal/components/successModal/SuccessModal";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const { mutateAsync: createSignUpForm, error }: any = useSignUpFormMutation();
  const [isSignUpLoading, setIsSignUpLoading] = useState<boolean>(false);
  const [isSignUpError, setIsSignUpError] = useState<boolean>(false);
  const [isSignUpSuccessOpen, setSignUpSuccessOpen] = useState<boolean>(false);
  const [isPasswordHide, setPasswordHide] = useState<boolean>(false);
  const [isConfirmPasswordHide, setConfirmPasswordHide] =
    useState<boolean>(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
  };

  const handleSubmitForm = async (values: any, { resetForm }: any) => {
    try {
      setIsSignUpLoading(true);
      setSignUpSuccessOpen(true);
      const result = await createSignUpForm(values);
      if (result?.data?.message) {
        setIsSignUpLoading(false);
      }
    } catch (e) {
      console.log(e);
      setSignUpSuccessOpen(false);
      setIsSignUpError(true);
      resetForm();
    }
  };

  const handleModalClose = () => {
    navigate(Paths.home);
  };
  return (
    <div>
      <SharedModal onClickClose={handleModalClose}>
        <div>
          <ModalHeading>Sign Up</ModalHeading>
          <Formik
            onSubmit={handleSubmitForm}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form>
              <InputLabel htmlFor="name">Name</InputLabel>
              <InputFieldWrapper>
                <InputField
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                />
              </InputFieldWrapper>
              <ErrorMessageText>
                <ErrorMessage name="name" />
              </ErrorMessageText>
              <InputLabel htmlFor="email">Email</InputLabel>
              <InputFieldWrapper>
                <InputField
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                />
              </InputFieldWrapper>
              <ErrorMessageText>
                <ErrorMessage name="email" />
              </ErrorMessageText>
              <InputLabel htmlFor="password">Password</InputLabel>
              <InputFieldWrapper>
                <InputField
                  type={isPasswordHide ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  name="password"
                />
                <PasswordHideUnHideContainer
                  onClick={() => setPasswordHide(!isPasswordHide)}
                >
                  {isPasswordHide ? (
                    <AiFillEye color="#000" size={25} />
                  ) : (
                    <AiFillEyeInvisible color="#000" size={25} />
                  )}
                </PasswordHideUnHideContainer>
              </InputFieldWrapper>
              <ErrorMessageText>
                <ErrorMessage name="password" />
              </ErrorMessageText>
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <InputFieldWrapper>
                <InputField
                  type={isConfirmPasswordHide ? "text" : "password"}
                  placeholder="Confirm password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <PasswordHideUnHideContainer
                  onClick={() => setConfirmPasswordHide(!isConfirmPasswordHide)}
                >
                  {isConfirmPasswordHide ? (
                    <AiFillEye color="#000" size={25} />
                  ) : (
                    <AiFillEyeInvisible color="#000" size={25} />
                  )}
                </PasswordHideUnHideContainer>
              </InputFieldWrapper>
              <ErrorMessageText>
                <ErrorMessage name="confirmPassword" />
              </ErrorMessageText>
              <AlreadyUser>
                Already have an account?
                <StyledLink to={Paths.signIn}>
                  <span> Sign In</span>
                </StyledLink>
              </AlreadyUser>
              <ModalButtonWrapper>
                <Button type="submit" text="Sign Up" />
              </ModalButtonWrapper>
            </Form>
          </Formik>
        </div>
      </SharedModal>

      {isSignUpSuccessOpen && (
        <SuccessModal
          heading="Success"
          description="Congratulations, your account has been successfully created"
          isLoading={isSignUpLoading}
          handleCloseModal={() => navigate(Paths.signIn)}
        />
      )}

      {isSignUpError && (
        <ErrorModal
          handleCloseModal={() => {
            setIsSignUpError(false);
          }}
          heading="Error"
          description={error?.response?.data?.message}
        />
      )}
    </div>
  );
};

export default SignUp;
