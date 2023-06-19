import { useState } from "react";
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
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../logic/redux/store/hooks";
import { useSignInFormMutation } from "../../logic/reactQuery/mutation/useSignInForm";
import { setLoggedDetail, setLoggedIn } from "../../logic/redux/action/action";
import { decodeToken } from "../../utils/utils";
import Button from "../../components/button/Button";
import SharedModal from "../../components/sharedModal/SharedModal";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes/path";
import ErrorModal from "../../components/sharedModal/components/errorModal/ErrorModal";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isSignInError, setIsSignInError] = useState<boolean>(false);
  const [isPasswordHide, setPasswordHide] = useState<boolean>(false);

  const {
    mutateAsync: createSignInForm,
    isLoading,
    error,
  }: any = useSignInFormMutation();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmitForm = async (values: any, { resetForm }: any) => {
    try {
      const result = await createSignInForm(values);
      if (result?.data?.message) {
        localStorage.setItem("token", result?.data?.token);
        const decoded: any = decodeToken(result?.data?.token);
        localStorage.setItem("expirationTime", decoded?.expirationTime);
        dispatch(setLoggedIn(true));
        dispatch(
          setLoggedDetail([
            {
              name: result?.data?.user?.name,
              email: result?.data?.user?.email,
              isAdmin: result?.data?.user?.isAdmin,
            },
          ])
        );
        navigate(Paths.home);
      }
    } catch (e) {
      console.log(e);
      setIsSignInError(true);
      resetForm();
    }
  };

  const handleModalClose = () => {
    navigate(Paths.home);
  };
  return (
    <SharedModal onClickClose={handleModalClose}>
      <div>
        <ModalHeading>Sign In</ModalHeading>
        <Formik
          onSubmit={handleSubmitForm}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form>
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
            <AlreadyUser>
              Don't have an account?
              <StyledLink to={Paths.signUp}>
                <span> Create</span>
              </StyledLink>
            </AlreadyUser>
            <ModalButtonWrapper>
              <Button
                type="submit"
                isLoading={isLoading}
                disabled={isLoading}
                text="Sign In"
              />
            </ModalButtonWrapper>
          </Form>
        </Formik>
        {isSignInError && (
          <ErrorModal
            handleCloseModal={() => {
              setIsSignInError(false);
            }}
            heading="Error"
            description={error?.response?.data?.message}
          />
        )}
      </div>
    </SharedModal>
  );
};

export default SignIn;
