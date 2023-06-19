import { useQuery } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
interface I_Props {
  _id: string;
  topicName: string;
  topicValue: string;
}
const getUserFeedbackTopic = async (search: string) => {
  const { data } = await axiosInstance.get(
    `${apiEndPoints?.userFeedbackTopic}?search=${search}`
  );
  return data;
};

export const useGetUserFeedbackTopic = (search: string) => {
  const { data, isError, isFetching, isLoading } = useQuery<I_Props[]>(
    ["userFeedbackTopic", search],
    () => getUserFeedbackTopic(search),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isError, isFetching, isLoading };
};
