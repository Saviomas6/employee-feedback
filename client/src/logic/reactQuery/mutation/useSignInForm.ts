import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation, useQueryClient } from "react-query";
interface I_Props {
  email: string;
  password: string;
}
const signInForm = (options: I_Props) => {
  const url = apiEndPoints?.signIn;
  return axiosInstance.post(url, options);
};

export const useSignInFormMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(signInForm, {
    onSuccess: (_data) => {
      queryClient.invalidateQueries("userDetails");
    },
  });
};
