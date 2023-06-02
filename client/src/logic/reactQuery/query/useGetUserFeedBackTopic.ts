import { useQuery } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
interface I_Props {
  topicName: string;
  topicValue: string;
}
const getUserFeedbackTopic = async () => {
  const { data } = await axiosInstance.get(
    `${apiEndPoints?.userFeedbackTopic}`
  );
  return data;
};

export const useGetUserFeedbackTopic = () => {
  const { data, isError, isFetching, isLoading } = useQuery<I_Props[]>(
    "userFeedbackTopic",
    getUserFeedbackTopic
  );
  return { data, isError, isFetching, isLoading };
};
