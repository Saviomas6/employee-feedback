import { useState } from "react";
import {
  AlreadyUser,
  ErrorMessageText,
  InputField,
  InputFieldWrapper,
  InputLabel,
  ModalButtonWrapper,
  ModalHeading,
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

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isSignInLoading, setIsSignInLoading] = useState<boolean>(false);
  const { mutateAsync: createSignInForm, isLoading } = useSignInFormMutation();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmitForm = async (values: any) => {
    setIsSignInLoading(true);
    const result = await createSignInForm(values);
    if (result?.data?.message) {
      setIsSignInLoading(false);
      localStorage.setItem("token", result?.data?.token);
      const decoded: any = decodeToken(result?.data?.token);
      localStorage.setItem("expirationTime", decoded?.expirationTime);
      dispatch(setLoggedIn(true));
      dispatch(
        setLoggedDetail([
          {
            name: decoded?.decodedToken?.name,
            email: decoded?.decodedToken?.email,
          },
        ])
      );
      navigate(Paths.home);
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
                type="password"
                placeholder="Password"
                id="password"
                name="password"
              />
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
      </div>
    </SharedModal>
  );
};

export default SignIn;
