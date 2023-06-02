import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation } from "react-query";
interface I_Props {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAdmin: boolean;
}
const signUpForm = (options: I_Props) => {
  const url = apiEndPoints?.signUp;
  return axiosInstance.post(url, options);
};

export const useSignUpFormMutation = () => {
  return useMutation(signUpForm);
};
