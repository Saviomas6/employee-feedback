import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation, useQueryClient } from "react-query";
interface I_Values {
  _id: string;
  topicName: string;
  topicValue: string;
}

const editFeedbackTopic = (options: I_Values) => {
  const url = apiEndPoints?.userFeedbackTopic;
  return axiosInstance.put(url, options);
};

export const useEditFeedbackTopic = () => {
  const queryClient = useQueryClient();
  return useMutation(editFeedbackTopic, {
    onSuccess: (_data) => {
      queryClient.invalidateQueries("userFeedbackTopic");
    },
  });
};
