import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  ErrorMessageText,
  InputField,
  InputFieldWrapper,
  InputLabel,
  ModalButtonWrapper,
  ModalHeading,
} from "../../../../styles/sharedStyles";
import Button from "../../../button/Button";
import SharedModal from "../../SharedModal";
import axios from "axios";

import { setSignUp } from "../../../../logic/redux/action/action";
import { useAppDispatch } from "../../../../logic/redux/store/hooks";

interface I_Props {
  setIsSignUpLoading(value: boolean): void;
  setSignUpSuccessModal(value: boolean): void;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpModal = ({
  setIsSignUpLoading,
  setSignUpSuccessModal,
}: I_Props) => {
  const dispatch = useAppDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmitForm = async (values: any) => {
    try {
      setIsSignUpLoading(true);
      setSignUpSuccessModal(true);
      dispatch(setSignUp(false));
      const result = await axios.post(
        "http://localhost:8081/user/signup",
        values
      );
      if (result?.data?.message) {
        setIsSignUpLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleModalClose = () => {
    dispatch(setSignUp(false));
  };

  return (
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
                type="password"
                placeholder="Password"
                id="password"
                name="password"
              />
            </InputFieldWrapper>
            <ErrorMessageText>
              <ErrorMessage name="password" />
            </ErrorMessageText>
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <InputFieldWrapper>
              <InputField
                type="password"
                placeholder="Confirm password"
                id="confirmPassword"
                name="confirmPassword"
              />
            </InputFieldWrapper>
            <ErrorMessageText>
              <ErrorMessage name="confirmPassword" />
            </ErrorMessageText>
            <ModalButtonWrapper>
              <Button type="submit" text="Sign Up" />
            </ModalButtonWrapper>
          </Form>
        </Formik>
      </div>
    </SharedModal>
  );
};

export default SignUpModal;
