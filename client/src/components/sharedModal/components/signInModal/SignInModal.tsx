import {
  ErrorMessageText,
  InputField,
  InputFieldWrapper,
  InputLabel,
  ModalButtonWrapper,
  ModalHeading,
} from "../../../../styles/sharedStyles";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../../button/Button";
import SharedModal from "../../SharedModal";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

interface I_Props {
  setSignInOpen(value: boolean): void;
}
const SignInModal = ({ setSignInOpen }: I_Props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmitForm = async (values: any) => {
    console.log(values);
  };

  return (
    <SharedModal toggleModal={setSignInOpen}>
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

            <ModalButtonWrapper>
              <Button type="submit" text="Sign In" />
            </ModalButtonWrapper>
          </Form>
        </Formik>
      </div>
    </SharedModal>
  );
};

export default SignInModal;
