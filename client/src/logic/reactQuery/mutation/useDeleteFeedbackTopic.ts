import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation, useQueryClient } from "react-query";

const deleteFeedbackTopic = (option: any) => {
  const url = `${apiEndPoints?.userFeedbackTopic}/${option?.id}`;
  return axiosInstance.delete(url);
};

export const useDeleteFeedbackTopic = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteFeedbackTopic, {
    onSuccess: (_data) => {
      queryClient.invalidateQueries("userFeedbackTopic");
    },
  });
};
