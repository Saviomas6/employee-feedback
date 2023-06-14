import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation } from "react-query";
interface I_Props {
  name: string;
  department: string;
  comments: string;
  review: string;
  topic: string | undefined;
  email: string;
  anonymous: boolean;
}
const createFeedbackForm = (options: I_Props) => {
  const url = apiEndPoints?.userFeedback;
  return axiosInstance.post(url, options);
};

export const useCreateFeedbackFormMutation = () => {
  return useMutation(createFeedbackForm);
};
