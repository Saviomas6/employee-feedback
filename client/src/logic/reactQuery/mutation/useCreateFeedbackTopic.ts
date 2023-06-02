import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation, useQueryClient } from "react-query";
interface I_Values {
  topicName: string;
  topicValue: string;
}

const createFeedbackTopic = (options: I_Values) => {
  const url = apiEndPoints?.userFeedbackTopic;
  return axiosInstance.post(url, options);
};

export const useCreateFeedbackTopic = () => {
  const queryClient = useQueryClient();
  return useMutation(createFeedbackTopic, {
    onSuccess: (_data) => {
      queryClient.invalidateQueries("userFeedbackTopic");
    },
  });
};
